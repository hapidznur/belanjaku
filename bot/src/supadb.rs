use serde::{Serialize, Deserialize};
use std::env;
use reqwest::Client;
use anyhow::Result;
use postgrest::Postgrest;

#[derive(Serialize, Deserialize)]
pub struct Item {
    pub price: String,
    pub category: String,
    pub description: String,
    pub date: String,
    pub chat_id: String,
}

pub async fn insert_item(item: Item) -> Result<()> {
    let supabase_url = env::var("SUPABASE_URL").expect("SUPABASE_URL must be set");
    let supabase_key = env::var("SUPABASE_API_KEY").expect("SUPABASE_API_KEY must be set");
    let supabase_service_key = env::var("SERVICE_KEY").expect("SUPABASE_API_KEY must be set");
    let supabase_table = env::var("SUPABASE_TABLE").expect("String included");
    eprintln!("{}", supabase_url);
    eprintln!("{}", supabase_key);
    let supabase_uri = format!("{}/rest/v1/", supabase_url);
    let client = Postgrest::new(supabase_uri)//your.supabase.endpoint/rest/v1/")
    .insert_header(
        "apikey",
        supabase_key)
    .insert_header("Authorization", format!("Bearer {}", supabase_service_key));
    let json_string = serde_json::to_string(&item)?;

    let resp = client
        .from(supabase_table)
        .insert(json_string)
        .execute()
        .await?;
    let body = resp
        .text()
        .await?;

    eprintln!("Failed to insert item: {}", body);

    Ok(())
}
