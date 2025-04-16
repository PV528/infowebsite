document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("vstopi");
    const secondButtonContainer = document.getElementById("second-button-container");
    const secondButton = document.getElementById("vstop");
    const rpsQuestion = document.getElementById('rps-question');
    const rpsInput = document.getElementById('rpsInput');
    const response = document.getElementById('feedback');
    const submitAnswer = document.getElementById('submit-answer');
  
    // Jumping button
    function moveButton() {
      const buttonRect = button.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
  
      const randomX = Math.floor(Math.random() * (windowWidth - buttonRect.width));
      const randomY = Math.floor(Math.random() * (windowHeight - buttonRect.height));
  
      button.style.position = "absolute";
      button.style.left = randomX + "px";
      button.style.top = randomY + "px";
    }
  
    button.addEventListener("mouseover", moveButton);
  
    // First button disappears after 15s
    setTimeout(() => {
      button.style.display = 'none';
      secondButtonContainer.style.display = 'block';
    }, 15000);
  
    // Second button click
    secondButton.addEventListener("click", () => {
      secondButton.disabled = true;
      secondButton.innerText = "Si že mislila 😜";
  
      setTimeout(() => {
        secondButtonContainer.style.display = "none";
        rpsQuestion.style.display = "block";
      }, 5000);
    });
  
    // Answer check
    submitAnswer.addEventListener('click', () => {
      const answer = rpsInput.value.trim().toLowerCase();
  
      if (answer === 'šankipo') {
        response.style.color = 'green';
        response.textContent = 'Ok naj ti bo hahahah ...';
        setTimeout(() => window.location.href = 'index.html', 2000);
      } else {
        response.style.color = 'darkred';
        response.textContent = 'Napačen odgovor. Saj veš, ampak ali se spomniš? ;)';
      }
    });
  });
  