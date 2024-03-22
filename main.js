const btnCalc = document.getElementById('btn-calc');
const btnreset = document.getElementById('btn-reset');
const inputCel = document.getElementById('inputCel');
const inputFar = document.getElementById('inputFar');

let calculoFar;
let calculoCel;

const calcularCelAFar = ()=>{
    calculoFar = parseFloat(inputCel.value* 9 / 5) + 32;
    calculoFar = calculoFar.toFixed(2)
    inputFar.value = calculoFar
}

const calcularFarACel = ()=>{
    calculoCel = parseFloat(inputFar.value - 32) * 5 / 9;
    calculoCel = calculoCel.toFixed(2)
    inputCel.value = calculoCel
}

btnCalc.addEventListener('click',()=>{

    let celValue =  inputCel.value;
    let farValue =  inputFar.value;

    if((celValue > 0 && farValue > 0)||(celValue < 0 && farValue >= 0)){
        alert('ingrese solo un valor a la vez o reinicie')
    }
    else if(celValue > 0){
        calcularCelAFar()
    }
    else if(farValue > 0){
        calcularFarACel()
    }
    else{
        alert('inserte algun numero')
    }
})

btnreset.addEventListener('click',()=>{
    calculoCel=0
    calculoFar=0
    inputCel.value=0
    inputFar.value=0
})