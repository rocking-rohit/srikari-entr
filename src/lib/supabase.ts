import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Product {
  id: string
  name: string
  description: string | null
  qty: number
  mrp: number
  offer_price: number
  discount_percent: number
  image1: string | null
  image2: string | null
  image3: string | null
  status: 'active' | 'inactive'
  sort_order: number
  created_at: string
  updated_at: string
}

export interface ProductInsert {
  name: string
  description?: string | null
  qty: number
  mrp: number
  offer_price: number
  discount_percent: number
  image1?: string | null
  image2?: string | null
  image3?: string | null
  status: 'active' | 'inactive'
  sort_order?: number
}

export interface ProductUpdate {
  name?: string
  description?: string | null
  qty?: number
  mrp?: number
  offer_price?: number
  discount_percent?: number
  image1?: string | null
  image2?: string | null
  image3?: string | null
  status?: 'active' | 'inactive'
  sort_order?: number
}
