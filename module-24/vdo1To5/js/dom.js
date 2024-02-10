// vdo-24-1: What Is Dom, Connect Your JS File With Html File
// 24-2 Traversing Dom - GetElementsByTagName

console.log(`hello from JS-->DOM:Document Object Model`);
console.log(document);
console.log(document.body);
// document.getElementsByTagName('li')
// document.getElementsByTagName('h1')
//student.study(4)----->student object & study is a key & value is a annonymous function
const liCollection = document.getElementsByTagName('li')
console.log(liCollection);
for(const listItm of liCollection){
    // console.log(listItm);
    console.log(listItm.innerText);
}

const allHeading = document.getElementsByTagName('h1');
console.log(allHeading);
for(const h1 of allHeading){
    // console.log(h1);
    console.log(h1.innerText);
}



//24-3 Traversing Dom - GetElementByClass VS GetElementById

console.log(`----------------------------`)
const fruitsTitle = document.getElementById('fruits-title');
console.log(fruitsTitle);
fruitsTitle.innerText = `Fruits chande by JS`;

console.log(document.getElementById("places-title"));
console.log(document.getElementById("places-title").innerText);
console.log(document.getElementById("places-title").innerText = "visiting place ");
const placesss = document.getElementsByClassName('impotant-places');
console.log(placesss);
for(place of placesss){
    // console.log(place);
    console.log(place.innerHTML);
    console.log(place.innerText);
}



// 24-4 Traversing Dom - GetElementByQuerySelector, QuerySelectorAll
console.log(`----------------------------`);
const someLi = document.querySelectorAll('.fruits-container li');
console.log(someLi);
for(li of someLi){
    console.log(li);
    console.log(li.innerText);
}
// only for 1st element
const firstLi = document.querySelector('.fruits-container li');
console.log(firstLi)
console.log(firstLi.innerHTML)



//24-5 Dynamic Style, GetAttribute, SetAttribute, InnerText, InnerHTML
console.log(`----------------------------`);
/*
document.getElementById('fruits-title').style;
document.getElementById('fruits-title').style.color=`blue`
document.getElementById('fruits-title').style.backgroundColor=`gray`
document.getElementById('fruits-title').style.textAlign = `center`
*/
/*
const title = document.getElementById('fruits-title')
console.log(title.getAttribute('id'));
console.log(title.getAttribute('class'));
console.log(title.classList);

console.log(title.classList.remove('bgc-class'));
title.classList.remove('bgc-class');
console.log(title.classList);

title.classList.add('purple-class');
console.log(title.classList);
title.setAttribute('title','set attribute now------>tooltip set by JS');

document.getElementsByClassName('fruits-container')
document.getElementsByClassName('fruits-container')[0]
document.getElementsByClassName('fruits-container')[0].innerHTML
document.getElementsByClassName('fruits-container')[0].innerText;
document.getElementsByClassName('fruits-container')[0].innerHTML = '<h2>great ABC-DOM changing the content</h2>'
*/



//24-6 Styling Dom Properties, Add And Remove Css Class Using JS