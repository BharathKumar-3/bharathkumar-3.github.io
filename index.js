let submit_button = document.getElementById("submit-button");
const fs = require("fs");
submit_button.addEventListener("click",(event)=>{
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    add_value({
        name : name.value,
        email : email.value,
        message:message.value
    });
})
const add_value = (data)=>{
    fs.appendFile("message.txt","hello",(err)=>{
        if(err){
            console.log(err);
        }
    })
    console.log(data);
    console.log(data.name," ",data.email," ",data.message)
}
