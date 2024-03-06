const inputbox =document.getElementById("To-do-list");
const listc = document.getElementById("list-container")
console.log("hello world ")

function addtask() {
    if(inputbox.value === '' ){
        alert("you must write something")
    }
    else{
      let li=document.createElement("li");
      li.innerHTML=inputbox.value;
      listc.appendChild(li);
      let span =document.createElement("span");
      span.innerHTML="\u00d7"
      li.appendChild(span)

     

    }

    inputbox.value=""
    savedata()
}

listc.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked")
    console.log("it worked")
    savedata()

   
}
else if(e.target.tagName==="SPAN"){
  e.target.parentElement.remove();
  console.log("the second function worked ")
  savedata()
}}

)


function savedata() {
  localStorage.setItem("data",listc.innerHTML)
}

function showtask() {
  listc.innerHTML=localStorage.getItem("data")
}

showtask()
  


//project completed on 06-03-2024 
// at thime 15:55












