// 26-6 Extract Common Code Into A Function
// 26-7 Create A Reusable Function For Similar Task




function calculateParallelogram(){
    const base =parallelogramValue('parallelo-base') ;
    // console.log(base);
    const height =parallelogramValue('parallelo-height') ;
    // console.log(height);
    const area = base* height;
    setInnerTextValue('parallelo-area',area);
    
}

function parallelogramValue(baseOrHeightId){
    const paralleloInput = document.getElementById(baseOrHeightId);
    // console.log(paralleloBaseInput);
    const paralleloValue = paralleloInput.value ;
    // console.log(paralleloBaseValue);
    const valueNumber =  parseFloat(paralleloValue);
    // console.log(base);
    return valueNumber;
}

function setInnerTextValue(innerTextId,value){
    document.getElementById(innerTextId).innerText = value;
}