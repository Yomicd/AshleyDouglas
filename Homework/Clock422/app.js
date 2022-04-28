// when the document is loaded, trigger the "documentLoaded" function
//window.addEventListener('DOMContentLoaded', documentLoaded);

var startTime;
var limit;
var timer;

(function documentLoaded() {
  "use strict";
 console.log('love')
  // listen for mouse clicks on the button
  return document.getElementById("btnStart").addEventListener("click", buttonClicked);

})()

// when we click on the button, we save the current time, and the time limit. We then
// create a timer to execute the "updateTime" function once a second.
function buttonClicked() {
  "use strict";
console.log("it was clicked");
  let minutes = Math.floor(document.getElementById('mins').value);
  let seconds = Math.floor(document.getElementById('secs').value);

  startTime = new Date();

  limit = parseInt(document.getElementById("btnStart").value);

  let requiredElapsedTime = minutes * 60 + seconds;

  document.getElementById('mins').value = '';
  document.getElementById('secs').value = '';

  clearInterval(timer);
  timer = setInterval(updateTime, 1000);
}

function updateTime(requiredElapsedTime) {
  "use strict";

  // read the current time
  var currentTime = new Date();

  // calculate how many seconds passed since the start of the timer
  var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

  // convert seconds to minutes and seconds (below 60)
  var minutes = Math.floor(elapsed / 60);
  var seconds = Math.floor(elapsed % 60);

  // pad with zeroes on the left to look better
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // show the elapsed time

document.getElementById("mins").value = seconds;
document.getElementById("secs")
  // check if we are above the time limit and set the color of the timer accordingly
  console.log('Elapsed: ' + elapsed);
  console.log('Required Elapsed Time: ' + requiredElapsedTime);
  if (elapsed > requiredElapsedTime){

    document.getElementById('mins').value = '';
    document.getElementById('secs').value = '';
    clearInterval(timer);
  }
  
  
  if (minutes >= limit) {
    document.getElementById("clock").className = "red";
  } else {
    document.getElementById("clock").className = "blue";
  }

}