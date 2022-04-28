
// Modify the previous exercise so that the colour of the grid cells changes every time you click on the window. Use JavaScript and a list of pre-defined colors:

const bright = document.querySelector(".parent");
bright.addEventListener("click", () =>{
  let gridBoxes =  document.getElementsByClassName("gridBox");
    console.log(gridBoxes) 
   // const random = Math.floor(Math.random() * colors.length);
  //  currentColor = colors[random];
    for (let i = 0; i < gridBoxes.length; i++){
        let gridBox = gridBoxes[i]
        gridBox.style.backgroundColor = colors[currentColor]
    }
   if (currentColor < colors.length){
       currentColor++
       
   }
   else {
       currentColor = 0
   }
    
})



//alert("red")


var colors =["blue", "orange","red","yellow"];
var currentColor = 0;