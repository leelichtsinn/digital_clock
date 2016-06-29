window.onload = function() {
  function digiClock() {

  // create Date obj
  var currentTime = new Date;
  // create the individual elems and add "0" padding 
  var currentHour = ("0" + currentTime.getHours()).slice(-2);
  var currentMinute = ("0" + currentTime.getMinutes()).slice(-2);
  var currentSecond = ("0" + currentTime.getSeconds()).slice(-2);
  var currentMilliseconds = ("00" + currentTime.getMilliseconds()).slice(-3);

  // show time of day
  var timeOfDay = (currentHour < 12) ? "AM" : "PM";
  // display 12 hour time
  currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
  currentHour = (currentHour == 0) ? 12 : currentHour;

  // display time as a string
  var timeString = currentHour + ":" + currentMinute + ":" + currentSecond + ":" + currentMilliseconds + " " + timeOfDay;

  document.getElementById("clock").innerText = timeString;

  }
  setInterval(digiClock, 1);
}


