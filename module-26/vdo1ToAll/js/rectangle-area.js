// 26-4 Calculate The Triangle Area And Display It On UI
// 26-5 (Recap) Calculate Rectangle Area And Display

function calculateRectangle() {
    // console.log(`inside from the calculator function`);
    const rectangleWidthInput = document.getElementById('rectangle-width');
    // console.log(rectangleWidthInput)
    const rectangleWidthValue = rectangleWidthInput.value;
    // console.log(rectangleWidthValue)
    const width = parseFloat(rectangleWidthValue);
    // console.log(width);
    const rectangleLengthInput = document.getElementById('rectangle-length');
    // console.log(rectangleHeightInput)
    const rectangleLengthValue = rectangleLengthInput.value;
    // console.log(rectangleHeightValue);
    const length = parseFloat(rectangleLengthValue);
    // console.log(length);

    const area = width * length;
    document.getElementById('rectangle-area').innerText = area;
    // console.log(area);
}