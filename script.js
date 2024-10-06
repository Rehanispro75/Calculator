function setScreenValue(value) {
    document.getElementById("result").value += value;

}
function clearScreen() {
    document.getElementById("result").value = "";

}



function calculateResult() {

    const resultElement = document.getElementById("result");
    const expression = resultElement.value.trim();

    if (expression === '') {
        alert("Enter any expression")
        return;
    }
    try {
        resultElement.value = eval(expression);
    }
    catch (e) {

        alert("You done some error")
    }
}





















