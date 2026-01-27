export interface VideoItem {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

export const videos: VideoItem[] = [
  {
    id: 1,
    title: "Wedding Highlight Film",
    thumbnail:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Pre-Wedding Cinematic",
    thumbnail:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Event Aftermovie",
    thumbnail:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];
