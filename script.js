let nav = document.getElementById("navbar")
let menu = document.getElementById("menu")
let collapsed = document.getElementById("collapsed")
let unclicked = true

menu.onclick = function(){
    if(unclicked){
        unclicked = false;
        collapsed.style.display = "flex"
    }
    else {
        collapsed.style.display = "none"
        unclicked = true
    }
}

