let login = document.getElementById("btn21")
console.log(login);

login.addEventListener("click",function login(){
    let log=document.getElementById("login")
    console.log(log);
    let dis = log.classList.toggle("false")
    if(dis){
        log.style.display="block"
    }
    else{
        log.style.display="none"
    }
})