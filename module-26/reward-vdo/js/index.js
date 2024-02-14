// mouse down 
// mouse up 
// mouse move 

// console.log('JS Mouse Events');
const container = document.getElementById('container');

const ball = document.getElementById('ball');

// let initialTop, initialLeft;

// function handleMove(e) {
//     const left = e.clientX - initialLeft;
//     // console.log(left)
//     const top = e.clientY - initialTop;
//     ball.style.top = `${top} px`
//     ball.style.left = `${left} px`
// }

// ball.addEventListener('mousedown', function (e) {
//     if (!initialTop && !initialLeft) {
//         initialLeft = e.clientX;
//         initialTop = e.clientY;
//         // console.log(initialTop);
//     }
//     container.addEventListener('mousemove', handleMove)
// });

// ball.addEventListener('mouseup', function () {
//     container.removeEventListener('mousemove', handleMove);
// })


document.addEventListener('mousemove', function (e) {
    let x = e.clientX;
    let y = e.clientY;
    ball.style.top = y + 'px';
    ball.style.left = x + 'px';
})