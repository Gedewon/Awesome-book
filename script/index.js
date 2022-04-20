const timeDate = document.querySelector("#time-date");

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

timeDate.innerHTML = new Date();
