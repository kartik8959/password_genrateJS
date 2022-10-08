const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const textArea=document.createElement("textarea");
    const password=resultEl.innerText;
    if(!password)return;
    textArea.value=password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    alert("password copied !!")
    
})

generateEl.addEventListener('click', () => {
    const length=lengthEl.value;
    const hasLower=lowercaseEl.checked;
    const hasUpper=uppercaseEl.checked;
    const hasNumber= numbersEl.checked;
    const hasSymbol=symbolsEl.checked;
    console.log(length,hasLower,hasUpper,hasSymbol,hasNumber);
    resultEl.innerText=generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length);

})



function generatePassword(lower, upper, number, symbol, length) {
    let genratedPassword="";
    const typeCounts=lower+upper+number+symbol;
    console.log(typeCounts);

    const typeArr=[{lower},{upper},{number},{symbol}].filter(item=>Object.values(item)[0]);//it will create an array with help of first object's value for eg :  [true]
    
    if(typeCounts===0)
        return '';

    for(let i=0;i<length;i+=typeCounts){
        typeArr.forEach(type=>{
            const funcName=Object.keys(type)[0];
            genratedPassword+=randomFunc[funcName]();
        })
       
    }
    const finalPassword=genratedPassword.slice(0,length)
   return finalPassword;
}

function getRandomLower() {
 return String.fromCharCode(Math.floor(Math.random()*26)+97)   
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65)  
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48)  
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random()*symbols.length)]
  
}

getRandomSymbol()