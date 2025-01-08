import quotes from "./quote.js";
document.addEventListener("DOMContentLoaded", () => {
  const quoteText = document.getElementById("quote-text");
  const authorText = document.getElementById("author-text");
  const radioBtn = document.getElementById("radio-btn");
  const copyBtn = document.getElementById("copy-btn");
  const randomQuote = (quotes) =>
    quotes[Math.floor(Math.random() * quotes.length)];
  const newQuoteBtn = document.getElementById("new-quote-btn");
  const displayQuote = () => {
    let currentQuote = randomQuote(quotes);
    quoteText.innerHTML = `"${currentQuote.text}"`;
    authorText.innerHTML = `-${currentQuote.author}`;
  };
  newQuoteBtn.addEventListener("click", displayQuote);
  radioBtn.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(
      `${quoteText.textContent} by ${authorText.textContent}`
    );
    speechSynthesis.speak(utterance);
  });

  copyBtn.addEventListener("click", () => {
    const quote = `${quoteText.textContent} ${authorText.textContent}`;
    navigator.clipboard.writeText(quote).then(() => {
      alert("Quote copied to clipboard!");
    });
  });

  
  displayQuote();
});
