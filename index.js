var randNo1 = Math.floor((Math.random()*6)+1);
var randNo2 = Math.floor((Math.random()*6)+1);

var str1 = "images/dice"+randNo1+".png";
var str2 = "images/dice"+randNo2+".png";

document.querySelectorAll("div img")[0].setAttribute("src",str1);
document.querySelectorAll("div img")[1].setAttribute("src",str2);

if ( randNo1 > randNo2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if ( randNo2 > randNo1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}

