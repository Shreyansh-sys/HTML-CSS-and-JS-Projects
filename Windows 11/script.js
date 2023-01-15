let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "-375px"){
        startmenu.style.bottom = "35px"
    }
    else{
        startmenu.style.bottom = "-375px"
    }
})

let file = document.getElementsByClassName("fileexplorer")[0]
file.addEventListener("click", ()=>{
    console.log(file);
    startmenu.style.bottom == "-375px"
    document.getElementById('img1').style.width = "330px"
})
