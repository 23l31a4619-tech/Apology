let timer;

function go(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function yes() {
  go("yesPage");
  start(["Sorryyy ❤️", "Thankyou Mounicaaa 💗", "🫂", "❤️"]);
}

function no() {
  go("noPage");
  start(["Sorryyy 🫶🏻"]);
}

function accept() {
  start(["❤️","🫶🏻","🫂","💗","🥹"]);
}

function start(words) {
  clearInterval(timer);
  const box = document.getElementById("float");

  timer = setInterval(() => {
    const s = document.createElement("span");
    s.innerText = words[Math.floor(Math.random() * words.length)];
    s.style.left = Math.random() * 100 + "vw";
    s.style.bottom = "-30px";
    s.style.fontSize = (16 + Math.random() * 20) + "px";
    box.appendChild(s);

    setTimeout(() => s.remove(), 6000);
  }, 200);
}
