
let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFieldMessages = document.querySelectorAll(".empty-field")

let nameRegex = /^[a-z]+$/i;
let emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

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
            break;
        case "lastName" :
            lastName = event.target.value;
            break;
        case "email" :
            email = event.target.value;
            break;
        case "password" :
            password = event.target.value;
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
        if(!nameRegex.test(firstName)) errorMessages[0].classList.remove("d-none");
        else errorMessages[0].classList.add("d-none");
    }else{
        emptyFieldMessages[0].classList.remove("d-none");
        console.log("please input the field")
    }
    // lastname
    if(lastName){
        emptyFieldMessages[1].classList.add("d-none");
        if(!nameRegex.test(lastName)) errorMessages[1].classList.remove("d-none");
        else errorMessages[1].classList.add("d-none");
    }else{
        emptyFieldMessages[1].classList.remove("d-none");
        console.log("please input the field")
    }
    // email
    if(email){
        emptyFieldMessages[2].classList.add("d-none");
        if(!emailRegex.test(email)) errorMessages[2].classList.remove("d-none");
        else errorMessages[2].classList.add("d-none");
    }else{  
        emptyFieldMessages[2].classList.remove("d-none");
        console.log("please input the field")
      }
    // password
    if(password){
        emptyFieldMessages[3].classList.add("d-none");
        if(!passwordRegex.test(password))errorMessages[3].classList.remove("d-none");
        else  errorMessages[3].classList.add("d-none");
    }else{   
        emptyFieldMessages[0].classList.remove("d-none");
        console.log("please input the field")
     }
})