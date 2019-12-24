var global = ("This is a global variable");
function function_1 () {
    var local = ("This is a local variable");
    document.write(local);
}
function broken (){
    document.getElementById("error").innerHTML= (local + " this works!");
      console.log (local + "this works!");
}
function time() {
    var hour =new Date().getHours();
    var sentence;        
    if (hour < 6){sentence="time to go home";}
    else {sentence="time to work";}
    document.getElementById("work").innerHTML= sentence;
    }
function animalsound() {
    var Sound;
    var milk=document.getElementById("cow").value;
    if (milk=="cow") { Sound="MOO!";}
    else if (milk=="pig") { Sound="OINK";}
    else if (milk=="sheep") { Sound="BAA";}
    else {Sound="Please type in the name of a barnyard animal. Try \"cow\" or \"pig\" for example";};
    document.getElementById("moo").innerHTML=Sound;
    }
function Time_function(){
    var Time= new Date().getHours();
    var Reply; 
    if (Time<12==Time>0){
        Reply ="It is morning time!";
    }
    else if (Time>12 == Time<18){
        Reply="It is the afternoon";
            }
    else{
        Reply="It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}

    