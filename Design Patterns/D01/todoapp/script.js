let toDoList = document.cookie.split("; ");
retrieve(toDoList);

$("#btnAdd").on("click", handleSubmit);

$(document).on("click", ".delete", handleDelete);

$(document).on("click", ".done", handleDone);

function handleSubmit() {
  if (!!$("#taskInput").val()) {
    addTask($("#taskInput").val());
    var taskInputValue = $("#taskInput").val();
    setCookie(taskInputValue);
  } else {
    console.error("Empty value");
  }
}
function handleDelete() {
  var removeMe = $(this).siblings("div").text();
  deleteCookie(removeMe);
  $(this).parent(".task2").remove();
}
function handleDone() {
  $(this).parent(".task2").toggleClass("TaskDone");
}
function addTask(task) {
  $(".tasksBox").append(
    "<div class='task2'><div class='task'>" +
      task +
      "</div>" +
      "<button class='done' >Done</button> <button class='delete' >Delete</button><br></div>"
  );
}
function retrieve(toDoList) {
  toDoList.map((toDo) => {
    if (toDo.split("=")[1]) {
      if (!toDo.includes("deleted")) {
        addTask(toDo.split("=")[1]);
      }
    }
  });
}
function setCookie(taskInputValue) {
  var dataTime = new Date();
  dataTime.setMonth(dataTime.getMonth() + 1);
  document.cookie = `${taskInputValue} = ${taskInputValue}  ; expires=${dataTime}`;
}
function deleteCookie(removeMe) {
  document.cookie = `${removeMe} = ${removeMe} deleted  ; expires=1/1/2001`;
}
