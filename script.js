

let button = document.querySelector("button")
let box = document.querySelector(".joke-box");

button.addEventListener("click" ,()=>{
    box.textContent = "";
    let dba = document.createElement("div");
    dba.classList.add("box1");

    let API =  "https://hindi-jokes-api.onrender.com/jokes?api_key=55a0f8dd6ea42a06fd49e909c6f3"
    fetch(API)
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
        let content = data.jokeContent
        console.log(content)
        box.innerHTML=`
         <p>${content}</p>
        `
        box.append(dba);
    })
})
