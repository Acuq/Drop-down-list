var mass = document.querySelectorAll(".list_hide");
var button = document.querySelector(".button__more");
var controlNum = 0;

var startNum = 0;
var massLenght = mass.length;

button.onclick = function(){
    
    if(controlNum == 0){
        while(startNum < massLenght){
            mass[startNum].style.display = "block";
            startNum++;
        }
        controlNum++;
        startNum = 0;
    }
    
    else{
        while(startNum < massLenght){
            mass[startNum].style.display = "none";
            startNum++;
        }
        controlNum--;
        startNum = 0;
    }
}