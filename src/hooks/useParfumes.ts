import { useState, useEffect } from 'react'
import { getParfumes } from '@/lib/contentful'
import type { Parfume } from '@/types'

interface UseParfumesReturn {
  products: Parfume[]
  loading: boolean
  error: Error | null
  refetch: () => Promise<void>
}

export const useParfumes = (): UseParfumesReturn => {
  const [products, setProducts] = useState<Parfume[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getParfumes()
      setProducts(data)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch products'))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  }
}
