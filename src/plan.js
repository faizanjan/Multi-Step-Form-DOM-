let year_month_toggler = document.querySelector('.form-check-input');
let prices = document.querySelectorAll(".price")
let twoMonthsFree = document.querySelectorAll(".two-months-free");
let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");

let monthly = true;

let yearVsMonth = (event)=>{
    if(monthly) {
        triggerYearly(event.target);
    }
    else {
        triggerMonthly(event.target);
    }
    monthly = !monthly;
    console.log(monthly);
}

let triggerMonthly = (toggler)=>{
    let rates = ['$9/mo', '$12/mo', '15/mo']
    prices.forEach((element, index) => {
        element.innerText= rates[index];
    });

    toggler.previousElementSibling.classList.add('fw-bold');
    toggler.nextElementSibling.classList.remove('fw-bold');

    twoMonthsFree.forEach(el=> el.style.display="none");
}

let triggerYearly = (toggler)=>{
    let rates = ['$90/yr', '$120/yr', '150/yr']
    prices.forEach((element, index) => {
        element.innerText= rates[index];
    });

    toggler.previousElementSibling.classList.remove('fw-bold');
    toggler.nextElementSibling.classList.add('fw-bold');

    twoMonthsFree.forEach(el=> el.style.display="block");
}

let handleNextBtnClick = ()=>{
    let plan = document.querySelector(`input[type='radio']:checked`);
    sessionStorage.setItem("plan", plan.nextElementSibling.innerText.split('\n\n'));
    location.assign("add-ons.html");
}

let handlePrevBtnClick = ()=>[
    location.assign("index.html")
]

year_month_toggler.addEventListener('click', yearVsMonth);

nextBtn.addEventListener('click', handleNextBtnClick);
prevBtn.addEventListener('click', handlePrevBtnClick);