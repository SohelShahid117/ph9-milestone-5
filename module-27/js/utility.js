// 27-6 Change Home Screen to Playground by click
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// 27-7 Build getRandom alphabet Function.mp4:
function getARandomAlphabet() {
    // const alphabetStr = document.getElementsByClassName('kbd');
    const alphabetStr = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetArr = alphabetStr.split('')
    console.log(alphabetArr);

    const randomNumberIndex = Math.round(Math.random() * 25);
    console.log(randomNumberIndex);

    const randomAlphabet = alphabetArr[randomNumberIndex];
    console.log(randomNumberIndex, randomAlphabet);
    return randomAlphabet;
}


// 27-8 (Recap) Random Alphabet and highlight selected alphabet