
const calcText = document.getElementById("inputText");
let totalValue = '';
let count = 0;
let simbolCheck = false;

function calc(value,simbol){
    if(value !== '=' && value !== 'R'){
        totalValue += value;
        if(simbol === 'simbol'){
            count++;
            if(count > 1){ 
            simbolCheck = true;
            }
        }else{
            count = 0;
            simbolCheck = false;
        }   
        
        if(!totalValue.includes("++") && !totalValue.includes("--") && !totalValue.includes("**") && !totalValue.includes("//") && !totalValue.includes("%%") && simbolCheck === false){
                calcText.value = totalValue;
        }else{
            totalValue = totalValue.slice(0, totalValue.length-1);
            calcText.value = totalValue;
        }
    }else if(value === 'R'){
        totalValue = '';
        calcText.value = totalValue;
    }else if(value === '=' && calcText.value != 0){
        totalValue = eval(totalValue);
        calcText.value = totalValue;
    }
}

