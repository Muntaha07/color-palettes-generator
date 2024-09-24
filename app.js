var containerEL = document.querySelector("#container")

for (let index = 0; index < 30; index++) {
   var colorDiv = document.createElement('div')
   colorDiv.classList.add("colour-div")
   containerEL.appendChild(colorDiv);  
}
var colorDivsEl = document.querySelectorAll(".colour-div")
 
generateColors()
function generateColors() {
    colorDivsEl.forEach(function(val){
        var newColorCode = randomColor();
       val.style.backgroundColor ="#" + newColorCode;
       val.innerText = "#"+ newColorCode;
        
         
    })

    
}

function randomColor() {
    var letters = '0123456789abcdef';
    var lettersCodeLength = 6;
    var colorCode =''
    for (var i = 0; i < lettersCodeLength; i++) {
        var randomNum = Math.floor(Math.random()*lettersCodeLength)
        colorCode += letters.substring(randomNum,randomNum +1)

    }
    return colorCode;
}