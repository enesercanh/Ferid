const wordList = [
  ["alma", "apple 🍎"],
  ["pişik", "cat 🐱"],
  ["it", "dog 🐶"],
  ["günəş", "sun ☀️"],
  ["ay", "moon 🌙"],
  ["ulduz", "star ⭐"],
  ["ev", "house 🏠"],
  ["məktəb", "school 🏫"],
  ["kitab", "book 📖"],
  ["dost", "friend 👯"],
  ["su", "water 💧"],
  ["dondurma", "ice cream 🍦"],
  ["top", "ball ⚽"],
  ["rəng", "color 🎨"],
  ["göy qurşağı", "rainbow 🌈"],
  ["uşaq", "child 👶"],
  ["quş", "bird 🐦"],
  ["fil", "elephant 🐘"],
  ["meymun", "monkey 🐒"],
  ["maşın", "car 🚗"],
  ["qatar", "train 🚂"],
  ["kukla", "doll 🪆"],
  ["gül", "flower 🌸"],
  ["ağac", "tree 🌳"],
  ["çörək", "bread 🍞"],
  ["süd", "milk 🥛"],
  ["yumurta", "egg 🥚"],
  ["şəkər", "candy 🍬"],
  ["qələm", "pen 🖊️"],
  ["papaq", "hat 🎩"],
  ["ayaqqabı", "shoes 👟"]
];

const container = document.getElementById("flashcards-container");

wordList.forEach(([az, en]) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">${az}</div>
      <div class="card-back">${en}</div>
    </div>
  `;
  container.appendChild(card);
});
