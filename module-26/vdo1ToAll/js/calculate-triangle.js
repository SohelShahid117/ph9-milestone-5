// 26-1 Project Overview And Setup
// 26-2 Layout Design And Card Design
// 26-3 Get Triangle Base And Height Using Event And Function


// console.log(`calculate triangle`)
function calculateTriangle(){
    // console.log(`inside from the calculator function`);
    const triangleBaseInput = document.getElementById('triangle-base');
    // console.log(triangleBaseInput)
    const triangleBaseValue=triangleBaseInput.value;
    // console.log(triangleBaseValue)
    const base=parseFloat(triangleBaseValue);
    // console.log(base)

    const triangleHeightInput = document.getElementById('triangle-height');
    // console.log(triangleBaseInput);
    const triangleHeightValue=triangleHeightInput.value;
    // console.log(triangleHeightValue);
    const height=parseFloat(triangleHeightValue);
    // console.log(height)

    // console.log(base);
    // console.log(height);
    const area = 0.5*base*height;
    document.getElementById('triangle-area').innerText=area;
}