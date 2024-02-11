// 25-1: 25-1 What Is Event, Different Types Of Event In Web
console.log(`this is seperate JS file`)

// 25-2 Add onclick handler directly or via javascript
// option-2
// [option-2 is VVVVVVVVVVVImportant----------!important]
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option-3
const makeBlueBtn = document.getElementById('make-blue');
// console.log(makeBlueBtn);
makeBlueBtn.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

const makePurpleBtn = document.getElementById('make-purple');
// console.log(makePurpleBtn)
makePurpleBtn.onclick = function () {
    document.body.style.backgroundColor = 'purple';
}

// 25-3 Different ways to use addEventListener on a button

// option-4
const makePinkBtn = document.getElementById('make-pink');
// console.log(makePinkBtn)
makePinkBtn.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

const makeGreenBtn = document.getElementById('make-green');
// console.log(makeGreenBtn)
makeGreenBtn.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});

// option-4 & final
// [option-4 is VVVVVVVVVVVImportant----------!important]
document.getElementById('golden-rod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
});


