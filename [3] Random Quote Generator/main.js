// TODO: [3] Random Quote Generator

let myQuotes = [
  'The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela',
  "Life is what happens when you're busy making other plans. - John Lennon",
  'You only live once, but if you do it right, once is enough. - Mae West',
  'If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein',
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  'In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.',
  'Happiness is not something ready made. It comes from your own actions. - Dalai Lama',
  'Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson',
  'It does not matter how slowly you go as long as you do not stop. - Confucius',
  'The only impossible journey is the one you never begin. - Tony Robbins',
  "Believe you can and you're halfway there. - Theodore Roosevelt",
];

const quoteElement = document.querySelector('#Quote');
const usedIndexNews = new Set();

function generateQuote() {
  if (usedIndexNews.size >= myQuotes.length) {
    usedIndexNews.clear();
  }

  while (true) {
    let randomIdx = Math.floor(Math.random() * myQuotes.length);
    if (usedIndexNews.has(randomIdx)) continue;
    let quote = myQuotes[randomIdx];
    quoteElement.textContent = quote;
    usedIndexNews.add(randomIdx);
    break;
  }
}
