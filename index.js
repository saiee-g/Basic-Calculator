const calcip = document.getElementById('calcip');

function inputDisplay(input){
    calcip.value += input;
}

function allclr(){
    calcip.value = "";
}

function calculate(){
    try{
        calcip.value = eval(calcip.value);
    }
    catch(error){
        calcip.value = "error";
    }
    
}