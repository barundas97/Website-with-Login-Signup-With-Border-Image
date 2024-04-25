const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const emailField = document.getElementById("emailField");
const title = document.getElementById("title");
const account = document.getElementById("account");


account.addEventListener("click",()=>{
     const formcontainer = document.getElementById("form-container");
     formcontainer.classList.toggle("formC");
     emailField.style.display = "none";
})

loginBtn.addEventListener("click",()=>{

    emailField.style.display = "none";
    title.innerHTML = "LogIn";
    loginBtn.classList.remove("disable");
    signupBtn.classList.add("disable");
});
signupBtn.addEventListener("click",()=>{
    title.innerHTML = "Sign Up";
    emailField.style.display = "block";
    signupBtn.classList.remove("disable");
    loginBtn.classList.add("disable");
});