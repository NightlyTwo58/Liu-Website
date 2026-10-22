
import type { Collection } from "tinacms";

export const PublicationsCollection: Collection = {
  name: "publication",
  label: "Publications",
  path: "src/content/publications",
  format: "mdx",

  fields: [
    {
      name: "title",
      label: "Publication Title",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      name: "authors",
      label: "Authors",
      type: "string",
      required: true,
    },
    {
      name: "year",
      label: "Publication Year",
      type: "number",
      required: true,
    },
    {
      name: "journal",
      label: "Journal or Conference",
      type: "string",
    },
    { name: "citation", label: "Formatted citation", type: "string", ui: { component: "textarea" } },
    { name: "status", label: "Publication status", type: "string" },
    { name: "category", label: "Work type", type: "string", options: ["Published article", "Working paper", "Book or chapter", "Case"] },
    { name: "volume", label: "Volume and issue", type: "string" },
    { name: "pages", label: "Pages or article number", type: "string" },
    { name: "authorOrcid", label: "Author ORCID URL", type: "string", description: "ORCID link" },
    {
      name: "doi",
      label: "DOI",
      type: "string",
    },
    {
      name: "paperUrl",
      label: "Publication URL",
      type: "string",
    },
    {
      name: "pdfUrl",
      label: "PDF URL",
      type: "string",
    },
    {
      name: "abstract",
      label: "Abstract",
      type: "rich-text",
      isBody: true,
    },
  ],
};
