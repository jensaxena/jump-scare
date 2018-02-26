export default function CardDeck() {

  let deck = [
    { value: "☠", matched: false, flipped: false, jump: true },
    { value: "👹", matched: false, flipped: false },
    { value: "👺", matched: false, flipped: false },
    { value: "💀", matched: false, flipped: false },
    { value: "💥", matched: false, flipped: false },
    { value: "🕷", matched: false, flipped: false },
    { value: "🕸", matched: false, flipped: false },
    { value: "🦂", matched: false, flipped: false },
    { value: "🔮", matched: false, flipped: false },
    { value: "🕯", matched: false, flipped: false },
    { value: "🗡", matched: false, flipped: false },
    { value: "👹", matched: false, flipped: false },
    { value: "👺", matched: false, flipped: false },
    { value: "💀", matched: false, flipped: false },
    { value: "💥", matched: false, flipped: false },
    { value: "🕷", matched: false, flipped: false },
    { value: "🕸", matched: false, flipped: false },
    { value: "🦂", matched: false, flipped: false },
    { value: "🔮", matched: false, flipped: false },
    { value: "🕯", matched: false, flipped: false },
    { value: "🗡", matched: false, flipped: false }
  ];

  function shuffle(deck) {
    for (let i = (deck.length - 1); i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    console.log(deck)
  }

  shuffle(deck);
  return deck;
}
