const quotes = [
  '"Başarı hayallerle başlar!"',
  '"Bugün ne yaparsan yarını belirler."',
  '"Hedef koy, çalış, başar."',
  '"İmkansız diye bir şey yok."'
];

let currentQuote = 0;
const quoteElement = document.getElementById('quote');

setInterval(() => {
  currentQuote = (currentQuote + 1) % quotes.length;
  quoteElement.textContent = quotes[currentQuote];
}, 5000);

function addGoal() {
  const input = document.getElementById('goalInput');
  const goalText = input.value.trim();
  if (goalText === '') return;

  const goalList = document.getElementById('goalList');
  const li = document.createElement('li');
  li.className = 'goal-item';
  li.innerHTML = `
    <span>${goalText}</span>
    <button onclick="deleteGoal(this)">Sil</button>
  `;
  goalList.appendChild(li);
  input.value = '';
}

function deleteGoal(button) {
  const li = button.parentElement;
  li.remove();
}
