import type { Reason, Testimonial } from '@/types'

// Why section data
export const reasons: Reason[] = [
  {
    icon: 'fas fa-gem',
    title: 'Kualitas Premium',
    description:
      'Dibuat dari bahan-bahan terbaik pilihan dengan konsentrasi tinggi untuk ketahanan maksimal.',
  },
  {
    icon: 'fas fa-fingerprint',
    title: 'Karakter Unik',
    description:
      'Setiap parfum dirancang dengan karakter berbeda yang tidak akan kamu temukan di tempat lain.',
  },
  {
    icon: 'fas fa-clock',
    title: 'Tahan Lama',
    description:
      'Aromanya bertahan seharian penuh, menemanimu dari pagi hingga malam.',
  },
  {
    icon: 'fas fa-wallet',
    title: 'Harga Terjangkau',
    description:
      'Kualitas premium tidak harus mahal. Dapatkan parfum terbaik dengan harga yang ramah di kantong.',
  },
]

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    name: 'Rina Susanti',
    role: 'Karyawan Swasta',
    avatar: 'R',
    rating: 5,
    text: 'Parfum dari Baboo benar-benar berbeda! Aromanya elegan dan tahan seharian. Rekan kerja selalu bertanya parfum apa yang saya pakai.',
  },
  {
    name: 'Budi Hartono',
    role: 'Pengusaha',
    avatar: 'B',
    rating: 5,
    text: 'Sudah mencoba berbagai brand parfum, tapi Baboo Parfume memberikan kesan yang berbeda. Worth every penny!',
  },
  {
    name: 'Maya Dewi',
    role: 'Content Creator',
    avatar: 'M',
    rating: 5,
    text: 'As a content creator, penampilan itu penting. Baboo Parfume membantu saya tampil lebih percaya diri di depan kamera.',
  },
]
