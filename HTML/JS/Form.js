let Name = document.querySelector('.Name');
let Email = document.querySelector('.Email');
let Number = document.querySelector('#phone');
let Group = document.querySelector('#sel');
let Btn = document.querySelector('.button');


let sharp = []
Btn.addEventListener("click", (e)=>{
    if(!Name.value || !Email.value || !phone.value || !sel.value){
        alert("You cant leave any fill empty")
    }
    else {
    e.preventDefault()
    alert ("Contact added sucessfully") 
    let UserName = Name.value
    let Usermail = Email.value
    let Userphone = phone.value;
    let Group = sel.value;
     let AllData = {UserName, Usermail, Userphone, Group}
    sharp.push(AllData)
     localStorage.setItem("UserInfo", JSON.stringify(sharp))
     Name.value = " ";
     Email.value = " ";
     phone.value = " "
     sel.value = " "
    //  window.location.href = "contactInfo.html" 

        }
        // const inputs = document.querySelector('.container');
        // inputs.textContent = JSON.stringify(localStorage.getItem("UserInfo"))    
}
)
sharp.map(
    []
)





