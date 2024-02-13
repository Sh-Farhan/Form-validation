
let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFieldMessages = document.querySelectorAll(".empty-field")
let showPasswordBtn = document.querySelector(".btn");
let fnTarget,lsTarget,eTarget,pwdTarget;
let fnFlag,lsFlag,eFlag,pwdFlag;

let nameRegex = /^[a-z]+$/i;
let emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex =  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


for(let errorMessage of errorMessages){
    errorMessage.classList.add("d-none")
}

// for(let emptyFieldMessage of emptyFieldMessages){
//     emptyFieldMessage.classList.add("d-none");
// }


let firstName,lastName,email,password;  
let field;

formData.addEventListener("keyup",(event)=>{
    event.preventDefault();
    field = event.target.dataset.key;
    switch (field){
        case "firstName" :
            firstName = event.target.value;
            fnTarget = event.target;
            break;
        case "lastName" :
            lastName = event.target.value;
            lsTarget = event.target;
            break;
        case "email" :
            email = event.target.value;
            eTarget = event.target;
            break;
        case "password" :
            password = event.target.value;
            pwdTarget = event.target;
            break;
        default :
         firstName = lastName = email = password = ""; 
         break;
    }
})

submitButton.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(firstName,lastName,email,password);
    if(firstName){
        emptyFieldMessages[0].classList.add("d-none");
        if(!nameRegex.test(firstName)) 
        {errorMessages[0].classList.remove("d-none"); fnTarget.classList.add("error"); fnFlag = false;}
        else 
        {errorMessages[0].classList.add("d-none"); fnTarget.classList.remove("error"); fnFlag = true;}
    }else{
        emptyFieldMessages[0].classList.remove("d-none");
    }
    // lastname
    if(lastName){
        emptyFieldMessages[1].classList.add("d-none");
        if(!nameRegex.test(lastName)) 
        {errorMessages[1].classList.remove("d-none");lsTarget.classList.add("error"); lsFlag = false;}
        else {errorMessages[1].classList.add("d-none");lsTarget.classList.remove("error"); lsFlag = true;}
    }else{
        emptyFieldMessages[1].classList.remove("d-none");
    }
    // email
    if(email){
        emptyFieldMessages[2].classList.add("d-none");
        if(!emailRegex.test(email)){ errorMessages[2].classList.remove("d-none");eTarget.classList.add("error"); eFlag = false;}
        else {errorMessages[2].classList.add("d-none"); eTarget.classList.remove("error"); eFlag = true;}
    }else{  
        emptyFieldMessages[2].classList.remove("d-none");
      }
    // password
    if(password){
        emptyFieldMessages[3].classList.add("d-none");
        if(!passwordRegex.test(password)){errorMessages[3].classList.remove("d-none");pwdTarget.classList.add("error"); pwdFlag = false;}
        else  {errorMessages[3].classList.add("d-none"); pwdTarget.classList.remove("error"); pwdFlag = true;}
    }else{   
        emptyFieldMessages[0].classList.remove("d-none");
     }

     if(fnFlag && lsFlag && eFlag && pwdFlag){
        fnTarget.value = lsTarget.value = eTarget.value = pwdTarget.value = "";
        window.location.href = "/success.html";
     }
})

showPasswordBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    if(pwdTarget.getAttribute("type") === "text") pwdTarget.setAttribute("type","password");
    else pwdTarget.setAttribute("type","text");
});