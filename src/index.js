let nameField = document.getElementById("name");
let emailField = document.getElementById("email");
let phoneNumberField = document.getElementById("phone-number");
let nextBtn = document.querySelector(".next-btn");
let fields = document.querySelectorAll("input");

let handleNextBtnClick = () => {
  fields.forEach((field) => {
    if (field.value === "") {
        field.classList.add("border-danger");
        let thisLabel = field.previousElementSibling;
        let prompt = thisLabel.lastElementChild;
        prompt.style.display = "inline";
    }

    else{
        sessionStorage.setItem("userName", nameField.value)
        sessionStorage.setItem("userEmail", emailField.value)
        sessionStorage.setItem("userNumber", phoneNumberField.value)
        location.assign("./plan.html")
    }
  });
};

fields.forEach(field=>{
    field.addEventListener('focus',()=>{
            field.classList.remove("border-danger");
            let thisLabel = field.previousElementSibling;
        let prompt = thisLabel.lastElementChild;
        prompt.style.display = "none";
    })
})

nextBtn.addEventListener("click", handleNextBtnClick);
