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
let temp1, temp2, tempScore1 = 0, tempScore2 = 0, step = 0;
function generate(){
    if(!step){
        tempScore1 = 0;
        pointsUser.innerHTML = 0;
        tempScore2 = 0;
        pointsComputer.innerHTML = 0;
        step++;
    }

    temp1 = Math.floor(Math.random() * (10-1) + 1);
    numberUser.innerHTML = temp1;
    temp2 = Math.floor(Math.random() * (10-1) + 1);
    numberComputer.innerHTML = temp2;

    if(temp1 > temp2)
        pointsUser.innerHTML = ++tempScore1;
    else
        pointsComputer.innerHTML = ++tempScore2;

    if(tempScore1 == 3 || tempScore2 == 3){
        if(tempScore1>tempScore2)
            alert(userName + " win!");
        else
            alert("Computer win :(");
        step = 0;
    }
}