document.addEventListener("DOMContentLoaded",function(){
        document.querySelector("#amit").addEventListener('submit',function(event){
        event.preventDefault();
     
        const form=event.target;
        
        const mno=parseInt(form.mobile.value);
        if(mno.toString()==NaN.toString()){
            alert("you are not entered a number")
        }
        else
            console.log(mno)
       
        // console.log(form.email.value);
        
    })
    document.getElementById("email").addEventListener("input",function(event){
        const emailElement=event.target;
        if(emailElement.validity.typeMismatch){
            emailElement.setCustomValidity("please enter an valid email address");
            emailElement.reportValidity();
        }
        else{
            emailElement.setCustomValidity("");
        }
    })

})      
// document.addEventListener("click",function(){
//     console.log(document.querySelector("#outside").value)
// })