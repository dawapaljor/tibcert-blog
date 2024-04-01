import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
 // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
 clientId: "ee5040e8-2364-4d34-952e-f17c44fe3435",
  // Get this from tina.io
  //token: process.env.TINA_TOKEN,
token: "fa48ce3c17f99c499918bd1d7b1d592b847dcc6c",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
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
            label: 'Tags',
            name: 'tags',
            type: 'string',
            list: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: 'image',
            label: 'Hero image',
            name: 'heroImage',
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
});
