//Please , don't remove the following code
const maxWordLength = 10;
const minResult = 1;
const maxResult = 25;
const forbiddenWords = ['sex','porn','violence','murder'];
let alertArr = new Array(4);
let msgAlert = "";
if (typeof window !== 'undefined')
{
    window.onload = function()
    {
        //update the code that handles the form submit
        let button = document.querySelector("button");
        let searchField = document.getElementById("q");
        let numField = document.getElementById("num");
        button.onclick = checkForm;
        // let form = null;
        // form.onsubmit =null;

        function checkForm(event)
        {
            if (hasForbidenWord(searchField.value))
            {
                alertArr[0] = `-Please don't use one of these words: ${forbiddenWords}`;
                event.preventDefault();
            }
            if (hasATooLongWord(searchField.value)){
                alertArr[1] = `-Please enter words not longer than ${maxWordLength}`;
                event.preventDefault();
            }
            if (!hasChar(searchField.value)){
                alertArr[2] = "-Please enter a word to search";
                event.preventDefault();
            }
            if (!isInRange(numField.value))
            {
                alertArr[4] = `-Please enter number between ${minResult} & ${maxResult}`;
                event.preventDefault();
            }
            for (let x in alertArr){
                if ((alertArr[x] !== "") && (alertArr[x] !== undefined))
                {
                    msgAlert += alertArr[x] + "\n\n";
                }
            }
            if ((!isInRange(numField.value)) || (hasForbiddenWord(searchField.value)) || (hasATooLongWord(searchField.value)) || (!hasChar(searchField.value)))
            {
                alert(msgAlert);
            }
            alertArr = new Array(4);
            msgAlert = "";

        }
    }
}
//
//return a validation message in case the input is invalid
function validateQ(qValue) {
    let postfix = 'the search box';
    if (hasChar(qValue) && qValue.trim().length > 1) {
        if(isNumber(qValue))    
            return '*Please enter only text ' + postfix;
        else if (hasATooLongWord(qValue)) 
            return `*Please enter words not longer then ${maxWordLength} ${postfix}`;
        else if (hasForbiddenWord(qValue)) 
            return `*Please enter words other than ${forbiddenWords} ${postfix}`;
    }
    else{
        return `*Please enter at least 2 characters ${postfix}`;
    }
    return null;
}
//return a validation message in case the input is invalid
function validateNum(numValue) {
    if (!isInRange(numValue))    
        return `*Please enter number ${minResult} to ${maxResult} to tell google how many search results we want`;    
    else{
        return null;
    }
}
//
function isInRange(text){
    if ((Number(text)>=minResult) && (Number(text)<=maxResult))
    {
        return true;
    }
    return false;
}
//
function hasForbiddenWord(text) {    
    let str = text;
    for (let x of forbiddenWords)
    {
        if (str.includes(x))
        {
            return true;   
        }
    }
    return false;
}
// 
function hasATooLongWord(text) {   
    if (text.length>maxWordLength)
    {
        return true;
    } 
    return false;
}
//
function hasChar(text) {
    if ((text!=="") && (text!==undefined) && (text!==" "))
    {
        return true;
    }
    return false;
}
//
function isNumber(text) {
    if ((typeof(text)=="number") || ((!isNaN(text))))
    {
        return true;
    }
    return false;
}
//Please , don't remove the following code 
if (typeof module !== 'undefined') {
    module.exports = {
        isInRange,
        hasChar,
        isNumber,
        hasForbidenWord,
        hasATooLongWord,
    };
}
