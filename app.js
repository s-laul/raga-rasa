const moodButtons = document.querySelectorAll(".mood-buttons")

moodButtons.forEach(button => {
   button.addEventListener("click", () => {
      moodButtons.forEach (btn => {
         btn.disabled = true;
      });
      button.style.backgroundColor = "beige"
   })
})

const timeButtons = document.querySelectorAll(".time-buttons")

timeButtons.forEach(button => {
   button.addEventListener("click", () => {
      timeButtons.forEach (btn => {
         btn.disabled = true;
      });
      button.style.backgroundColor = "beige"
   })
})



