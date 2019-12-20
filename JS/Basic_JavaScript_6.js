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