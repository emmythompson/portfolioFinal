//Colors array
let colors = ["#2C8399", "#E67099", "#5AC9E6", "#E6D843", "#ffffff"]

//get button
let button = document.getElementById('button');

//add event
button.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    let container = document.getElementById('text');
    container.style.background = randomColor;
})

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }