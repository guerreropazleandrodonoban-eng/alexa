document.addEventListener("DOMContentLoaded", () => {
  createPetals();
});

// Cambiar entre pestañas
function switchTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  if (tabName === 'aprecio') {
    document.getElementById('tab-aprecio').classList.add('active');
    buttons[0].classList.add('active');
  } else {
    document.getElementById('tab-fe').classList.add('active');
    buttons[1].classList.add('active');
  }
}

// Crear animación de pétalos flotantes
function createPetals() {
  const container = document.getElementById("petals-container");
  const petalCount = 15;

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    const size = Math.random() * 12 + 8;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.4}px`;

    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${Math.random() * 5 + 6}s`;
    petal.style.animationDelay = `${Math.random() * 5}s`;

    container.appendChild(petal);
  }
}