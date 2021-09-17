// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
console.log(FULL_HEART)

// Your JavaScript code goes here!
//collect all like-glyph elements in NodeList and add event listener for each element
document.querySelectorAll("span.like-glyph").forEach(
  (heart) => {
              heart.addEventListener("click", (e) => colorHeart(e.target)
  )})

//heart element change color
function colorHeart(heart) {
  mimicServerCall()
  //if response is successful then ".then()" recieve a message and an anonymous function
  // is running and changes color of a heart
  .then(() => {
    if(heart.className === "like-glyph activated-heart"){
      heart.innerText = EMPTY_HEART
      heart.classList.remove("activated-heart");
    }else {
      heart.innerText = FULL_HEART
      heart.classList.add("activated-heart")
    }
  })
  //if a response from the server is failure then ".chain" recieve a message and
  //its function is running showing an error bar
  .catch(error => {
        errorBar = document.querySelector("#modal")
        //errorBar.style.visibility = "visible"
        errorBar.classList.remove("hidden") //remove .hidden class, make error bar visible

        errorText = document.querySelector("h2")
        errorText.textContent = error

        setTimeout(() => errorBar.classList.add("hidden"), 3000)
        
  })
  
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        console.log("fail")
        reject("Random server error. Try again.");
      } else {
        console.log("suc")
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
