document.addEventListener("DOMContentLoaded", function () {
    const contentContainer = document.querySelector(".middleContainer");
    const contentElements = contentContainer.querySelectorAll("h1, p");
    let currentIndex = 0;
  
    function displayCurrentElement() {
      if (currentIndex < contentElements.length) {
        const currentElement = contentElements[currentIndex];
        const text = currentElement.textContent;
        const answer = confirm(text + "\n\nПродвигаться к следующему элементу?");
  
        if (answer) {
          currentIndex++;
          displayCurrentElement();
        } else {
          if (currentIndex > 0) {
            const goBack = confirm("Вернуться к предыдущему элементу?");
            if (goBack) {
              currentIndex--;
              displayCurrentElement();
            } else {
              alert("Вы достигли конца страницы. Вернуться к предыдущему элементу?");
            }
          } else {
            alert("Вы достигли начала страницы.");
          }
        }
      } else {
        const goBack = confirm("Вы достигли конца страницы. Вернуться к предыдущему элементу?");
        if (goBack) {
          currentIndex--;
          displayCurrentElement();
        } else {
          alert("Вы достигли конца страницы.");
        }
      }
    }
  
    displayCurrentElement();
  });