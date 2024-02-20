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

