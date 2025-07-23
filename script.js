const wordList = [
  // Format: ["Azerbaijani", "English"]
  ["alma", "apple"],
  ["kitab", "book"],
  ["ev", "house"],
  // Add your 28 more here...
];

const container = document.getElementById('flashcards-container');

wordList.forEach(([az, en]) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">${az}</div>
      <div class="card-back">${en}</div>
    </div>
  `;
  container.appendChild(card);
});
