import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sbtxxrkgqkqbxexoobqv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNidHh4cmtncWtxYnhleG9vYnF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2NzM2MTYsImV4cCI6MjAwNzI0OTYxNn0.yIxdwfu_FzpELUfr_dj8kf8hapFjFgaY3q0zGrtRyPk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
