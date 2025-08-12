document.getElementById("rollBtn").addEventListener("click", function() {
  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");
  const result = document.getElementById("result");

  // Animación
  dice1.classList.add("roll-animation");
  dice2.classList.add("roll-animation");

  setTimeout(() => {
    dice1.classList.remove("roll-animation");
    dice2.classList.remove("roll-animation");

    // Números aleatorios (1-6)
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;

    // Cambiar imágenes
    dice1.src = `img/dice${num1}.png`;
    dice2.src = `img/dice${num2}.png`;

    // Mostrar resultado
    if (num1 > num2) {
      result.textContent = `Jugador 1 gana (${num1} contra ${num2}) 🎉`;
    } else if (num2 > num1) {
      result.textContent = `Jugador 2 gana (${num2} contra ${num1}) 🏆`;
    } else {
      result.textContent = `Empate (${num1} contra ${num2}) 🤝`;
    }
  }, 500);
});
