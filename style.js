var refreshTime;

function digiClock() {

  

  var currentTime = new Date;
  var currentHour = currentTime.getHours();
  var currentMinute = currentTime.getMinutes();
  var currentSecond = currentTime.getSeconds();

  // show time of day
  var timeOfDay = (currentHour < 12) ? "AM" : "PM";
  // display 12 hour time
  currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
  currentHour = (currentHour == 0) ? 12 : currentHour;

  // pad min and sec with 0 if value < 10
  currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute;
  currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond; 

  var timeString = currentHour + ":" + currentMinute + ":" + currentSecond + timeOfDay;

  document.getElementById("clock").innerHTML = timeString;
  //document.getElementById("hour").innerHTML = currentHour;
  //document.getElementById("min").innerHTML = currentMinute;
  //document.getElementById("sec").innerHTML = currentSecond;

}

document.getElementById("clock").addEventListener("onload", digiClock);