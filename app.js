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