const popup = document.getElementById('popup');
const gallery = document.getElementById('gallery');
const message = document.getElementById('message');
const music = document.getElementById('bgMusic');

function checkName() {
  const name = document.getElementById('nameInput').value.trim().toLowerCase();
  if (name === "harini") {
    popup.innerHTML = `
      <h3>Identity Verified ✅</h3>
      <p>Welcome, Agent Harini. Before you proceed, a small question...</p>
      <button onclick="brotherQuestion()">Continue</button>
    `;
  } else {
    popup.innerHTML = `
      <h3>Access Denied ❌</h3>
      <p>Sorry, only the birthday legend “Harini” can enter!</p>
      <button onclick="location.reload()">Try Again</button>
    `;
  }
}

function brotherQuestion() {
  popup.innerHTML = `
    <h3>Your brother is the best brother, right? 😏</h3>
    <button onclick="correctAnswer()">Yes 😇</button>
    <button id="noBtn" class="move-btn" onmouseover="moveButton()">No 😤</button>
  `;
}

function moveButton() {
  const btn = document.getElementById('noBtn');
  const x = Math.random() * 300 - 100;
  const y = Math.random() * 200 - 50;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

function correctAnswer() {
  popup.style.display = 'none';
  gallery.style.display = 'block';
  document.body.style.background = 'linear-gradient(135deg, #a18cd1, #fbc2eb)';
  music.play();

  // Confetti celebration
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });
}

function showFinalMessage() {
  gallery.style.display = 'none';
  message.style.display = 'block';
  document.body.style.background = 'linear-gradient(135deg, #ff9a9e, #fad0c4)';
  confetti({
    particleCount: 300,
    spread: 150,
    origin: { y: 0.6 }
  });
}
