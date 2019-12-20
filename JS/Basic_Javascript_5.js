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