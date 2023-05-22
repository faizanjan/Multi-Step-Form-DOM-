let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");
let addOnsPrices = document.querySelectorAll(".add-ons-price");
let addOns = document.querySelectorAll(`input[type='checkbox']`);

let monthly = sessionStorage.getItem('plan').split(",").length===2;

let triggerMonthly = (toggler)=>{
    let rates = ['+$1/mo', '+$1/mo', '+$2/mo']
    addOnsPrices.forEach((element, index) => {
        element.innerText= rates[index];
    });
}

let triggerYearly = (toggler)=>{
    let rates = ['+$10/yr', '+$20/yr', '+$20/yr']
    addOnsPrices.forEach((element, index) => {
        element.innerText= rates[index];
    });
}

if(monthly) triggerMonthly();
else triggerYearly();

let handleNextBtnClick = ()=>{
    let selectedAddOnsName = document.querySelectorAll(`input[type='checkbox']:checked +label .add-ons-name`);
    let selectedAddOnsPrice = document.querySelectorAll(`input[type='checkbox']:checked +label .add-ons-price`);

    let result = {};
    selectedAddOnsName.forEach((addOn, index)=> result[addOn.innerText]=selectedAddOnsPrice[index].innerText);
    sessionStorage.setItem('addOns', JSON.stringify(result));
    location.assign("summary.html");
}

let handlePrevBtnClick = ()=>{
    location.assign("plan.html");
}

prevBtn.addEventListener('click', handlePrevBtnClick);
nextBtn.addEventListener('click', handleNextBtnClick);
