const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`Thank you for your valuable feedback, ${answer}`);

  rl.question('What is an activity you like to do?', (answer) => {
    console.log(`Wow, ${answer} that sounds like fun!`);

    rl.question('What do you listen to while doing that??', (answer) => {
      console.log(`${answer} - you an OG!`);

      rl.question('Which is your fav meal?', (answer) => {
        console.log(`${answer} - Mmmm`);

        rl.question('Favourite sport?', (answer) => {
          console.log(`${answer} - I'm more of a hockey fan`);
  
          rl.question('What is your Superpower?', (answer) => {
            console.log(`${answer} - nice!`);
            rl.close();
          });
        });
      });
    });
  });
});
