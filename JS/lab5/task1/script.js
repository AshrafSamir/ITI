
function gotosite(){
    console.log("gotosite called");
    window.location.assign("action.html")
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name=gender]:checked').value;
    let color = document.getElementById("color").value;
    setCookie("name", name, 1);
    setCookie("age", age, 1);
    setCookie("gender", gender, 1);
    setCookie("color", color, 1);
}