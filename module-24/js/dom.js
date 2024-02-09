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