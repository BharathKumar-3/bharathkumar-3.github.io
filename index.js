let submit_button = document.getElementById("submit-button");
submit_button.addEventListener("click",(event)=>{
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    console.log(add_value({
        name : name.value+" "+email.value,
        message : message.value
    }));
    console.log(name.value," ",email.value," ",message.value)
})
async function add_value(data){
    const response = await fetch("http://localhost:8080/",{
        method :"POST",
        mode : "cors",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(data)
    })
    return response.json();
}
