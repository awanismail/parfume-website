// Product types from Contentful
export interface Parfume {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string | null
  featured: boolean
}

// Testimonial type
export interface Testimonial {
  name: string
  role: string
  avatar: string
  rating: number
  text: string
}

// Reason/Feature type for Why section
export interface Reason {
  icon: string
  title: string
  description: string
}
