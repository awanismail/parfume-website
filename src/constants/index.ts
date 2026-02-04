// WhatsApp Configuration
export const WHATSAPP_NUMBER = '6281313318815'

export const WHATSAPP_MESSAGES = {
  general: 'Halo Baboo Parfume, saya tertarik dengan produk parfum Anda!',
  order: (productName: string) =>
    `Halo Baboo Parfume, saya tertarik untuk memesan parfum "${productName}". Apakah masih tersedia?`,
  consultation:
    'Halo Baboo Parfume! Saya tertarik untuk memesan parfum. Bisa dibantu untuk konsultasi memilih parfum yang cocok?',
} as const

// Contentful Configuration
export const CONTENTFUL_CONFIG = {
  spaceId: '9wbqh0yntm06',
  accessToken: '4_jUfnpcEsCZI29aQiu9qbZrONbmZTsl8O9cvGUjJfw',
  contentType: 'parfumes',
} as const

// Social Media Links
export const SOCIAL_LINKS = {
  instagram: '#',
  facebook: '#',
  tiktok: '#',
} as const

// Contact Information
export const CONTACT_INFO = {
  phone: '0812345768910',
  email: 'hello@babooparfume.com',
  location: 'Indonesia',
} as const
