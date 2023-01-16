
const pageBackground = document.querySelector("html")
const vidPlayer = document.getElementById("player")

// Mood buttons
const moodButtons = document.querySelectorAll(".mood-buttons")
const happyExcitedButton = document.querySelector("#happy-excited")
const sadLongingButton = document.querySelector("#sad-longing")
const calmContemplativeButton = document.querySelector("#calm-contemplative")

// Time buttons
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
      }
   )}
)})


// Coding functionality of button clicks with mood button first
const happyExcited = () => {
   happyExcitedButton.addEventListener("click", () => {
      morningButton.addEventListener("click", () => {
         alert("Your raga is: Raga Desh");
         pageBackground.classList.add("happy-excited-morning")
         vidPlayer.nightButton.onclick = playVideo("7oQj5Qh5ScU")
      })
      afternoonButton.addEventListener("click", () => {
         alert("Your raga is: Raga Dhani");
         pageBackground.classList.add("happy-excited-afternoon")
         vidPlayer.nightButton.onclick = playVideo("tW6RWP54Tsg")
      })
      nightButton.addEventListener("click", () => {
         alert("Your raga is: Raga Yaman");
         pageBackground.classList.add("happy-excited-night")
         vidPlayer.nightButton.onclick = playVideo("I4LP3ziNTlU")
      })
   })
}
happyExcited()

const sadLonging = () => {
   sadLongingButton.addEventListener("click", () => {
      morningButton.addEventListener("click", () => {
         pageBackground.classList.add("sad-longing-morning")
         alert("Your raga is: Raga Todi");
         vidPlayer.nightButton.onclick = playVideo("IfA7ZeIZv78")
      })
      afternoonButton.addEventListener("click", () => {
         alert("Your raga is: Raga Multani");
         pageBackground.classList.add("sad-longing-afternoon")
         vidPlayer.nightButton.onclick = playVideo("f5JARal8cL4")
      })
      nightButton.addEventListener("click", () => {
         alert("Your raga is: Raga Darbari");
         pageBackground.classList.add("sad-longing-night")
         vidPlayer.nightButton.onclick = playVideo("TGQ6LIB8Z6E")
      })
   })
}
sadLonging()

const calmContemplative = () => {
   calmContemplativeButton.addEventListener("click", () => {
      morningButton.addEventListener("click", () => {
         alert("Your raga is: Raga Nat Bhairavi");
         pageBackground.classList.add("calm-contemplative-morning")
         vidPlayer.nightButton.onclick = playVideo("bttszaG-fZU")
      })
      afternoonButton.addEventListener("click", () => {
         alert("Your raga is: Raga Nat Bhimpalasi");
         pageBackground.classList.add("calm-contemplative-afternoon")
         vidPlayer.nightButton.onclick = playVideo("SuNEIYlw9z0")
      })
      nightButton.addEventListener("click", () => {
         alert("Your raga is: Raga Malkauns");
         pageBackground.classList.add("calm-contemplative-night")
         vidPlayer.nightButton.onclick = playVideo("ydQWGnMIpq0")
      })
   })
}
calmContemplative()

// Coding functionality of button clicks with time button first

const morning = () => {
   morningButton.addEventListener("click", () => {
      happyExcitedButton.addEventListener("click", () => {
         alert("Your raga is: Raga Desh");
         pageBackground.classList.add("happy-excited-morning")
         vidPlayer.nightButton.onclick = playVideo("7oQj5Qh5ScU")
      })
      sadLongingButton.addEventListener("click", () => {
         alert("Your raga is: Raga Todi");
         pageBackground.classList.add("sad-longing-morning")
         vidPlayer.nightButton.onclick = playVideo("IfA7ZeIZv78")
      })
      calmContemplativeButton.addEventListener("click", () => {
         alert("Your raga is: Raga Nati Bhairavi");
         pageBackground.classList.add("calm-contemplative-morning")
         vidPlayer.nightButton.onclick = playVideo("bttszaG-fZU")
      })
   })
}
morning()

const afternoon = () => {
   afternoonButton.addEventListener("click", () => {
      happyExcitedButton.addEventListener("click", () => {
         alert("Your raga is: Raga Dhani");
         pageBackground.classList.add("happy-excited-afternoon")
         vidPlayer.nightButton.onclick = playVideo("tW6RWP54Tsg")
      })
      sadLongingButton.addEventListener("click", () => {
         alert("Your raga is: Raga Multani");
         pageBackground.classList.add("sad-longing-afternoon")
         vidPlayer.nightButton.onclick = playVideo("f5JARal8cL4")
      })
      calmContemplativeButton.addEventListener("click", () => {
         alert("Your raga is: Raga Bhimpalasi");
         pageBackground.classList.add("calm-contemplative-afternoon")
         vidPlayer.nightButton.onclick = playVideo("Meq8Fr7hvF0")
      })
   })
}
afternoon()

const night = () => {
   nightButton.addEventListener("click", () => {
      happyExcitedButton.addEventListener("click", () => {
         alert("Your raga is: Raga Yaman");
         pageBackground.classList.add("happy-excited-night")
         vidPlayer.nightButton.onclick = playVideo("I4LP3ziNTlU")
      })
      sadLongingButton.addEventListener("click", () => {
         alert("Your raga is: Raga Darbari");
         pageBackground.classList.add("sad-longing-night")
         vidPlayer.nightButton.onclick = playVideo("TGQ6LIB8Z6E")
      })
      calmContemplativeButton.addEventListener("click", () => {
         alert("Your raga is: Raga Malkauns");
         pageBackground.classList.add("calm-contemplative-night")
         vidPlayer.nightButton.onclick = playVideo("ydQWGnMIpq0")
      })
   })
}
night()