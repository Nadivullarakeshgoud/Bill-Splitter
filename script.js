const billAmountInput=document.querySelector('#bill-amount')
const numberOfPeopleInput=document.querySelector('.number-of-people')
const generateBillbtn=document.querySelector('.generate-bill-button')

const tipAmountOutput=document.querySelector('.tip-amount span')
const totalBillOutput=document.querySelector('.total span')
const eachPersonBillOutput=document.querySelector('.each-person-bill span')
const customTipInput=document.querySelector('.custom_input')
const resetbtn=document.querySelector('.reset-btn')

const tipsContainer=document.querySelector('.tip_container')

let tipPercentage=0

generateBillbtn.addEventListener('click',()=>{
   const billAmount=parseInt(billAmountInput.value)
   const numberOfPeople=parseInt(numberOfPeopleInput.value)
   
   
   const tipAmount=billAmount*(tipPercentage/100)
   const totalBill=billAmount+tipAmount


   const eachPersonBill=totalBill/numberOfPeople

   tipAmountOutput.innerText=`₹${tipAmount}`
   totalBillOutput.innerText=`₹${totalBill}`
   eachPersonBillOutput.innerText=`₹${eachPersonBill}`

   resetbtn.disabled=false
})




tipsContainer.addEventListener('click',(e)=>{
        // console.log(e.target,tipsContainer); both are equal

        if(tipsContainer.classList.contains('disabled')) return

        if(e.target!==tipsContainer){
            [...tipsContainer.children].forEach((tip)=>tip.classList.remove('selected'))
            e.target.classList.add('selected')
            tipPercentage=(parseInt(e.target.innerText));
            customTipInput.value=''
             if(numberOfPeopleInput.value && tipPercentage){
            generateBillbtn.disabled=false
        }
        else{
            generateBillbtn.disabled=true
        }
        }
})

customTipInput.addEventListener('input',()=>{
     
    tipPercentage=parseInt(customTipInput.value);
    [...tipsContainer.children].forEach((tip)=>tip.classList.remove('selected'))

    if(numberOfPeopleInput.value && tipPercentage){
            generateBillbtn.disabled=false
        }
        else{
            generateBillbtn.disabled=true
        }

})



resetbtn.addEventListener('click',()=>{
    billAmountInput.value='';
    [...tipsContainer.children].forEach((tip)=>tip.classList.remove('selected'))
    tipPercentage=0
    numberOfPeopleInput.value=''
    customTipInput.value=''   
    tipAmountOutput.innerText=''
    totalBillOutput.innerText=''
    eachPersonBillOutput.innerText='' 
    resetbtn.disabled=true

    generateBillbtn.disabled=true

})


billAmountInput.addEventListener('input',()=>{
    if(billAmountInput.value){
        customTipInput.disabled=false
        numberOfPeopleInput.disabled=false
        
        tipsContainer.classList.remove('disabled')
       

    }
    else{
        customTipInput.disabled=true
        numberOfPeopleInput.disabled=true
        
        tipsContainer.classList.add('disabled')
    }
})

numberOfPeopleInput.addEventListener('input',()=>{
   if(numberOfPeopleInput.value && tipPercentage){
            generateBillbtn.disabled=false
        }
        else{
            generateBillbtn.disabled=true
        }
})