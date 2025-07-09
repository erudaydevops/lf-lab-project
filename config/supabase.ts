import { createClient } from "@supabase/supabase-js"

// const supabaseUrl = process.env.SUPABASE_URL;
// console.log(supabaseUrl);
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2emtzanZiaXFzdXVxeHJhaHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3MjI2NjUsImV4cCI6MjA0NDI5ODY2NX0.8DLBfG050rd17mDrwiUSVXK5l1SInEpqB42Wlw8EERE"
const supabaseUrl = "https://bvzksjvbiqsuuqxrahtk.supabase.co"
const supabase = createClient(supabaseUrl as string, supabaseKey as string)

export default supabase
