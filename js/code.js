let userEmail = document.querySelector('#email');
let userName = document.querySelector('#name');
let userSurname = document.querySelector('#surname');
let userAgeGroup = document.querySelector('#ageGroup');

let submitButton = document.querySelector('#submit');


let userInfo = [];


submitButton.addEventListener("click", (e)=>{
    e.preventDefault();

    userInfo.push(userEmail.value, userName.value, userSurname.value, userAgeGroup.value)
    console.log(userInfo);
    
});

