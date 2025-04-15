import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zrlygbggmfzrvidpjwlf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpybHlnYmdnbWZ6cnZpZHBqd2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3MjcwNzMsImV4cCI6MjA2MDMwMzA3M30.gAQdzDxCvEdqZCINYnImYQT0F3RWmpYwOXiQOeUUZ3c";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
