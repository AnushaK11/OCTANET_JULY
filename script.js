const enter= document.getElementById("enter");
const listBox= document.getElementById("list-box");
function addTask(){
    if(enter.value ===''){
        alert("Enter the task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=enter.value;
        listBox.appendChild(li);
let span=document.createElement("span");
span.innerHTML="delete";
li.appendChild(span);
    }
enter.value="";
}
listBox.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    
    
    },false);

