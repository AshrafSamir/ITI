$(function () {
  let name;
  let email;
  let phone;
  let message;
  let img_num = 1;
  // Hide all content
  $(".c").hide();

  $("#about").click(function () {
    $(".c").hide();
    $("#content").show();
  });

  $("#gallery").click(function () {
    $(".c").hide();
    $("#slider").show();
  });

  $("#left").click(function () {
    img_num--;
    if (img_num < 1) {
      img_num = 8;
    }
    $("#img").attr("src", "Assets/" + img_num + ".jpg");
  });

  $("#right").click(function () {
    img_num++;
    if (img_num > 8) {
      img_num = 1;
    }
    $("#img").attr("src", "Assets/" + img_num + ".jpg");
  });

  $("#sevices").click(function () {
    $(".c").hide();
    $("#list").slideDown();
  });

  $("#complain").click(function () {
    $(".c").hide();
    $("#form").show();
  });

  $("#send").click(function () {
    $(".c").hide();
    name = $("#name").val();
    email = $("#email").val();
    phone = $("#phone").val();
    message = $("#message").val();

    if (name == "" || email == "" || phone == "" || message == "") {
      alert("Please fill all the fields");
    } else {
      $("#name_result").html("Name: " + name);
      $("#email_result").html("Email: " + email);
      $("#phone_result").html("Phone: " + phone);
      $("#message_result").html("Complain: " + message);
      $("#result").show();
    }
  });

  $("#back").click(function () {
    console.log("back");
    $(".c").hide();

    $("#name").val(name);
    $("#email").val(email);
    $("#phone").val(phone);
    $("#message").val(message);
    $("#form").show();
  });
});
