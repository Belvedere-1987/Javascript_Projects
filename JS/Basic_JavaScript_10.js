var Num= 5000
function Call_Loop(){
        while (Num != -1) {
        Num--;
        }
           document.getElementById("Loop").innerHTML="Done"
        }   
function string_counter(){
    var str; var counter;
        var str= document.getElementById("string").innerHTML;
        var counter= str.length;
        document.getElementById("answer").innerHTML=counter;
}        
//This array is referenced on lines 67-89//
var Avengers=["Ironman", "Captain America", "Thor", "Black Window", "Hulk" ];
var Answer= "";
var X;
function for_Loop(){
    for (X = 0; X < Avengers.length; X++)
    {Answer += Avengers[X] + ", "}
document.getElementById("List_of_Heroes").innerHTML= Answer;
}
function array_Function(){
    var Villian= [];
    Villian[0] = "Loki"
    Villian[1] = "Ultron"
    Villian[2] = "Thanos"
    Villian[3] = "Galactus"
    var rand= Villian[Math.floor(Math.random() * Villian.length)];
    document.getElementById("Array").innerHTML= rand;
}
const weapon= {name:"Mlojnir", owner:"Thor", weight:"Undefined"}
    weapon.type= "hammer"
    weapon.power ="shoots lightning"
    weapon.weight="light to those who are worthy"
    weapon.health="returned"
function constant_function(){
        document.getElementById("constant").innerHTML="They will bring the " + weapon.type+ ", "+ weapon.name;
}
function constant_function2(){
        document.getElementById("constant_2").innerHTML=weapon.name + " "+ weapon.power + "; it weighs " + weapon.weight;
}
function recruit(){
    X="Wolverine"
    {let X= "Spiderman";
document.getElementById("new").innerHTML=X}
}
first_Avenger = "Captain America"
Playboy= "Iron Man"
Red_Ledger="Black Widow"
function text(A){
    document.getElementById("leader").innerHTML=A;
}
function command(){
    return text(first_Avenger);}

let muscle = {
    name: "Hulk",
    color: "green",
    alias: "Bruce Banner",
    location: "Earth",
    identity : function() {
        return "The " + this.name + " will smash all contenders"
    }
};
document.getElementById("strong").innerHTML=muscle.identity();

// WHY doesn't this work????//
//function remainder1() {
//    var Hero;
//    for (X = 0; X < Avengers.length; X++){
//        if (Avengers[X]===Avengers[0] || Avengers[X]===Avengers[1]){continue;}
//    {Hero += Avengers[X] + ", "}}
//    document.getElementById("left").innerHTML= Hero;
// }

function remainder (){

    for (X = 0; X < Avengers.length; X++){
    if (Avengers[X]===Avengers[0] || Avengers[X]===Avengers[1]){continue;}
     {document.write(Avengers[X] + ", ")}}
};

function Civil_War(){

    for (X = 0; X < Avengers.length; X++){
        if (X===2){break;}
         {document.write(Avengers[X] + ", ")}}

};