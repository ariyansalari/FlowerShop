const Alert=document.getElementById("alert");

const UsernameLogin=document.getElementById("username-login");
const PasswordLogin=document.getElementById("password-login");
const Submit=document.getElementById("submit");


Alert.children[1].addEventListener("click",(e)=>{
    e.preventDefault();
    Alert.style.top="-60%";
})
Submit.addEventListener("click",(e)=>{
    e.preventDefault()
    if(!UsernameLogin.value || !PasswordLogin.value)
    {
Alert.style.top="10%";
Alert.children[2].children[0].style.width="100%"
setTimeout(()=>{
    Alert.children[2].children[0].style.width="0%"
    Alert.style.top="-60%"
},6000)
    }
    else{
        UsernameLogin.value="" ; 
        PasswordLogin.value="";
console.log("✔کاربر محترم شما وارد شدید ");
    }
})


