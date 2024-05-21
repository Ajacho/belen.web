// Dome to change background depending time zone
$(document).ready(function () {
    $("#greetingCurrHour").click(function (){
        const currHour = new Date().getHours();
        const greetingElem = document.getElementById('greeting');
        if (currHour < 12){
            greetingElem.textContent = 'Hello, good morning!!';
        } else {
            greetingElem.textContent = 'Hello, good afternon!!';
        }
    })
})



$(document).ready(function(){
    $(".centerMenu").window.onscroll
})


// Gallery grid four col img side by side
function four(){
    var elements = document.getElementsByClassName("column");
    for (var i = 0; i < elements.length; i++){
        elements[i].style.flex = "25%";
    }
}
// Gallery grid six col img side by side
function six(){
    var elements = document.getElementsByClassName("column");
    for (var i = 0; i < elements.length; i++){
        elements[i].style.flex = "15%";
    }
}