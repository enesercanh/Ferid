// Create 31 empty word input rows
const inputContainer = document.getElementById("inputs-container");

for (let i = 1; i <= 31; i++) {
  const row = document.createElement("div");
  row.className = "word-pair";
  row.innerHTML = `
    <input type="text" placeholder="Azerbaijani #${i}" class="az-input" />
    <input type="text" placeholder="English #${i}" class="en-input" />
  `;
  inputContainer.appendChild(row);
}

// When teacher clicks Generate
function generateCards() {
  const azWords = document.querySelectorAll(".az-input");
  const enWords = document.querySelectorAll(".en-input");
  const container = document.getElementById("flashcards-container");

  container.innerHTML = ""; // Clear previous cards

  for (let i = 0; i < azWords.length; i++) {
    const az = azWords[i].value.trim();
    const en = enWords[i].value.trim();

    if (az && en) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front">${az}</div>
          <div class="card-back">${en}</div>
        </div>
      `;
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
      container.appendChild(card);
    }
  }
}
