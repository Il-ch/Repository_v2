document.addEventListener("DOMContentLoaded", function () {
    const contentContainer = document.querySelector(".middleContainer");
    const contentElements = contentContainer.querySelectorAll("h1, p");
    let currentIndex = 0;
  
    function displayCurrentElement() {
      if (currentIndex < contentElements.length) {
        const currentElement = contentElements[currentIndex];
        const text = currentElement.textContent;
        const answer = confirm(text + "\n\nПросуватися до наступного елемента?");
  
        if (answer) {
          currentIndex++;
          displayCurrentElement();
        } else {
          if (currentIndex > 0) {
            const goBack = confirm("Повернутися до попереднього елемента?");
            if (goBack) {
              currentIndex--;
              displayCurrentElement();
            } else {
              alert("Ви досягли кінця сторінки. Повернутися до попереднього елемента?");
            }
          } else {
            alert("Ви досягли початку сторінки.");
          }
        }
      } else {
        const goBack = confirm("Ви досягли кінця сторінки. Повернутися до попереднього елемента?");
        if (goBack) {
          currentIndex--;
          displayCurrentElement();
        } else {
          alert("Ви досягли кінця сторінки.");
        }
      }
    }
  
    displayCurrentElement();
  });