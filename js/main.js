var colors= ["rgb(0, 255, 0)","rgb(255, 255, 0)","rgb(255, 0, 255)","rgb(0, 0, 255)","rgb(255, 50, 120)","rgb(55, 69, 86)"];
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.background;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "correct";
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent= "try again"
        }
    });
}
