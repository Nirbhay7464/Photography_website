// This tells Vercel to check for new Sanity data every 60 seconds
export const revalidate = 60;

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import {
  GalleryCategory,
  categoryMeta,
} from "@/data/gallery";

interface PageProps {
  params: Promise<{
    category: GalleryCategory;
  }>;
}

/* ============================
   SEO METADATA (FIXED)
============================ */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { category } = await params;

  if (!categoryMeta[category]) {
    return {};
  }

  const { title, description } = categoryMeta[category];

  const siteName = "Cinematic Studio";
  const url = `https://yourdomain.com/portfolio/${category}`;

  return {
    title: `${title} | ${siteName}`,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
    },
  };
}

/* ============================
   PAGE COMPONENT (FIXED)
============================ */
export default async function PortfolioCategoryPage({
  params,
}: PageProps) {
  const { category } = await params;

  if (!categoryMeta[category]) {
    notFound();
  }

  const { title, description } = categoryMeta[category];

 // Inside your PortfolioCategoryPage component
return (
  <main className="pt-20 bg-black min-h-screen">
    <section className="max-w-7xl mx-auto px-6 mb-16">
      <h1 className="text-5xl md:text-7xl font-serif italic text-white mb-4">
        {title}
      </h1>
      <p className="text-gray-500 max-w-2xl border-l border-[#D4AF37] pl-6">
        {description}
      </p>
    </section>

    {/* This will now show ONLY the images because hideTabs is true */}
    <Gallery initialCategory={category} hideTabs={true} />
  </main>
);
}
