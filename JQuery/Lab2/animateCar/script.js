$(function () {
  $("#car").attr("style", "position: absolute; left: 0px;");
  $("#car").animate(
    {
      left: "1000px",
    },
    4000
  );
  $("body div").attr("style", "position: absolute; top: 100px; color: blue;");

  setInterval(function () {
    $("body div").text(
      `<img src='12.gif' style='left: ${parseInt($("#car").css("left"))}px'>`
    );
  }, 100);
});
