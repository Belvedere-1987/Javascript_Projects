function addition() {
    var user_input = 5+5; 
    document.getElementById("Math").innerHTML= user_input;
}
function subtraction() {
    var user_input = 10-5; 
    document.getElementById("Math_2").innerHTML= user_input;
}
function multiplication() {
    var user_input = 2*20; 
    document.getElementById("Math_3").innerHTML= user_input;
}
function division() {
    var user_input = 300/15; 
    document.getElementById("Math_4").innerHTML= user_input;
}
function multi() {
    var user_input =((10*5)/2)-11; 
    document.getElementById("Complex_Math").innerHTML= user_input;
}
function mod() {
    var user_input = 51 % 7; 
    document.getElementById("Remainder").innerHTML= user_input;
}
function neg() {
    var user_input = 10; 
    document.getElementById("Negator").innerHTML= -user_input;
}
function inc() {
    var user_input = 245; 
    document.getElementById("Increment").innerHTML= ++user_input;
}
function dec() {
    var user_input = 245; 
    document.getElementById("Decrement").innerHTML= --user_input;
}
function random() {
    document.getElementById("Guess").innerHTML= (Math.random() * 50);
}
var answer = { 
        num_1: 2,
        num_2: 4,
        answer_num: function() {
                       return Math.pow(this.num_1, this.num_2);
            }
        };
document.getElementById("exp").innerHTML=answer.answer_num();

