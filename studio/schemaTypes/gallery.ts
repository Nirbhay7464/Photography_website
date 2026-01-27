// studio/schemaTypes/gallery.ts
import { defineType, defineField } from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Project/Client Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Wedding', value: 'wedding' },
          { title: 'Pre Wedding', value: 'prewedding' },
          { title: 'Engagement', value: 'engagement' },
          { title: 'Maternity', value: 'maternity' },
          { title: 'Event', value: 'event' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Thumbnail Image',
      options: { hotspot: true }, // Allows you to crop focus point in the dashboard
    }),
    defineField({
      name: 'videoUrl',
      type: 'url',
      title: 'Video Link (YouTube/Vimeo)',
      description: 'Leave empty if this is only a photo project.',
    }),
  ],
})