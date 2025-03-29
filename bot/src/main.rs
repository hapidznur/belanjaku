// This is a bot that asks you three questions, e.g. a simple test.
//
// # Example
// ```
//  - Hey
//  - Let's start! What's your full name?
//  - Gandalf the Grey
//  - How old are you?
//  - 223
//  - What's your location?
//  - Middle-earth
//  - Full name: Gandalf the Grey
//    Age: 223
//    Location: Middle-earth
// ```
use chrono::NaiveDate;
use dotenv::dotenv;
mod supadb;
use crate::supadb::Item;
use teloxide::{dispatching::dialogue::InMemStorage, 
    prelude::*,
    types::{PhotoSize}};
type MyDialogue = Dialogue<State, InMemStorage<State>>;
type HandlerResult = Result<(), Box<dyn std::error::Error + Send + Sync>>;

#[derive(Clone, Default)]
pub enum State {
    #[default]
    Start,
    ReceivingPhoto,
}

#[tokio::main]
async fn main() {
    dotenv().ok();
    pretty_env_logger::init();
    log::info!("Starting Belanjaku bot...");

    let bot = Bot::from_env();

    Dispatcher::builder(
        bot,
        Update::filter_message()
            .enter_dialogue::<Message, InMemStorage<State>, State>()
            .branch(dptree::case![State::Start].endpoint(start))
    )
    .dependencies(dptree::deps![InMemStorage::<State>::new()])
    .enable_ctrlc_handler()
    .build()
    .dispatch()
    .await;
}

async fn start(bot: Bot, dialogue: MyDialogue, msg: Message) -> HandlerResult {
        if let Some(text) = msg.text() {
            let purchased = text.to_string();
            let parts = purchased.split(":");
            let collection = parts.collect::<Vec<&str>>();
            let date_str = collection[0];
            let date = NaiveDate::parse_from_str(date_str, "%Y%m%d").unwrap();
            let type_groceries = collection[1];
            match type_groceries {
                "food" | "housing" | "personal" | "ngopi" | "jalan" |"other" => {
                 },
                 _ => {
                    bot.send_message(msg.chat.id, "food|housing|personal|ngopi|jalan type groceries supported").await?;
                    dialogue.exit().await?;
                 },
            };
            let price = collection[2];
            // check Price is have format {number}K or number only
            let description = collection[3];
            let item = Item {
                price: price.to_string(),
                category: type_groceries.to_string(),
                description: description.to_string(),
                date: date.to_string(),
                chat_id: msg.chat.id.to_string(),
            };
            supadb::insert_item(item).await?;
            bot.send_message(msg.chat.id, "Success Receive Bon. Hemat-hemat ya").await?;
            dialogue.exit().await?;
        }
        if let Some(photos) = msg.photo(){
            for (index, photo) in photos.iter().enumerate() {
                println!("Size {}: {}x{}", index, photo.width, photo.height);
                println!("File ID: {}", photo.file.id);
            }
            // let file: File = GetFile();
            // let file_id: &str = &file.id;
            // let file_unique_id: &str = &file.unique_id;
            // let file_size: u32 = file.size;

            bot.send_message(msg.chat.id, "Iki text").await?;
            dialogue.exit().await?;
        }
        // None => {
        //     bot.send_message(msg.chat.id, "Send correct format YYYYMMDD:type{food|housing|personal|ngopi|jalan}:numeric{K|H|M}:description").await?;
        //  }
    // dialogue.update(State::ReceiveFullName).await?;
    Ok(())
}

