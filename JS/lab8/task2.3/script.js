let form = document.getElementById("form");
let input = document.getElementById("input").value;
let value;

var newEvent = new Event("timeout");

form.addEventListener("submit", function () {
  value = confirm("Are you sure you want to submit?");
  if (value) {
    alert("You have submitted the form");
    document.body.innerHTML = "";
  } else if (!value) {
    alert("You have cancelled the form");
    e.preventDefault();
  }
});

form.addEventListener("timeout", function () {
  console.log("Form timed out");
  alert("You have timed out");
});

setTimeout(function () {
  console.log(value);
  if (value == undefined) {
    form.dispatchEvent(newEvent);
    document.body.innerHTML = "";
  }
}, 5000);
