import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fhgizaandomodgitzbnk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoZ2l6YWFuZG9tb2RnaXR6Ym5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NDk4NDcsImV4cCI6MjA0MjMyNTg0N30.k4vcDi6nLjdG0RI9yGzhpBYgH-JP8Gy3LeLOv5BHgCY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
