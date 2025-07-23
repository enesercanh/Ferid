function createInputFields() {
  const count = parseInt(document.getElementById('wordCount').value);
  const inputDiv = document.getElementById('wordInputs');
  const buttonDiv = document.getElementById('buttons');
  inputDiv.innerHTML = '';
  buttonDiv.innerHTML = '';

  if (isNaN(count) || count < 1) return;

  for (let i = 0; i < count; i++) {
    const pair = document.createElement('div');
    pair.className = 'word-pair';
    pair.innerHTML = `
      <input type="text" placeholder="Azərbaycan dili" />
      <input type="text" placeholder="İngilis dili" />
    `;
    inputDiv.appendChild(pair);
  }

  const generateBtn = document.createElement('button');
  generateBtn.textContent = "Flashkartları Yarat";
  generateBtn.onclick = generateFlashcards;

  const resetBtn = document.createElement('button');
  resetBtn.textContent = "Yenidən Başla";
  resetBtn.onclick = () => location.reload();

  buttonDiv.appendChild(generateBtn);
  buttonDiv.appendChild(resetBtn);
}

function generateFlashcards() {
  const inputPairs = document.querySelectorAll('.word-pair');
  const flashcardDiv = document.getElementById('flashcards');
  flashcardDiv.innerHTML = '';

  inputPairs.forEach(pair => {
    const az = pair.children[0].value.trim();
    const en = pair.children[1].value.trim();

    if (az && en) {
      const card = document.createElement('div');
      card.className = 'card';
      card.textContent = az;
      card.dataset.en = en;

      card.addEventListener('click', function () {
        const tmp = this.textContent;
        this.textContent = this.dataset.en;
        this.dataset.en = tmp;
      });

      flashcardDiv.appendChild(card);
    }
  });
}
