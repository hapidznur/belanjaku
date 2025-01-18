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

use teloxide::{dispatching::dialogue::InMemStorage, prelude::*};
type MyDialogue = Dialogue<State, InMemStorage<State>>;
type HandlerResult = Result<(), Box<dyn std::error::Error + Send + Sync>>;

#[derive(Clone, Default)]
pub enum State {
    #[default]
    Start,
    ReceiveFullName,
    ReceiveAge {
        full_name: String,
    },
    ReceiveLocation {
        full_name: String,
        age: u8,
    },
}


#[tokio::main]
async fn main() {
    pretty_env_logger::init();
    log::info!("Starting dialogue bot...");

    let bot = Bot::from_env();

    Dispatcher::builder(
        bot,
        Update::filter_message()
            .enter_dialogue::<Message, InMemStorage<State>, State>()
            .branch(dptree::case![State::Start].endpoint(start))
            .branch(dptree::case![State::ReceiveFullName].endpoint(receive_full_name))
            .branch(dptree::case![State::ReceiveAge { full_name }].endpoint(receive_age))
            .branch(
                dptree::case![State::ReceiveLocation { full_name, age }].endpoint(receive_location),
            ),
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
            bot.send_message(msg.chat.id, "Success Receive Bon. Hemat-hemat ya").await?;
         }
        None => {
            bot.send_message(msg.chat.id, "Send correct format YYYYMMDD:type{food|house}:numeric{K|H|M}:description").await?;
        }
   }
    // dialogue.update(State::ReceiveFullName).await?;
    Ok(())
}

async fn receive_full_name(bot: Bot, dialogue: MyDialogue, msg: Message) -> HandlerResult {
    match msg.text() {
        Some(text) => {
            bot.send_message(msg.chat.id, "How old are you?").await?;
            dialogue.update(State::ReceiveAge { full_name: text.into() }).await?;
        }
        None => {
            bot.send_message(msg.chat.id, "Send me plain text.").await?;
        }
    }

    Ok(())
}

async fn receive_age(
    bot: Bot,
    dialogue: MyDialogue,
    full_name: String, // Available from `State::ReceiveAge`.
    msg: Message,
) -> HandlerResult {
    match msg.text().map(|text| text.parse::<u8>()) {
        Some(Ok(age)) => {
            bot.send_message(msg.chat.id, "What's your location?").await?;
            dialogue.update(State::ReceiveLocation { full_name, age }).await?;
        }
        _ => {
            bot.send_message(msg.chat.id, "Send me a number.").await?;
        }
    }

    Ok(())
}

async fn receive_location(
    bot: Bot,
    dialogue: MyDialogue,
    (full_name, age): (String, u8), // Available from `State::ReceiveLocation`.
    msg: Message,
) -> HandlerResult {
    match msg.text() {
        Some(location) => {
            let report = format!("Full name: {full_name}\nAge: {age}\nLocation: {location}");
            bot.send_message(msg.chat.id, report).await?;
            dialogue.exit().await?;
        }
        None => {
            bot.send_message(msg.chat.id, "Send me plain text.").await?;
        }
    }

    Ok(())
}
