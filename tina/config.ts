import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || "",

  // Get this from tina.io
  //clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  clientId: process.env.TINA_CLIENT_ID || "",
  // Get this from tina.io
  //token: process.env.TINA_TOKEN,
token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "public",
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
  search: {
    tina: {
      indexerToken: '0bc74cfd4c0f483b1997f717ca65f5c313339773',
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
