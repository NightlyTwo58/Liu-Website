
import { defineConfig } from "tinacms";

import { BlogCollection } from "./collections/blog";
import { GlobalConfigCollection } from "./collections/global-config";
import { PageCollection } from "./collections/page";
import { PeopleCollection } from "./collections/people";
import { PublicationsCollection } from "./collections/publications";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.WORKERS_CI_BRANCH ||
  process.env.CF_PAGES_BRANCH ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

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

  schema: {
    collections: [
      BlogCollection,
      PageCollection,
      GlobalConfigCollection,
      PeopleCollection,
      PublicationsCollection,
    ],
  },
});
