document.getElementById('btn-case-plus').addEventListener('click',function(){
    const caseNumber = document.getElementById('cass-number-field')
    const caseQunatityString = caseNumber.value;
    const caseQunatity = parseInt(caseQunatityString);
    const newCaseNumber = caseQunatity + 1;
    caseNumber.value = newCaseNumber;
    
    
})