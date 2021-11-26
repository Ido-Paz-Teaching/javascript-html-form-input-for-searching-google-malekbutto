//Please , don't remove the following code 
if (typeof window !== 'undefined') {
    window.onload = function() {
        //update the code that handles the form submit
        let form = null;
        form.onsubmit =null;
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
        else if (hasForbidenWord(qValue)) 
            return `*Please enter words other then ${forbidenWords} ${postfix}`;
    }
    else{
        return `*Please enter at least 2 characters ${postfix}`;
    }
    return null;
}
//return a validation message in case the input is invalid
function validateNum(numValue) {
    if (!isInRange(numValue))    
        return `*Please enter number ${minResults} to ${maxResults} to tell google how many search results we want`;    
    else{
        return null;
    }
}
//
function isInRange(text){
    if ((Number(text)>=1) && (Number(text)<=25))
    {
        return true;
    }
    return false;
}
//
function hasForbidenWord(text) {    
    let forbidenWords = ['sex','porn','violence','murder'];
    let str = text;
    for (let x of forbidenWords)
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
    if (text.length>10)
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
    if ((typeof(text)=="number") || ((!isNaN(parseFloat(text))) && (!isNaN(text - 0))))
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
