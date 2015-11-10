var tv = setInterval(setContent, 4000);
var index1 = 0;
function setContent() {
    if (index1 == 0) {
        display("Airsoft Gamer");
        index1 = 1;
    }
    else if (index1 == 1) {
        display("Gaming Commentator");
        index1 = 2;
    }
    else if (index1 == 2) {
        display("Food Lover");
        index1 = 3;
    }
    else if (index1 == 3) {
        display("Computer Science Student");
        index1 = 0;
    }
}
function display(content) {
    var index2 = 0;
    var text = "";
    document.getElementById("intro").innerHTML = text;
    var n = content.length;
    setTimeout(delay, 600);
    function delay() {
       var timerVar = setInterval(displayInfo, 80);
    }
    function displayInfo() {
        if(index2 == 0 ) {


            console.log("waiting");
            text = text + content.charAt(index2);
            index2++;
            console.log("keepgoing");
        }
        else if (index2 < n) {
            text = text + content.charAt(index2);
            index2++;
        }
        else {
            clearInterval(timerVar);
        }
        document.getElementById("intro").innerHTML = text;
    }
}