import { client } from "@/lib/sanity";
import VideoClient from "./VideoClient"; // We will create this next

// web/src/components/Videos.tsx

async function getVideoData() {
  // Added "defined(videoUrl)" to ONLY include video projects
  const query = `*[_type == "gallery" && defined(videoUrl)] | order(_createdAt desc) {
    _id,
    title,
    category,
    "thumbnail": mainImage.asset->url,
    videoUrl
  }`;
  return await client.fetch(query);
}
export default async function Videos() {
  const sanityVideos = await getVideoData();

  return <VideoClient initialVideos={sanityVideos} />;
}