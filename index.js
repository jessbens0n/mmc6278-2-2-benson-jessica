const { program } = require("commander");
const fs = require("fs/promises");
const chalk = require("chalk");
const QUOTE_FILE = "quotes.txt";

program
  .name("quotes")
  .description("CLI tool for inspiration")
  .version("0.1.0");

program
  .command("getQuote")
  .description("Retrieves a random quote")
  .action(async () => {
    try {
      var quote = await fs.readFile(QUOTE_FILE,`utf-8`)
      const line = quote.split(`\n`);
      console.log(line)
      const randomLine = line[Math.floor(Math.random() * line.length)]
      var randomQuote = randomLine.split(`|`)
      [0];
      console.log(chalk.bold.magenta(randomQuote))
    } catch (err) {
      console.log(err)
    }
  });
    // TODO: Pull a random quote from the quotes.txt file
    // console log the quote and author
    // You may style the text with chalk as you wish

program
  .command("addQuote <quote> [author]")
  .description("adds a quote to the quote file")
  .action(async (quote, author) => {
    try {
      if (!author) {
        const anonymous = "Anonymous"
        const anonAuthor = fs.appendFile(QUOTE_FILE, ["\n" + quote + "\|" + anonymous], `utf-8`)
        console.log(anonAuthor)
        console.log(chalk.green(`Your quote was added.`))
      } else if(author) {
      const quoteAuthor = await fs.appendFile(QUOTE_FILE, ["\n" + quote + "\|" + author], `utf-8`)
      console.log(quoteAuthor)
      console.log(chalk.bold.green(`Your quote was added.`))
      }

    } catch (err) {
      console.log(err)
    }
  });
    // TODO: Add the quote and author to the quotes.txt file
    // If no author is provided,
    // save the author as "Anonymous".
    // After the quote/author is saved,
    // alert the user that the quote was added.
    // You may style the text with chalk as you wish
    // HINT: You can store both author and quote on the same line using
    // a separator like pipe | and then using .split() when retrieving

program.parse();