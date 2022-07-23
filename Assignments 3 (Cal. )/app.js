var screen = document.getElementById("screen");
var isCalculated;

function clearAll(){
    screen.value = "";
}
function getBtnValue(val) {
    if(isCalculated){
        clearAll();
    }
    screen.value +=val;
    isCalculated = false;
}

function calculate() {
    isCalculated = true;
}



function equalbtn() {
    screen.value=eval(screen.value);
    isCalculated=true;
}
function clearAll(){
    screen.value= "";
}

