const form=document.getElementById("form")
const username=document.querySelector("#Username")
const email=document.querySelector("#email")
const password=document.querySelector("#Password")
const cpassword=document.querySelector("#cpassword")
// username.toUpperCase()

form.addEventListener("submit",(e)=>{
    
   if (!validateInputs()){
    e.preventDefault();
   }
})
function validateInputs(){
   const usernameVal=username.value.trim()
   
   const emailVal=email.value.trim() 
   const passwordVal=password.value.trim() 
   const cpasswordVal=cpassword.value.trim() 
   let success=true
   if(usernameVal===""){
    success=false
    seterror(username,"username must required")
   }
   else{
    setsucess(username)
   }
   if(emailVal===""){
    success=false
   seterror(email,"Email is required")
    }
    else if(!validateEmail(emailVal)){
        success=false
       seterror(email,"Please enter valid email")
    }
    else{
        setsucess(email)
    }
    if(passwordVal===""){
        success=false
        seterror(password,"Password should be must")
    }
    else if(passwordVal.length<8){
        success=false
        seterror(password,"Password must be atleast 8 characters long")
    }
    else{
        setsucess(password)
    }
    if(cpasswordVal===""){
        success=false
        seterror(cpassword,"Reenter the password")
    }
    else if(cpasswordVal!==passwordVal){
        success=false
        seterror(cpassword,"password  does not match")
    }
    else{
        setsucess(cpassword)
    }
    return success
  
   
   
}
function seterror(element,message){
    const inputGrp=element.parentElement
    const errorele=inputGrp.querySelector(".error")
    errorele.innerText=message
   inputGrp.classList.add("error")
   inputGrp.classList.remove("sucess")
}
function setsucess(element){
    const inputGrp=element.parentElement
    const errorele=inputGrp.querySelector(".error")
    errorele.innerText=""
   inputGrp.classList.remove("error")
   inputGrp.classList.add("success")
}
const validateEmail=(email)=>{
return String(email)
.toLowerCase()
.match(
    /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/
    );

}