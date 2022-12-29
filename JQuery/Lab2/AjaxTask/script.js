$(function () {
  var response = "";
  $.ajax(
    "AJAX/rockbands.json", // request url
    {
      async: false,
      success: function (data, status, xhr) {
        // success callback function
        response = data;
      },
    }
  );

  var bands = [];
  for (let band in response) {
    bands.push(band);
  }

  var bandOptions = "";
  for (var i = 0; i < bands.length; i++) {
    bandOptions += `<option value=${bands[i]}>` + bands[i] + "</option>";
  }
  $("#Band").html(bandOptions);

  $("#Band").change(function () {
    var band = $(this).val();

    var albums = response[band];

    var albumOptions = "";
    for (var i = 0; i < albums.length; i++) {
      albumOptions +=
        `<option value=${albums[i].name}>` + albums[i].name + "</option>";
    }
    $("#Artist").html(albumOptions);
  });

  $("#Artist").change(function () {
    var band = $("#Band").val();
    var artist = response[band];

    for (var i = 0; i < artist.length; i++) {
      if (artist[i].name.split(" ")[0] == $(this).val()) {
        window.open(artist[i].value, "_blank");
      }
    }
  });
});
