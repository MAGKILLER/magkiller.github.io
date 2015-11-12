var indexOfId = 0;
var identities = [
    "Airsoft Gamer",
    "Game Commentator",
    "Food Lover",
    "Computer Science Student"
];//the words that you want to show
var numberOfId = identities.length;
var tv = setInterval(setContent, 4000);//loop for change the words(every 4s)
function setContent() {
    if (indexOfId == numberOfId){
        indexOfId = 0;
    }
    display(identities[indexOfId]);
    indexOfId++;
}
function display(content) {
    var indexOfLetter = 0;
    var indexOfSpan = 0;
    var displayTimer;
    var selectionTimer;
    var text = "";
    var n = content.length;
    document.getElementById("intro").innerHTML = text;//clear the text
    setTimeout(delay, 600);//delay 0.6s after clearing
    setTimeout(selction_delay, 3000);//wait for 3s, then star the seletion animation.
    function delay() {
        displayTimer = setInterval(displayInfo, 80);//print a letter for every 0.08s. (control the speed of typing animation)
    }
    function selction_delay() {
        selectionTimer = setInterval(selction_anime, 15);//"select" a letter for every 0.015s.(control the speed of selection animation)
    }
    function displayInfo() {
        if(indexOfLetter == 0 ) {
            text = text + "<span id=\""+ "a" + indexOfLetter + "\">" + content.charAt(indexOfLetter) + "</span>";
            indexOfLetter++;
        }
        else if (indexOfLetter < n) {
            text = text + "<span id=\""+ "a" + indexOfLetter + "\">" + content.charAt(indexOfLetter) + "</span>";
            indexOfLetter++;
        }
        else {
            clearInterval(displayTimer);
        }
        document.getElementById("intro").innerHTML = text;
    }
    function selction_anime() {
        var idName = "a" + indexOfSpan;
        if(indexOfSpan == 0 ) {
            document.getElementById(idName).style.backgroundColor = "white";
            document.getElementById(idName).style.color = "black";
            indexOfSpan++;
        }
        else if (indexOfSpan < n) {
            document.getElementById(idName).style.backgroundColor = "white";
            document.getElementById(idName).style.color = "black";
            indexOfSpan++;
        }
        else {
            clearInterval(selectionTimer);
        }
    }
}