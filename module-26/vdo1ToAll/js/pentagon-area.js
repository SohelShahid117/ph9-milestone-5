// 26-8 (Recap) Create A Reusable Function For Similar Task-Pentagon Area

function calculatePentagonArea() {
    // console.log(`connceted`);
    const perimeter = pentagonValue('pentagon-perimeter');
    const apotheme = pentagonValue('pentagon-apotheme');
    console.log(perimeter, apotheme);
    const area = 0.5 * perimeter * apotheme;
    setInnerTextValuePentagon('pentagon-area', area)
}

function pentagonValue(perimeterOrApothemeId) {
    const pentagonInput = document.getElementById(perimeterOrApothemeId);
    const pentagonValue = pentagonInput.value;
    const valueNumber = parseFloat(pentagonValue);
    return valueNumber;
}

function setInnerTextValuePentagon(innerTextId, value) {
    document.getElementById(innerTextId).innerText = value;
}


