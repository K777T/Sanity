import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "p3smjg3s",
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});