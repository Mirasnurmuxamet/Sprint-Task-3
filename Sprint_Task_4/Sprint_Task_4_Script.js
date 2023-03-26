function getUsers(){
let users = localStorage.getItem('users');
if(users!=null){
users = JSON.parse(users)
}
else {
users = [
        {"email":"azamat@gmail.com","password":"qwerty1","fullName": "Azamat Lee","country":"Kazakhstan","birthDate":"20-03-1985"},
        {"email":"ali@gmail.com","password":"qwerty2","fullName": "Ali Bekker","country":"China","birthDate":"15-07-1995"},
        {"email":"Asan@gmail.com","password":"qwerty3","fullName": "Asan Wik","country":"Italy","birthDate":"05-01-1980"},
        {"email":"Aziz@gmail.com","password":"qwerty4","fullName": "Aziz Ali","country":"Japan","birthDate":"25-12-1998"},
        {"email":"Usen@gmail.com","password":"qwerty5","fullName": "Usen Ali","country":"Japan","birthDate":"21-10-1996"}
        ];
}
return users;
}

let userIndex;


function addUser(){
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let fullNameInput = document.getElementById("fullName");
let countryInput = document.getElementById("country");
let birthDateInput = document.getElementById("birthDate");
let passwordcheck = false;
let fullNamecheck = false;
let birthDatecheck = false;
let emailcheck = true;
let users = getUsers();
for(let i=0; i<users.length; i++){
if(emailInput.value == users[i].email){
document.getElementById("erorEmail").innerHTML = 'Current email is already in use';
emailcheck=false
break;
}
}
if(emailcheck == true){
document.getElementById("erorEmail").innerHTML = '';
}
if(passwordInput.value.length<6){
document.getElementById("erorPassword").innerHTML = 'Password length  at least must by 6 symbols'
}
else{
document.getElementById("erorPassword").innerHTML = ''
passwordcheck = true;
}

if(fullNameInput.value.length==0){
document.getElementById("erorFullName").innerHTML = 'Please enter full name'
}
else{
document.getElementById("erorFullName").innerHTML = ''
fullNamecheck = true;
}

if(birthDateInput.value.length==0){
document.getElementById("erorBirthDate").innerHTML = 'Please enter date of birth'
}
else{
document.getElementById("erorBirthDate").innerHTML = ''
birthDatecheck = true;
}
if(emailcheck == true && passwordcheck == true  && birthDatecheck == true && fullNamecheck == true){
let user = {};
user.email = emailInput.value;
user.password = passwordInput.value;
user.fullName = fullNameInput.value;
user.country = countryInput.value;
user.birthDate = birthDateInput.value;
users.push(user);
localStorage.setItem('users', JSON.stringify(users))
document.getElementById("success").innerHTML = 'Registration completed successfully';
}
}



function singIn(){
let emailSingIn = document.getElementById("singInEmail");
let passwordSingIn = document.getElementById("singInPassword");
let login = document.getElementById("logIn")
let users = getUsers();
let checkData = false;
for(let i=0; i<users.length; i++){
if(emailSingIn.value==users[i].email && passwordSingIn.value==users[i].password){
userIndex = i;
localStorage.setItem('userIndex', userIndex)
login.href = "Sprint_Task_4_Login.html";
checkData = true;
break;
}
}
if(checkData == false){
document.getElementById("eror").innerHTML = 'User is not found. Please check the data or register'
}
if(checkData == true){
document.getElementById("eror").innerHTML = ''
}
}


function goInform(){
let users = getUsers();
let userIndex = localStorage.getItem('userIndex');
let text = "";
text+="<h2> Welcome "+users[userIndex].fullName+"<h2><br>"
text+="<p>EMAIL:</p>"
text+="<b>"+users[userIndex].email+"</b>"
text+="<p>FULL NAME:</p>"
text+="<b>"+users[userIndex].fullName+"</b>"
text+="<p>COUNTRY:</p>"
text+="<b>"+users[userIndex].country+"</b>"
text+="<p>BIRTHDATE:</p>"
text+="<b>"+users[userIndex].birthDate+"</b>"
document.getElementById("userData").innerHTML = text;
let name =''
name+="<span>"+users[userIndex].fullName+"</span>"
document.getElementById("userName").innerHTML = name;
}
function claerUserIndex(){
localStorage.removeItem('userIndex')
}

