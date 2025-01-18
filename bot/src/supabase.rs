use postgrest::Postgrest;

let client = Postgrest::new("https://arvxnohlsceidownljms.supabase.co")
    .insert_header("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFydnhub2hsc2NlaWRvd25sam1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NDU3NDUsImV4cCI6MjA0NjIyMTc0NX0.O__ahIyi2tS02FZnUBiPh_UnOKO7PQ51XKB6aLuLqrc"); // EXAMPLE ONLY!
// Don't actually hard code this value, that's really bad. Use environment
// variables like with the dotenv(https://crates.io/crates/dotenv) crate to inject
let resp = client
    .from("your_table")
    .select("*")
    .execute()
    .await?;
let body = resp
    .text()
    .await?;
