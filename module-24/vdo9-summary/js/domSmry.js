console.log(`fist content external JS`)
const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);

const secndSection = document.getElementById('second-section');
console.log(secndSection);

secndSection.style.backgroundColor = `yellow`
secndSection.style.color = `tomato`

// document.querySelectorAll
// document.querySelector

const secondList = document.getElementById('second-list');
console.log(secondList);

const li = document.createElement('li');
li.innerText = 'this is list item-5'

secondList.appendChild(li);

