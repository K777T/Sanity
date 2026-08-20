import "dotenv/config";
import { algoliasearch } from "algoliasearch";
import { sanityClient } from "../src/lib/sanity";

const appId = process.env.ALGOLIA_APP_ID;
const adminApiKey = process.env.ALGOLIA_ADMIN_API_KEY;
const indexName = process.env.ALGOLIA_INDEX_NAME || "videos";

if (!appId || !adminApiKey) {
    throw new Error(
        "Missing ALGOLIA_APP_ID or ALGOLIA_ADMIN_API_KEY in .env",
    );
}

const algolia = algoliasearch(appId, adminApiKey);

const videos = await sanityClient.fetch(`
  *[_type == "video"]
  | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    thumbnailUrl,
    category,
    tags,
    rating,
    featured,
    _createdAt
  }
`);

const records = videos.map((video: any) => ({
    objectID: video._id,

    title: video.title || "",
    slug: video.slug || "",
    description: video.description || "",

    thumbnailUrl: video.thumbnailUrl || "",

    category: video.category || "",

    tags: Array.isArray(video.tags) ? video.tags : [],

    rating:
        typeof video.rating === "number"
            ? video.rating
            : null,

    featured: video.featured === true,

    createdAt: video._createdAt || null,
}));

console.log(`Found ${records.length} videos in Sanity.`);

if (!records.length) {
    console.log("No videos found. Nothing to index.");
    process.exit(0);
}

await algolia.saveObjects({
    indexName,
    objects: records,
});

console.log(
    `✅ Successfully indexed ${records.length} videos into Algolia index "${indexName}".`,
);