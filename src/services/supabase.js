import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bgtzvltdsqlnojroicts.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJndHp2bHRkc3Fsbm9qcm9pY3RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY1MzU3ODUsImV4cCI6MjAzMjExMTc4NX0.np30a1okPnhmoncwAXKGo_ZO9gObfsEU-s5YxoWw5pY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
