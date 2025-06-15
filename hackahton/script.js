let allstars = document.getElementsByClassName("backgroundstar");
let allmoodcards = document.getElementsByClassName("moodscore");
// random top and left for each star
for (let i = 0; i<allstars.length; i++){
    let top = Math.floor(Math.random() * 100) + "%";
    let left = Math.floor(Math.random() * 100) + "%";
    allstars[i].style.top = top;
    allstars[i].style.left = left;
}
for (let i = 0; i<allmoodcards.length; i++){
    let score = allmoodcards[i].innerText;
    if (score<25){
        allmoodcards[i].style.backgroundColor = "red";
    } else if (score<50){
        allmoodcards[i].style.backgroundColor = "darkorange";
    } else if (score<75){
        allmoodcards[i].style.backgroundColor = "yellow";
        allmoodcards[i].style.color = "black";
    } else {
        allmoodcards[i].style.backgroundColor = "green";
    }
}