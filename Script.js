var input= document.getElementById("input-box")
var listContainer =document.getElementById("list-conatiner")
alert("Welcome MadedBy:Radin Movahedi")
input.addEventListener('keydown' ,function(event){
    if (event.KeyCode === 13) {
        add()
    }
    
    // console.log(event);

})

function add(){
    if(input.value.trim()===""){
        alert("You must write something")
        alert("thanks")
    }
    else {
        let li =document.createElement('li')
        li.innerHTML=input.value;
        listContainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    input.value=""
}
listContainer.addEventListener("click",function(ali){
    if(ali.target.tagName === "LI") {
        ali.target.classList.toggle("checked")
    }
    else if (ali.target.tagName === "SPAN") {
        ali.target.parentElement.remove()
    }
} ,false)