// 26-9 Module Summary

function calculateEllipseArea() {
    // console.log(`ellipse connected`);
    const majorRadius = getInputById('ellipse-major-radius');
    // console.log(majorRadius);
    const minorRadius = getInputById('ellipse-minor-radius');
    const area = 3.1416 * majorRadius * minorRadius;
    setInnerValue('ellipse-area', area);
}

function getInputById(id) {
    const ellipseId = document.getElementById(id);
    const ellipseValue = ellipseId.value;
    const majorOrMinorNumber = parseFloat(ellipseValue);
    return majorOrMinorNumber;
}

function setInnerValue(innerId, areaValue) {
    document.getElementById(innerId).innerText = areaValue;
}