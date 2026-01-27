// web/src/components/Gallery.tsx

import { client } from "@/lib/sanity";
import GalleryClient from "./GalleryClient";

// web/src/components/Gallery.tsx

async function getGalleryData() {
  // Added "!defined(videoUrl)" to exclude video projects
  const query = `*[_type == "gallery" && !defined(videoUrl)] | order(_createdAt desc) {
    _id,
    title,
    category,
    "src": mainImage.asset->url,
    "lqip": mainImage.asset->metadata.lqip
  }`;
  return await client.fetch(query);
}

// Update the component to accept props
export default async function Gallery({ 
  initialCategory = "all", 
  hideTabs = false 
}: { 
  initialCategory?: string, 
  hideTabs?: boolean 
}) {
  const images = await getGalleryData();

  return (
    <GalleryClient 
      initialImages={images} 
      initialCategory={initialCategory} 
      hideTabs={hideTabs} // This is the crucial part
    />
  );
}