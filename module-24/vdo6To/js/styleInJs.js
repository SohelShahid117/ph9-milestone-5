//24-6 Styling Dom Properties, Add And Remove Css Class Using JS
const sections = document.querySelectorAll('section');
// console.log(sections);
for (const section of sections) {
    console.log(section);
    section.style.border = `2px solid red`;
    section.style.borderRadius = `15px`;
    section.style.marginBottom = `10px`;
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightGray'
}

const placContainer = document.getElementById('places-container');
console.log(`hwllo`);
console.log(placContainer);
// placContainer.style.backgroundColor = 'yellow';
placContainer.classList.add('yello-bg');
console.log(`----------------------`);

placContainer.classList.add('x');
placContainer.classList.remove('large-text');


//24-7 NodeList, htmlcollection, parentNode, childnodes, createElement
console.log(placContainer.childNodes);
console.log(`----------------------`);
console.log(placContainer.childNodes[1]);
console.log(placContainer.firstChildChild);
console.log(placContainer.lastChild);
console.log(placContainer.childNodes[5]);
console.log(`----------------------`);
console.log(placContainer.childNodes[3]);
console.log(placContainer.childNodes[3].childNodes);
console.log(`----------------------`);
console.log(placContainer.childNodes[3].childNodes.lastChild);
console.log(placContainer.childNodes[3].childNodes[5]);
console.log(placContainer.childNodes[3].childNodes[5].nextSibling);
console.log(`----------------------`);

const fruitsUl = document.querySelector('.fruits-container ul');
console.log(fruitsUl)

// const newLi = document.createElement('p');
const newLi = document.createElement('li');
newLi.innerText = `Mango`
// const newLi = document.createElement('div');
// const newLi = document.createElement('section');
// const newLi = document.createElement('span');
console.log(newLi)
fruitsUl.appendChild(newLi)
console.log(fruitsUl.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)


