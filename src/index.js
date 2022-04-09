import "./index.js"
let btn=document.querySelector("#inbtn");
btn.setAttribute("class","submit")
let form =document.querySelector("form");
form.setAttribute("class","taskForm")
document.querySelector("#submit").addEventListener("submit",(e)=>{
    e.preventDefault();
    let task_name=document.querySelector("#task").value;

    append(task_name);
})

function append(task){
    let row=document.createElement("tr");
    row.setAttribute("class","row");
    let td1=document.createElement("td");
   
    let td3=document.createElement("td");
    let button=document.createElement("button");
    button.textContent="Remove"
   
    td1.textContent=task;
   console.log(task)
    td3.append(button);
    row.append(td1,td3);
    document.querySelector("tbody").append(row);

}