function updateCaseNumber(IsIncreased){
    const caseNumber = document.getElementById('case-number-field')
    const caseQunatityString = caseNumber.value;
    const caseQunatity = parseInt(caseQunatityString);
    

    let newCaseNumber
    if(IsIncreased ===true)
    {
        newCaseNumber = caseQunatity + 1
    }

    else{
        newCaseNumber = caseQunatity - 1;
    }

    caseNumber.value = newCaseNumber;

    return newCaseNumber;
    
    
    
}

function updateCaseTotalPrice(newCaseNumber)
{
    const caseTotalPrice = newCaseNumber *59;
    const caseElement = document.getElementById('case-price');
    caseElement.innerText = caseTotalPrice;
    
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    currentSubTotal()
    
   
    
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    currentSubTotal()
})