const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: "Nelson Mandel",
  },
  {
    quote: "Life is what happens when you’re busy making other plans",
    author: "John Lennon",
  },
  {
      quote:"The way to get started is to quit talking and begin doing",
      author:"Walt Disney",
  },
  {
    quote:
      "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
    author: " Life",
  },
  {
    quote:
      "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
    author: "John Kenneth Galbraith",
  },
  {
    quote: "God save me from my friends. I can protect myself from my enemies.",
    author: "Claude Louis Hector de Villars ",
  },
  {
    quote: "The price of anything is the amount of life you exchange for it.",
    author: "David Thoreau",
  },
  {
    quote:
      "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
    author: "Charles Lindbergh",
  },
  {
    quote:
      "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
    author: " Tyne Daly",
  },
];

// Select all DOM

let btn = document.querySelector(".button")
let text = document.querySelector(".quete")
let author = document.querySelector(".author")

 btn.addEventListener('click',quote)
document.addEventListener('DOMContentLoaded',quote)
function quote(){
    text.innerHTML = ""
    let rndm = Math.floor(Math.random()*quotes.length)
    text.innerHTML = quotes[rndm].quote
    author.innerHTML =quotes[rndm].author
}