function updatePhoneQunaTity(IsIncreased){
    const phoneElement = document.getElementById('phone-field')
    const phoneElementString = phoneElement.value;
    const phoneQunatity = parseInt(phoneElementString);

    let newPhoneNumber

    if(IsIncreased===true)
    {
        newPhoneNumber = phoneQunatity + 1;
    }

    else{
        newPhoneNumber = phoneQunatity - 1;
    }
    
    
    phoneElement.value = newPhoneNumber;
    return newPhoneNumber;
}

function phonePrice(newPhonePrice){
    const phoneCurrentPrice = document.getElementById('phone-price')
    const phoneTotalPrice = newPhonePrice * 1219;
    phoneCurrentPrice.innerText = phoneTotalPrice;
}



document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhoneCount = updatePhoneQunaTity(true);
    phonePrice(newPhoneCount);
    currentSubTotal();


   
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneCount = updatePhoneQunaTity(false);
    phonePrice(newPhoneCount);
    currentSubTotal()
})