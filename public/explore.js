let explore = document.getElementById("btn11")
// console.log(explore);

explore.addEventListener("click",function explorer(){
    let modal = document.getElementById("explorer")
    // console.log(modal);
    let display1 = modal.classList.toggle("flase")
    if(display1){
        modal.style.display="block"
    }
    else{
        modal.style.display="none"
    }
})

