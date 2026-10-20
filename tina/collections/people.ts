
import type { Collection } from "tinacms";

export const PeopleCollection: Collection = {
  name: "person",
  label: "Lab Members",
  path: "src/content/people",
  format: "mdx",

  fields: [
    {
      name: "name",
      label: "Full Name",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      name: "role",
      label: "Position",
      type: "string",
      required: true,
    },
    {
      name: "researchArea",
      label: "Research Area",
      type: "string",
    },
    {
      name: "photo",
      label: "Profile Photo",
      type: "image",
    },
    {
      name: "email",
      label: "Email Address",
      type: "string",
    },
    {
      name: "website",
      label: "Personal Website",
      type: "string",
    },
    {
      name: "bio",
      label: "Biography",
      type: "rich-text",
      isBody: true,
    },
  ],
};
