let homeScore = 0;
let guestScore = 0; 
let homeScoreEL = document.getElementById("homeScore");
let guestScoreEl = document.getElementById("guestScore");






function increment1() {
    homeScore += 1;
    homeScoreEL.textContent = homeScore;
}

function increment2() {
    homeScore += 2;
    homeScoreEL.textContent = homeScore;
}

function increment3() {
    homeScore += 3;
    homeScoreEL.textContent = homeScore;
}


function guestIncrement1() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function guestIncrement2()  {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function guestIncrement3(){
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

