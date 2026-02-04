import { createClient, type EntryFieldTypes } from 'contentful'
import { CONTENTFUL_CONFIG } from '@/constants'
import type { Parfume } from '@/types'

// Contentful Entry Skeleton Type
interface ParfumeSkeleton {
  contentTypeId: 'parfumes'
  fields: {
    name: EntryFieldTypes.Text
    description: EntryFieldTypes.RichText | EntryFieldTypes.Text
    price: EntryFieldTypes.Number
    category: EntryFieldTypes.Text
    image: EntryFieldTypes.Text
    featured: EntryFieldTypes.Boolean
  }
}

const client = createClient({
  space: CONTENTFUL_CONFIG.spaceId,
  accessToken: CONTENTFUL_CONFIG.accessToken,
})

// Helper function to get image URL
const getImageUrl = (image: unknown): string | null => {
  if (!image || typeof image !== 'string') return null
  return image
}

// Helper function to extract plain text from Rich Text or return string as-is
const extractDescription = (description: unknown): string => {
  if (!description) return ''

  // If it's already a string, return it
  if (typeof description === 'string') return description

  // If it's a Rich Text object from Contentful
  const richText = description as {
    nodeType?: string
    content?: Array<{
      nodeType: string
      content?: Array<{ nodeType: string; value?: string }>
    }>
  }

  if (richText.nodeType === 'document' && richText.content) {
    return richText.content
      .map((node) => {
        if (node.nodeType === 'paragraph' && node.content) {
          return node.content
            .filter((child) => child.nodeType === 'text')
            .map((child) => child.value || '')
            .join('')
        }
        return ''
      })
      .join(' ')
      .trim()
  }

  return ''
}

export const getParfumes = async (): Promise<Parfume[]> => {
  try {
    const response = await client.getEntries<ParfumeSkeleton>({
      content_type: CONTENTFUL_CONFIG.contentType,
    })

    return response.items.map((item) => ({
      id: item.sys.id,
      name: (item.fields.name as string) || '',
      description: extractDescription(item.fields.description),
      price: (item.fields.price as number) || 0,
      category: (item.fields.category as string) || '',
      image: getImageUrl(item.fields.image),
      featured: (item.fields.featured as boolean) || false,
    }))
  } catch (error) {
    console.error('Error fetching parfumes:', error)
    return []
  }
}

export default client
