
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

for(let element of emptyFieldMessages){
    element.classList.add("d-none");
}


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
        if(!nameRegex.test(firstName)) console.log("Name must contain only alphabets");
        else console.log("good to go");
    }else{
        console.log("please fill this field");
    }
    // lastname
    if(lastName){
        if(!nameRegex.test(lastName)) console.log("Name must contain only alphabets");
        else console.log("good to go");
    }else{
        console.log("please fill this field");
    }
    // email
    if(email){
        if(!emailRegex.test(email)) console.log("Invalid email ID")
        else console.log("good to go")
    }else{
        console.log("please fill this field")
    }
    // password
    if(password){
        if(!passwordRegex.test(password)) console.log("Password not valid")
        else console.log("good to go")
    }else{
        console.log("please fill this field")
    }
})