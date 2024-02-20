// 27-6 Change Home Screen to Playground by click
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// 27-8 (Recap) Random Alphabet and highlight selected alphabet
function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-400');
}
// 28-3 Clear Right Key Background And Continue The Game
function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-amber-400');
}

// 27-7 Build getRandom alphabet Function.mp4:
function getARandomAlphabet() {
    // const alphabetStr = document.getElementsByClassName('kbd');
    const alphabetStr = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetArr = alphabetStr.split('')
    // console.log(alphabetArr);

    const randomNumberIndex = Math.round(Math.random() * 25);
    // console.log(randomNumberIndex);

    const randomAlphabet = alphabetArr[randomNumberIndex];
    // console.log(randomNumberIndex, randomAlphabet);
    return randomAlphabet;
}

// 27-9 Module Summary:all above


// 28-5 Recap get and set score or life using function




