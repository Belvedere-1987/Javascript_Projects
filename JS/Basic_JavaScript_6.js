function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride= (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride + " to ride.";
}

function vote_function() {
    var Can_vote, Vote_Rights;
    Can_vote = document.getElementById("Age").value;
    Vote_Rights=(Can_vote >= 18) ? "You can vote!" : "You aren't old enough to vote";
    document.getElementById("Answer").innerHTML = Vote_Rights;
}

function Artist(Name, Genre, Best_Album) {
    this.Artist_Name= Name;
    this.Artist_Genre= Genre;
    this.Artist_Best_Album= Best_Album;
}

var theBeatles = new Artist("The Beatles", "Pop-Rock", "Abbey Road");
var LedZeppelin = new Artist("LedZeppelin","Rock","IV");
var BlackSabbath = new Artist("Black Sabbath", "Metal", "Paranoid");
var PearlJam = new Artist("Pearl Jam","Grunge","Ten");

function music() {
    document.getElementById("New_and_This").innerHTML=LedZeppelin.Artist_Genre+ " is my favorite genre. "+theBeatles.Artist_Best_Album + 
    " is probably the greatest rock album ever recorded. " + BlackSabbath.Artist_Name + " and " + PearlJam.Artist_Name + " are important originators of new genres."
} 
function myFunction(){
    document.getElementById("Nested_Function").innerHTML=blue()
    function blue(){
        var X=getElementById("pgraph");
        
    }

}
