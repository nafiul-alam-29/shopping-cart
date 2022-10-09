function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId)
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementById(elementId,value)

{
    const subTotalElement = document.getElementById(elementId)
   
    subTotalElement.innerText = value;
}

function currentSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-price')
    const currenCaseTotal = getTextElementValueById('case-price')

    const currentSubTotal = currenCaseTotal + currentPhoneTotal;
    console.log(currentSubTotal)

    setTextElementById('sub-total',currentSubTotal)
    
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementById('tax',taxAmount);

    const finalAmountString = (currentSubTotal + taxAmount).toFixed(2);
    const finalAmount = parseFloat(finalAmountString);

    setTextElementById('total',finalAmount);
}