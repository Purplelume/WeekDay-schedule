// Display current date
$('#currentDay').text(dayjs().format('dddd, MMMM DD'));

// Gets the current hour
var today = dayjs().hour();

var timeBlock = $(".time-block")
var saveButton = $(".saveBtn");
var hourNine = $("#hour-9");
var hourTen = $("#hour-10");
var hourEleven = $("#hour-11");
var hourTwelve = $("#hour-12");
var hourThirteen = $("#hour-13");
var hourFourteen = $("#hour-14");
var hourFifteen = $("#hour-15");
var hourSixteen = $("#hour-16");
var hourSeventeen = $("#hour-17");

// Change the color of the time blocks, sccording to the current time
for (var i = 0; i < timeBlock.length; i++) {
  if (timeBlock[i].dataset.time == today) {
      timeBlock[i].classList.remove("past");
      timeBlock[i].classList.remove("future");
      timeBlock[i].classList.add("present");
  };
  if (timeBlock[i].dataset.time > today) {
      timeBlock[i].classList.remove("past");
      timeBlock[i].classList.remove("present");
      timeBlock[i].classList.add("future");
  };
  if (timeBlock[i].dataset.time < today) {
      timeBlock[i].classList.remove("present");
      timeBlock[i].classList.remove("future");
      timeBlock[i].classList.add("past");
  }
};

// Save button on local storage
saveButton.on("click", function(e) {
    e.preventDefault();
    nineValue = hourNine.val();
    tenValue = hourTen.val();
    elevenValue = hourEleven.val();
    twelveValue =  hourTwelve.val();
    thirteenValue = hourThirteen.val(); 
    fourteenValue = hourFourteen.val();
    fifteenValue = hourFifteen.val();
    sixteenValue = hourSixteen.val();
    seventeenValue = hourSeventeen.val();
    localStorage.setItem("hour09", nineValue);
    localStorage.setItem("hour10", tenValue);
    localStorage.setItem("hour11", elevenValue);
    localStorage.setItem("hour12", twelveValue);
    localStorage.setItem("hour13", thirteenValue);
    localStorage.setItem("hour14", fourteenValue);
    localStorage.setItem("hour15", fifteenValue);
    localStorage.setItem("hour16", sixteenValue);
    localStorage.setItem("hour17", seventeenValue);
});

// Puts all input from local storage to page on start
function init() {
    hourNine.text(localStorage.getItem("hour09"));
    hourTen.text(localStorage.getItem("hour10"));
    hourEleven.text(localStorage.getItem("hour11"));
    hourTwelve.text(localStorage.getItem("hour12"));
    hourThirteen.text(localStorage.getItem("hour13"));
    hourFourteen.text(localStorage.getItem("hour14"));
    hourFifteen.text(localStorage.getItem("hour15"));
    hourSixteen.text(localStorage.getItem("hour16"));
    hourSeventeen.text(localStorage.getItem("hour17"));
};

init()

