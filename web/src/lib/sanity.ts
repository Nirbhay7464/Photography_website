import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId) {
  console.error("Sanity Project ID is missing! Check your Environment Variables.");
}

export const client = createClient({
  projectId: projectId || "placeholder", // "placeholder" prevents the 'must contain projectId' crash
  dataset: dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});