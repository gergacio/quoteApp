const express = require('express');
const bp = require('body-parser');
const morgan = require('morgan');
const path = require('path');


const { urlencoded, json } = bp;

//database
const quoteDB = [
  "Do not look for happiness outside yourself. The awakened seek happiness inside.",
  "If you pursue happiness, you are an ordinary person. If happiness pursues you, you are an extraordinary person. Do not chase happiness; let it chase you.",
  "If you do not fling old ideas out of your mind, you cannot give birth to new ones.",
  "Love resolves all contradictions. Without love, man cannot make sense of his existence.",
  "A person is able to understand only when he solves the problem by himself.",
  "Death can be understood as the passage from one form to another, from a limited degree of life to another higher, freer one. It is wrong to assume that everything ends with death; what ends is only the temporary conditions in which people have lived on earth.",
  "Stop in somebody's shadow to rest and cool down, and you are lost. No one can make anyone else happy.",
  "Human happiness is defined by the hardships and conflicts you have been through. The greater they are, the greater is your happiness.",
  "What sort of love is permeated by jealousy? You are jealous because you are unaware that everything you need is inside you.",
  "Yours is only what you always have on you.",
  "If you wish to befriend someone, look for a person who loves first God then themselves. If they love God, they will be able to love their neighbor, too.",
  "Being happy is a great science. If you are not happy, do not be confused. Happiness is hard to achieve.",
  "What does jealousy indicate? Jealousy is love manifested in the physical world. If you are jealous you have a debt to pay; if someone is jealous of you, he has a debt to pay to you.",
  "Trials are not arbitrary. When I speak about them, I am referring to the mindful suffering.Man has come to his present development thanks to his hardships and trials.These are what prepare man for the Coming of Love."
];
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quoteDB.length);
  return quoteDB[randomIndex];
}

//create server
const app = express();

//middleware
//parses incoming requests
app.use(urlencoded({ extended: true }));
app.use(json());
// logging incoming requests
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
  
app.get('/quote', (req, res) => {
      res.json({quote: getRandomQuote()}).end()
  });

  app.use("/public", express.static("./public"));

  //start server
app.listen(process.env.PORT);
