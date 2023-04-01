//Letters
const letters = "abcdefghijklmnopqrstuvwxyz"
// get array from letters
let arrayletters = Array.from(letters)

// select Letters continer (f html derna div li ikoun fih les letters )

let lettercontiner = document.querySelector(".letters")

arrayletters.forEach(letter => {
   // create span 
   let span =document.createElement("span");

   // create text node  
   let  theletter = document.createTextNode(`${letter}`)

  // Add Class On Span
  span.className = 'letter-box';

   span.appendChild(theletter)

   lettercontiner.appendChild(span)
})

// Object Of Words + Categories
const words = {
   programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
   movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
   people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
   countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

// Get Random Property

let allKeys = Object.keys(words);
// Random Number Depend On Keys Length
let randomPropNumbre = Math.floor(Math.random() * allKeys.length)

// Category
let randomPropName = allKeys[randomPropNumbre];

// Category Words
let randaomPropValue = words[randomPropName]

// Random Number Depend On Words
let randomvalueNumbre = Math.floor(Math.random() * randaomPropValue.length)

// The Chosen Word
let randomvaluevalue = randaomPropValue[randomvalueNumbre]

// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess")
console.log(lettersGuessContainer)
// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomvaluevalue);

lettersAndSpace.forEach( letter => {

      let emptySpan = document.createElement("span");

      // If Letter Is Space
      if (letter === " ") {

         // Add Class To The Span
         emptySpan.className = "space";
      }
      
      // Append Span To The Letters Guess Container
      lettersGuessContainer.appendChild(emptySpan);

   })

// Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;

let theDraw = document.querySelector(".hangman-draw")

let i=0;

// Handle Clicking On Letters
document.addEventListener("click",(e) => {
   
   let theStatus = false;
   
   if(e.target.className == "letter-box"){

      e.target.classList.add("clicked")

      let theclickedletter = e.target.innerHTML
   // The Chosen Word
   let theChosenWord = Array.from(randomvaluevalue.toLowerCase());

   theChosenWord.forEach((wordLetter,indexLetter) => {
      if(wordLetter === theclickedletter){
         // Set Status To Correct
         theStatus = true;
         guessSpans[indexLetter].innerHTML = theclickedletter;
         i++
      }
   });
   if(i == lettersAndSpace.length ){
      lettercontiner.classList.add(`finished`)
      win()
      
   }
   // If Letter Is Wrong
   if(theStatus !== true){
      
      // Increase The Wrong Attempts
      wrongAttempts++;
      
      // Add Class Wrong On The Draw Element

      theDraw.classList.add(`wrong-${wrongAttempts}`)  
      // Play Fail Sound
      let Fail = document.getElementById("fail")
      Fail.play()
      if(wrongAttempts === 8){

         lettercontiner.classList.add(`finished`)
         endgame();
      }
   }else{
      let succses = document.getElementById("success")
      succses.play()

   }

}

})


function endgame(){

 // Create Popup Div
 let div = document.createElement("div");

 // Create Text
 let divText = document.createTextNode(`Game Over, The Word Is <  ${randomvaluevalue}  >`);
 let spanessay = document.createElement("span");
 let essay = document.createTextNode(" Tap in the screen and try again ")

 // Append Text To Div
 div.appendChild(divText);
 spanessay.appendChild(essay);

 div.appendChild(spanessay);


 // Add Class On Div
 div.className = 'popup';

 // Append To The Body
 document.body.appendChild(div);
 
 let lost = document.getElementById("lost")
 lost.play()

document.body.onclick=function(){
   location.reload(true);
}

}


function  win(){

 // Create Popup Div
 let div = document.createElement("div");

 // Create Text
 let divText = document.createTextNode(`You Win`);
 let spanessay = document.createElement("span");
 let essay = document.createTextNode(" Tap in the screen and try again ")

 // Append Text To Div
 div.appendChild(divText);
 spanessay.appendChild(essay);

 div.appendChild(spanessay);


 // Add Class On Div
 div.className = 'win';

 // Append To The Body
 document.body.appendChild(div);

 let win = document.getElementById("win")
 win.play()

   document.body.onclick=function(){
      location.reload(true);
}
}