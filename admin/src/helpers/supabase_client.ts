import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY as string
const supabaseSecretKey = process.env.REACT_APP_SUPABASE_SECRET_KEY as string
const accessToken = process.env.REACT_APP_ACCESS_TOKEN as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
