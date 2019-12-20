function Word() {
        var A= "Word"
        document.getElementById("string").innerHTML=document.write(typeof "word")
}

function Num () {
        var B=5
        document.getElementById("integer").innerHTML=document.write(typeof B);
} 

function False() {
        document.getElementById("no").innerHTML=isNaN('Word');
}

function True() {
        document.getElementById("yes").innerHTML=isNaN(300);
}
function foolish() {
        document.getElementById("what").innerHTML="word"/0;
}
function lightyear(){
    document.getElementById("buzz").innerHTML=(3E400);
}
function blackhole(){
    document.getElementById("buzzkill").innerHTML=(-5E700);
}
function boolean_false(){
        document.getElementById("wrong").innerHTML=(7>10);
}
function boolean_true(){
        document.getElementById("right").innerHTML=(50>8);
}
console.log(5550*348);
function blackmail(){
       document.getElementById("together").innerHTML=("25"+75)
}
console.log(80<60);

function compare(x,y,z){
         return ((x+y)==z)
};
function answer(){
        document.getElementById("easy").innerHTML= compare(5.5,4.5,10)
};
function answer_2(){
        document.getElementById('hard').innerHTML= compare(60.668,39.432,100)
}
function equate(x,y){
        return(x===y)
}
function answer_3(){
        document.getElementById("same").innerHTML= equate(510,510)
}
function answer_4(){
        document.getElementById("different").innerHTML= equate(510,"75")
}
function answer_5(){
        document.getElementById("not_quite").innerHTML= equate(510,"510")
}
function answer_6(){
        document.getElementById("fruit").innerHTML= equate("apples","oranges")
}
function or(w,x,y,z){
        return(w>x||y>z)
}
function answer_7(){
        document.getElementById("nope").innerHTML= or(7,10,8,80);
}
function answer_8(){
        document.getElementById("yep").innerHTML= or(7,10,8,6);
}
function and(w,x,y,z){
        return(w < x && y < z)
}
function answer_9(){
        document.getElementById("less_1").innerHTML= and(7,10,8,80);
}
function answer_10(){
        document.getElementById("less_2").innerHTML= and(7,10,8,6);
}
function answer_11(){
        document.getElementById("neg").innerHTML=!(2>3)
}
function answer_12(){
        document.getElementById("lie").innerHTML=!(3>2)
}