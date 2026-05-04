// Tab switching
let currentTab = 0;
const sections = ['home', 'memy', 'zagadki', 'testy'];

function switchTab(tabIndex) {
  currentTab = tabIndex;
  
  // Ukryj wszystkie sekcje
  sections.forEach(id => {
    document.getElementById(id).classList.remove('active');
  });
  
  // Pokaż wybraną
  document.getElementById(sections[tabIndex]).classList.add('active');
  
  // Aktualizuj aktywny link
  document.querySelectorAll('.nav a').forEach((link, index) => {
    link.classList.toggle('active', index === tabIndex);
  });

  // Załaduj memy przy pierwszym wejściu
  if (tabIndex === 1 && document.getElementById('memeGrid').children.length === 0) {
    loadMemes();
  }
}

// Sample memes
function loadMemes() {
  const memes = [
    { emoji: "😂", text: "Kiedy budzik dzwoni" },
    { emoji: "🐵", text: "Ja vs ja w poniedziałek" },
    { emoji: "💀", text: "Szef pyta o raport" },
    { emoji: "🔥", text: "Programista po 3 kawach" },
    { emoji: "🚀", text: "Plan na życie" },
    { emoji: "🍔", text: "Dieta zaczyna się jutro" }
  ];

  const grid = document.getElementById('memeGrid');
  grid.innerHTML = '';

  memes.forEach(meme => {
    const div = document.createElement('div');
    div.className = 'meme-card';
    div.innerHTML = `
      <div class="placeholder">${meme.emoji}</div>
      <p style="margin:8px 0; font-weight:600;">${meme.text}</p>
    `;
    grid.appendChild(div);
  });
}

// Zagadki
const riddles = [
  {
    q: "Co ma szyję, ale nie ma głowy?",
    a: "Butelka"
  },
  {
    q: "Im więcej ich zabierzesz, tym więcej ich zostaje.",
    a: "Zdjęcia"
  },
  {
    q: "Co jest pełne dziur, a i tak trzyma wodę?",
    a: "Gąbka"
  }
];

let currentRiddle = 0;

function showAnswer() {
  document.getElementById('riddleAnswer').style.display = 'block';
}

function nextRiddle() {
  currentRiddle = (currentRiddle + 1) % riddles.length;
  document.getElementById('riddleQuestion').textContent = riddles[currentRiddle].q;
  document.getElementById('riddleAnswer').style.display = 'none';
  document.getElementById('riddleAnswer').textContent = riddles[currentRiddle].a;
}

// Inicjalizacja zagadek
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('riddleQuestion')) {
    document.getElementById('riddleQuestion').textContent = riddles[0].q;
    document.getElementById('riddleAnswer').textContent = riddles[0].a;
  }
});

// Prosty Quiz
function startQuiz() {
  let score = 0;
  const q1 = confirm("Pytanie 1: Czy lubisz memy? 😎");
  if (q1) score++;
  
  const q2 = confirm("Pytanie 2: Wolisz kebab czy pizzę?");
  if (q2) score++;
  
  const q3 = confirm("Pytanie 3: Czy śmiejesz się z własnych memów?");
  if (q3) score++;

  let result = "";
  if (score === 3) result = "LEGENDARNY ZIOM 😎";
  else if (score === 2) result = "Dobry ziomek 😂";
  else result = "Jeszcze sporo do nadrobienia...";

  alert(`Twój wynik: \( {score}/3\n\n \){result}`);
}

// Start
switchTab(0);
