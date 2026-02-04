import { WHATSAPP_NUMBER } from '@/constants'

/**
 * Format price to Indonesian Rupiah currency
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price)
}

/**
 * Generate WhatsApp link with prefilled message
 */
export const createWhatsAppLink = (message: string): string => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/**
 * Get current year
 */
export const getCurrentYear = (): number => {
  return new Date().getFullYear()
}
