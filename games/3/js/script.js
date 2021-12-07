$("#back").click(function(){
    let url = window.location.href;
    let urlLenght = url.length;
    urlLenght -= 18;
    url = url.substring(0, urlLenght);
    url += "index.html";
    console.log(url);
    window.location.assign(url);
  });

let userName = prompt("Input your Name", "User");

if(userName == "" || userName == null){
        document.getElementById("userName").innerHTML = "Unknown user";
}
else if(userName.length > 20){
    document.getElementById("userName").innerHTML = "Unknown user";
}
else
    document.getElementById("userName").innerHTML = userName;

    
let pointsUser = document.getElementById("pointsUser");
let pointsComputer = document.getElementById("pointsComputer");

let numberUser = document.getElementById("numberUser");
let numberComputer = document.getElementById("numberComputer");

let cardUser = document.getElementById("cardUser");
let cardComputer = document.getElementById("cardComputer");

let attemptLabel = document.getElementById("attempt");

let temp1 = 0, temp2 = 0, tempScore1 = 0, tempScore2 = 0, step = 0;
let suitMap = new Map([
    [1, '_of_clubs.png'],
    [2, '_of_diamonds.png'],
    [3, '_of_hearts.png'],
    [4, '_of_spades.png']
  ]);

function generate(){
    if(!step){
        tempScore1 = 0;
        pointsUser.innerHTML = 0;
        tempScore2 = 0;
        pointsComputer.innerHTML = 0;
    }
    step++;
    attemptLabel.innerHTML = "Versus number " + step;

    temp1 = Math.floor(Math.random() * (11-2) + 2);
    if(temp1 == 5) { temp1 = 11};
    numberUser.innerHTML = temp1;
    cardUser.src = "cards/" + temp1 + suitMap.get(Math.floor(Math.random() * (4-1) + 1));
    
    temp2 = Math.floor(Math.random() * (11-2) + 2);
    if(temp2 == 5) { temp2 = 11};
    numberComputer.innerHTML = temp2;
    cardComputer.src = "cards/" + temp2 + suitMap.get(Math.floor(Math.random() * (4-1) + 1));

    if(temp1 > temp2)
        pointsUser.innerHTML = ++tempScore1;
    else if (temp1 < temp2)
        pointsComputer.innerHTML = ++tempScore2;

    if(tempScore1 == 3 || tempScore2 == 3){
        if(tempScore1>tempScore2)
            alert(userName + " win!");
        else
            alert("Computer win :(");
        step = 0;
    }
}