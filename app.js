const pageBackground = document.querySelector("body")

// Mood buttons
const moodButtons = document.querySelectorAll(".mood-buttons")
const happyExcitedButton = document.querySelector("#happy-excited")
const sadLongingButton = document.querySelector("#sad-longing")
const calmContemplativeButton = document.querySelector("#calm-contemplative")

// Time bßuttons
const morningButton = document.querySelector("#morning")
const afternoonButton = document.querySelector("#afternoon")
const nightButton = document.querySelector("#night")


// Mood button clicking and disabling
moodButtons.forEach(button => {
   button.addEventListener("click", () => {
      moodButtons.forEach (btn => {
         btn.disabled = true;
         button.style.backgroundColor = "beige"
      })
   })
})

const timeButtons = document.querySelectorAll(".time-buttons")

// Time button clicking and disabling
timeButtons.forEach(button => {
   button.addEventListener("click", () => {
      timeButtons.forEach (btn => {
         btn.disabled = true;
         button.style.backgroundColor = "beige"
         // if (morningButton.disabled === true && happyExcitedButton.disabled === true) {
         //    // add click counter instead of true false
         //    pageBackground.classList.add("happy-excited-morning");
         }
      )}
   )})


// Coding functionality of button clicks
const happyExcitedBackground = () => {
   happyExcitedButton.addEventListener("click", () => {
      morningButton.addEventListener("click", () => {
         pageBackground.classList.add("happy-excited-morning")
      })
      afternoonButton.addEventListener("click", () => {
         pageBackground.classList.add("happy-excited-afternoon")
      })
      nightButton.addEventListener("click", () => {
         pageBackground.classList.add("happy-excited-night")
         // playVideo("H4vQqQ__5SI")
      })
   })
}
happyExcitedBackground()

const sadLongingBackground = () => {
   sadLongingButton.addEventListener("click", () => {
      morningButton.addEventListener("click", () => {
         pageBackground.classList.add("sad-longing-morning")
      })
      afternoonButton.addEventListener("click", () => {
         pageBackground.classList.add("sad-longing-afternoon")
      })
      nightButton.addEventListener("click", () => {
         pageBackground.classList.add("sad-longing-night")
         // playVideo("H4vQqQ__5SI")
      })
   })
}
sadLongingBackground()

const calmContemplativeBackground = () => {
   calmContemplativeButton.addEventListener("click", () => {
      morningButton.addEventListener("click", () => {
         pageBackground.classList.add("calm-contemplative-morning")
      })
      afternoonButton.addEventListener("click", () => {
         pageBackground.classList.add("calm-contemplative-afternoon")
      })
      nightButton.addEventListener("click", () => {
         pageBackground.classList.add("calm-contemplative-night")
         // playVideo("H4vQqQ__5SI")
      })
   })
}
calmContemplativeBackground()

// if "mood-button" and "time-button" clicked = true
   // call api to return raga
// const pageBackground = document.querySelector("body")

// const happyExcitedButton = document.querySelector("#happy-excited")
// let happyCalmClicked = false

// const morningButton = document.querySelector("#morning")
// let morningClicked = false

// window.onload = happyExcitedMorning = () => {
//    happyExcitedButton.addEventListener("click", () => {
//       happyExcitedClicked = true
//    })
//    morningButton.addEventListener("click" = () => {
//       morningClicked = true
//    })
//    if (happyExcitedClicked == true && morningClicked == true) {
//    // happyExcitedButton.addEventListener("click", () => {
//       alert("works")
//       pageBackground.classList.add("happy-excited-morning")
//    }
// }
   // if (happyExcitedButton.disabled === false && morningButton.disabled === false) {   