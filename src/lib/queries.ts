import { sanityClient } from "./sanity";

const videoFields = `
  _id,
  title,
  "slug": slug.current,
  description,
  thumbnail,
  thumbnailUrl,
  category,
  tags,
  rating,
  featured,
  server1Url,
  server2Url,
  _createdAt
`;

export async function getVideos() {
  return await sanityClient.fetch(`
    *[_type == "video"]
    | order(_createdAt desc) {
      ${videoFields}
    }
  `);
}

export async function getVideo(slug: string) {
  return await sanityClient.fetch(
    `*[_type == "video" && slug.current == $slug][0] {
      ${videoFields}
    }`,
    { slug },
  );
}