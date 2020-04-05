var counter = 2134;
var likeClicked = false;
var dislikeClicked = false;
var isRateHidden = false;

function like() {
    if (likeClicked === false){
        counter++;
        document.getElementById("reacts").innerHTML = counter + " people like this blog";
        likeClicked = true;
        dislikeClicked = false;
    }
}

function dislike() {
    if (dislikeClicked === false){
        counter--;
        document.getElementById("reacts").innerHTML = counter + " people like this blog";
        dislikeClicked = true;
        likeClicked = false;
    }
}

function clickRate() {
        var x = document.getElementById("rate");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
}

