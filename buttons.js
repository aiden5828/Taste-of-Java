/* 
blah
blah 
*/

// blah blah blah

// Sends a message on loading
console.log("Hello!!");

function logger() {
    console.log("AMAZING");
    console.log("YOU PRESSED THE BUTTON");
}

function alerter() {
    // console.log("ALERT");
    alert("ALERT");
}

function toggledark() {
    // console.log("DARKMODE");
    document.body.classList.toggle("darkmode");
}

function wacky() {
    console.log("AHHHHHHHHHHHHHHHHH");
    document.getElementById("instructions").classList.toggle("flipped");
    if(document.getElementById("pagetitle").innerHTML === "The Powerful Buttons") {
        document.getElementById("pagetitle").innerHTML = "The Weak Buttons"
    }
    else {
        document.getElementById("pagetitle").innerHTML = "The Powerful Buttons"
    }
}