$(function () {
  $("#draggMe").attr("style", "position: relative; top: 50vh; left: 100vh;");
  $("#draggMe").draggable();
  $("#dropHere").droppable({
    drop: function (event, ui) {
      $("#draggMe").hide("explode", 3000);
    },
  });
});
