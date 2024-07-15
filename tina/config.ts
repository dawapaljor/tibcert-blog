import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || "",
  clientId: process.env.TINA_CLIENT_ID || "",  // Get this from tina.io
  token: process.env.TINA_TOKEN || "",  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
   // tina: {
   //   mediaRoot: "assets",
   //   publicFolder: "public",
   // },
   loadCustomStore: async () => {
    const pack = await import("next-tinacms-cloudinary");
    return pack.TinaCloudCloudinaryMediaStore;
  },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog",
        path: "src/content/blog",
        ui: {
          filename: {
            slugify: values => {
              const postDate = values.pubDate ? new Date(values.pubDate) : new Date();
              return `${postDate.toISOString().split("T")[0]}-${(values.title || "")
                .toLowerCase()
                .replace(/ /g, "-")}`.replace(/[^\w\.\/-\s]/gi, "");
            }
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Date",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: ['Reports','Bulletin'],
          },
          {
						type: 'string',
						name: 'tags',
						required: false,
						label: 'Tags',
						description: 'Tags for this post',
						list: true,
						ui: {
							component: 'tags'
						}
					},
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "translation",
            label: "Tibetan Translation link",
          },
          {
            type: 'image',
            label: 'Hero image',
            name: 'heroImage',
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "boBlog",
        label: "Tibetan",
        path: "src/content/boBlog",
        ui: {
          filename: {
            slugify: values => {
              const postDate = values.pubDate ? new Date(values.pubDate) : new Date();
              return `${postDate.toISOString().split("T")[0]}-${(values.title || "")
                .toLowerCase()
                .replace(/ /g, "-")}`.replace(/[^\w\.\/-\s]/gi, "");
            }
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Date",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: ['སྙན་ཐོ།','Bulletin'],
          },
          {
						type: 'string',
						name: 'tags',
						required: false,
						label: 'Tags',
						description: 'Tags for this post',
						list: true,
						ui: {
							component: 'tags'
						}
					},
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "translation",
            label: "English Translation link",
          },
          {
            type: 'image',
            label: 'Hero image',
            name: 'heroImage',
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
    
  },
  search: {
    tina: {
      indexerToken: '0bc74cfd4c0f483b1997f717ca65f5c313339773',
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
