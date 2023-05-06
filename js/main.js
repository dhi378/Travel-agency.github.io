
Array.from(document.getElementsByTagName).forEach((e, i)=>{
    e.addEventListener('keyup',(e1)=>{
        if (e.value.length>0){
            document.getElementsByClassName("fa-caret-down")[i].style.transform ="rotate(180deg)";
        }else{
            document.getElementsByClassName(" fa-caret-down")[i].style.transform="rotate(0deg)";
        }
    })
})