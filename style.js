window.onload = function() {
  function digiClock() {

  var currentTime = new Date;
  var currentHour = currentTime.getHours();
  var currentMinute = currentTime.getMinutes();
  var currentSecond = currentTime.getSeconds();
  var currentMilliseconds = currentMilliseconds.getMilliseconds();

  // show time of day
  var timeOfDay = (currentHour < 12) ? "AM" : "PM";
  // display 12 hour time
  currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
  currentHour = (currentHour == 0) ? 12 : currentHour;

  // pad min and sec with 0 if value < 10
  currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute;
  currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond; 
  currentMilliseconds = (currentMilliseconds < 10 ? "0" : "") + currentMilliseconds;

  // display time as a string
  var timeString = currentHour + ":" + currentMinute + ":" + currentSecond + ":" + currentMilliseconds + " " + timeOfDay;

  document.getElementById("clock").innerText = timeString;

  }
  setInterval(digiClock, 1000);
}
