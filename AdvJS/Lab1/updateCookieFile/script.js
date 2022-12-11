function gotosite() {
  console.log("gotosite called");
  window.location.assign("action.html");
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let gender = document.querySelector("input[name=gender]:checked").value;
  let color = document.getElementById("color").value;

  let oneDay = 1;
  setCookie("name", name, oneDay);
  setCookie("age", age, oneDay);
  setCookie("gender", gender);
  setCookie("color", color);
}
