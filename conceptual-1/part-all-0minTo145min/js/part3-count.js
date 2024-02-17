// alert('hi');
// alert('connect from part3-count-js');
// function countValueShow(){
//     const countId = document.getElementById('count');
//     console.log(countId);
// }

const countId = document.getElementById('count');
let sum = 0;
function plusBtn(){
    // console.log('connected from plus btn');
    // const countId = document.getElementById('count');
    // console.log(countId);
    sum = sum + 1;
    countId.innerText = sum;
}

/*
function minusBtn(){
    console.log('connected from minus btn');
    const countId = document.getElementById('count');
    console.log(countId);
    sum = sum - 1;
    countId.innerText = sum;
}
*/

const minusBtn = document.getElementById('minus-btn');

function minusCount(){
    // const countId = document.getElementById('count');
    // console.log(countId);
    sum = sum - 1;
    countId.innerText = sum;
}

minusBtn.addEventListener('click',minusCount);

/*
minusBtn.addEventListener('click',function(){
    const countId = document.getElementById('count');
    console.log(countId);
    sum = sum - 1;
    countId.innerText = sum;
})
*/

let serialCount = 1;
document.getElementById('submit-btn').addEventListener('click',function(){
    console.log('submit the btn');
    const textInpt = document.querySelector('textarea');
    const textValue = textInpt.value;
    console.log(textValue);

    const review = document.getElementById('review');
    const p = document.createElement('p');
    p.innerText =serialCount + '.' +textValue;
    review.appendChild(p);
    serialCount++;
    document.querySelector('textarea').value = ' ';
    // textValue = '';ai line t kaj korena keno?
});

document.getElementById('submit-btn').addEventListener('click',function(evnt){
    console.log('event occure:',evnt);
    console.log(evnt.target);
})

document.getElementById('text-area').addEventListener('keyup',function(evnt){
    // console.log('event occure:',evnt);
    console.log(evnt.target);
    console.log(evnt.target.value);
    console.log(evnt.key);
    if(evnt.key === 'Enter'){
    const textInpt = document.querySelector('textarea');
    const textValue = textInpt.value;
    console.log(textValue);

    const review = document.getElementById('review');
    const p = document.createElement('p');
    p.innerText =serialCount + '.' +textValue;
    review.appendChild(p);
    serialCount++;
    document.querySelector('textarea').value = ' ';
  }

})



