//24-8 Create HTML elements using Javascript and appendChild
console.log(`append js`);

//1.where to add
const placesList = document.getElementById('places-list')
console.log(placesList);

//2.what to be added
const li = document.createElement('li');
li.innerText = 'butter bon'

//3.add the child
placesList.appendChild(li);


console.log(`-----------------------`)
//1.where to add
const mainContainer = document.getElementById('main-container');
console.log(mainContainer)


//2.what to be added
const sectn = document.createElement('section');
const h1 = document.createElement('h1')
h1.innerText = `my food list`;
sectn.appendChild(h1)


const ul = document.createElement('ul');
const li1 = document.createElement('li')
li1.innerText = 'Biriyani'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'chicken-fri'
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText = 'Salad'
ul.appendChild(li3)

//3.add the child
sectn.appendChild(ul)
mainContainer.appendChild(sectn)

//set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1>my dress section</h1>
    <ul>
        <li>Panjabi</li>
        <li>Lungi</li>
        <li>Shoe</li>
    </ul>
`
mainContainer.appendChild(sectionDress);

