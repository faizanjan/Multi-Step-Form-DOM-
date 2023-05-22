let planName = document.getElementById('plan-name');
let planPrice = document.getElementById('plan-price');
let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");
let addOnsSummary = document.getElementById('add-ons-summary');
let total = document.getElementById("total");
let totalPrice = document.getElementById("total-summary-price");

let monthly = sessionStorage.getItem('plan').split(",").length===2;
let price = 0;

// PLAN
let storedPlan = sessionStorage.getItem('plan').split(',');
planName.innerText = `${storedPlan[0]} (${monthly? 'Monthly': 'Yearly'})`
planPrice.innerText = storedPlan[1];
price+= parseInt(storedPlan[1].substring(1));

// ADD-ONS
let addOns = JSON.parse(sessionStorage.getItem('addOns'))
for(let key in addOns){
    // console.log(key,':',addOns[key])
    let newAddOn = document.createElement('div');
    newAddOn.innerHTML=`
    <p class="add-on-name text-muted">${key}</p>
    <p class="add-on-price">${addOns[key]}</p>
    `;
    price+= parseInt(addOns[key].substring(2))
    newAddOn.classList.add("add-on-sum", "d-flex", "flex-row", "justify-content-between", "align-items-center", "pe-3", "mt-2", "mb-3");
    addOnsSummary.appendChild(newAddOn);
}

// Total
total.innerText = `Total (${monthly? 'per month':'per year'})`;
total.classList.add('text-muted');
totalPrice.innerText= `$${price}/${monthly? 'mo':'yr'}`;
totalPrice.classList.add('text-primary', 'fs-4')

let handlePrevBtnClick = ()=>{
    location.assign("add-ons.html")
}

let handleNextBtnClick = ()=>{
    // Deal with the data however you want
    location.assign("thankyou.html");
}

nextBtn.addEventListener('click', handleNextBtnClick);
prevBtn.addEventListener('click', handlePrevBtnClick);