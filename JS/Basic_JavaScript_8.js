function connect() {
    var phrase_1= "Hello! ";
    var phrase_2= "Nice to meet you, "
    var phrase_3= "what's your name? "
    var together= phrase_1.concat(phrase_2,phrase_3);
    document.getElementById("statement").innerHTML=together;
}
function meat() {
    var tacos; var reply;
    var tacos= "Carnitas, pollo, barbacoa";
    var reply= tacos.slice(10,15);
    document.getElementById("answer").innerHTML=reply;
    }
function seek() {
    var find; var statement;
    var statement=document.getElementById("experiment").textContent;
    var find= statement.search("paragraph"); 
    document.getElementById("success").innerHTML=find;
}
function caps() {
    var word; var upgrade;
    word="Paragraph";
    upgrade= word.toUpperCase();
    document.getElementById("woohoo").innerHTML=upgrade;
}
function numerate() {
    var C = 81;
    document.getElementById("integer").innerHTML=C.toString();
}
function round(){
    var A= 75432900;
    document.getElementById("5places").innerHTML=A.toPrecision(5);
}
var X= 7.5432975;
var D= X.toFixed(5)
function decimal_5(){
       document.getElementById("new_num").innerHTML=D;
}

function revert(){
    document.getElementById("old_num").innerHTML=X.valueOf();
}
