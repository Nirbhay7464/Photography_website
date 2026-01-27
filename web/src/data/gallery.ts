export type GalleryCategory =
  | "wedding"
  | "prewedding"
  | "engagement"
  | "maternity"
  | "event";

export interface GalleryImage {
  id: number;
  category: GalleryCategory;
  src: string;
  alt: string;
}

/**
 * 🔹 DYNAMIC IMAGE SOURCE
 * Later replace with Cloudinary / API / CMS
 */
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    category: "wedding",
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    alt: "Wedding photography moment",
  },
  {
    id: 2,
    category: "prewedding",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    alt: "Pre wedding shoot",
  },
  {
    id: 3,
    category: "engagement",
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    alt: "Engagement photography",
  },
  {
    id: 4,
    category: "maternity",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    alt: "Maternity photography",
  },
  {
    id: 5,
    category: "event",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    alt: "Event photography",
  },
];

/**
 * 🔹 CATEGORY META (used for SEO & headings)
 */
export const categoryMeta: Record<
  GalleryCategory,
  { title: string; description: string }
> = {
  wedding: {
    title: "Wedding Photography",
    description:
      "Timeless wedding moments captured with emotion and elegance.",
  },
  prewedding: {
    title: "Pre-Wedding Photography",
    description:
      "Romantic pre-wedding stories told through cinematic frames.",
  },
  engagement: {
    title: "Engagement Photography",
    description:
      "Beautiful engagement moments captured naturally and creatively.",
  },
  maternity: {
    title: "Maternity Photography",
    description:
      "Celebrating motherhood with grace, warmth, and love.",
  },
  event: {
    title: "Event Photography",
    description:
      "Professional photography for events and special occasions.",
  },
};
