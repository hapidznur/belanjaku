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
}

pub async fn insert_to_db(item: Item) -> Result<()> {
    let supabase_url = env::var("SUPABASE_URL").expect("SUPABASE_URL must be set");
    let supabase_key = env::var("SUPABASE_API_KEY").expect("SUPABASE_API_KEY must be set");

    let client = Postgrest::new(supabase_url);
    let resp = client
        .header("apikey", supabase_key)
        .header("Content-Type", "application/json")
        .header("Prefer", "return=minimal")
        .json(&item)
        .send()
        .await?;

    if resp.status().is_success() {
        println!("Item inserted successfully");
    } else {
        eprintln!("Failed to insert item: {}", resp.status());
    }

    Ok(())
}
