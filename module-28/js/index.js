// console.log(`connected`);
// alert('connect');

// 27-6 Change Home Screen to Playground by click
/*
function play() {
    // console.log('play start now');

    //step-1:hide the home screen-add hidden class
    //step-2:show the playground-remove hidden

    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');

    const playgroundScreen = document.getElementById('playground-screen');
    playgroundScreen.classList.remove('hidden');
}
*/


// 28-1 Project Review And Keyboard Event:
// 28-2 Get The Key Pressed And Check Right Or Wrong Key Pressed
// 28-3 Clear Right Key Background And Continue The Game
function handleKeyboardKeyUpEvent(event){
    // console.log('button press');
    // console.log(event);
    // console.log(event.key);
    const playerPressed = event.key;
    console.log('player press',playerPressed);

    // expected press
    const currentAlphabet = document.getElementById('current-alphabet').innerText.toLocaleLowerCase();
    console.log('current alphabet',currentAlphabet)

    //checked
    if(currentAlphabet === playerPressed){
        console.log('you win!You got a point.');
        console.log('u have prsd',currentAlphabet);
        removeBackgroundColor(currentAlphabet);
        continueGame();
    }else{
        console.log('you loss! You missed a life');
    }
}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);

// 27-7 Build getRandom alphabet Function.mp4:
// 27-8 (Recap) Random Alphabet and highlight selected alphabet
function continueGame() {
    // step-1:generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    // set-random alphabet to current-alphabet in playground screen

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    // document.getElementById('current-alphabet').innerText = alphabet;

    setBackgroundColor(alphabet)

}

function play() {
    hideElementById('home-screen');
    showElementById('playground-screen');
    continueGame();
}

// 27-9 Module Summary:all above




// MDN syntax
/*
addEventListener("keyup", (event) => {});
onkeyup = (event) => {};

html:
<input placeholder="Click here, then press and release a key." size="40" />
<p id="log"></p>

js:
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keyup", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
*/

