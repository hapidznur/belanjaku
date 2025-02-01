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
use teloxide::{dispatching::dialogue::InMemStorage, prelude::*};
type MyDialogue = Dialogue<State, InMemStorage<State>>;
type HandlerResult = Result<(), Box<dyn std::error::Error + Send + Sync>>;

#[derive(Clone, Default)]
pub enum State {
    #[default]
    Start,
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
 //   bot.send_message(msg.chat.id, "Let's start! What's your full name?").await?;
    println!("{}", msg.chat.id);
    // split string check is match with structure
   match msg.text(){
        Some(text)=> {
            println!("{}", text.to_string());
            let purchased = text.to_string();
            let parts = purchased.split(":");
            let mut collection = parts.collect::<Vec<&str>>();
            for date in &mut collection{
                println!("{}", date)
            }
            let mut date_str = collection[0].clone();
            let date = NaiveDate::parse_from_str(date_str, "%Y%m%d").unwrap();
            println!("{}", date.to_string());
            let typeGroceries = collection[1].clone();
            match typeGroceries {
                "food" | "housing" => {
                 },
                 _ => {
                    bot.send_message(msg.chat.id, "Send correct format YYYYMMDD:type{food|housing}:numeric{K|H|M}:description").await?;
                    dialogue.exit().await?;
                 },
            };
            let mut price = collection[2].clone();
            // check Price is have format {number}K or number only
            let mut description = collection[3].clone();
            let item = Item {
                price: price.to_string(),
                category: typeGroceries.to_string(),
                description: description.to_string(),
                date: date.to_string(),
            };

            supadb::insert_to_db(item).await?;
            bot.send_message(msg.chat.id, "Success Receive Bon. Hemat-hemat ya").await?;
         }
        None => {
            bot.send_message(msg.chat.id, "Send correct format YYYYMMDD:type{food|house}:numeric{K|H|M}:description").await?;
        }
   }
    // dialogue.update(State::ReceiveFullName).await?;
    Ok(())
}


