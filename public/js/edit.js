
$(".deleteModalButton").click(function() {
  var self = $(this);

  $("#deleteCardButton").click(function() {
    self.closest(".accordion-item").remove();
    $('#deleteModal').modal('hide');
  });
})



var tContent = "<textarea class = 'edit-mode' id='name' name='name' cols='40' rows='5' autofocus></textarea>";

$(".editModalButton").click(function() {
  var self = $(this);

       // get textbox that is to be edited
        var tBox =   self.closest(".accordion-item")
        tBox.css("border", "3px solid red");

        // make text content editable
        var oldTContent = tBox.find('p.textbox-content').text();
        var newTContent = $("<textarea class = 'edit-mode' id='name' name='name' cols='40' rows='5' autofocus>"+oldTContent+"</textarea>");

        tBox.find('p.textbox-content').replaceWith(newTContent);


        var newEmoji = $('<div class="edit-mode">' +
        "<label class=\"emoji\">\n" +
        "  <i class=\"em em-smile\"></i>\n" +
        "  <input type=\"radio\" name=\"mood\" value=\"smile\" />\n" +
        "</label class=\"emoji\">\n" +
        "\n" +
        "<label class=\"emoji\">\n" +
        "  <i class=\"em em-grimacing\"></i>\n" +
        "  <input type=\"radio\" name=\"mood\" value=\"grimacing\" />\n" +
        "</label class=\"emoji\">\n" +
        "\n" +
        "<label class=\"emoji\">\n" +
        "  <i class=\"em em-smirk\"></i>\n" +
        "  <input type=\"radio\" name=\"mood\" value=\"smirk\" />\n" +
        "</label class=\"emoji\">\n" +
        "\n" +
        "<label class=\"emoji\">\n" +
        "  <i class=\"em em-stuck_out_tongue\"></i>\n" +
        "  <input type=\"radio\" name=\"mood\" value=\"stuck_out_tongue\" />\n" +
        "</label class=\"emoji\">\n" +
        "\n" +
        "<label class=\"emoji\">\n" +
        "  <i class=\"em em-flushed\"></i>\n" +
        "  <input type=\"radio\" name=\"mood\" value=\"flushed\" />\n" +
        "</label class=\"emoji\">\n" +
        "\n" +
        "<label class=\"emoji\">\n" +
        "  <i class=\"em em-cold_sweat\"></i>\n" +
        "  <input type=\"radio\" name=\"mood\" value=\"cold_sweat\" />\n" +
        "</label class=\"emoji\">\n" +
        "\n" +
        "<label class=\"emoji\">\n" +
        "  <i class=\"em em-pensive\"></i>\n" +
        "  <input type=\"radio\" name=\"mood\" value=\"pensive\" />\n" +
        "</label class=\"emoji\">\n" +
        "\n" +
        "<label class=\"emoji\">\n" +
        "  <i class=\"em em-sob\"></i>\n" +
        "  <input type=\"radio\" name=\"mood\" value=\"sob\" />\n" +
        "</label class=\"emoji\">\n" +
        "\n" +
        "<label class=\"emoji\">\n" +
        "  <i class=\"em em-angry\"></i>\n" +
        "  <input type=\"radio\" name=\"mood\" value=\"angry\" />\n" +
        "</label class=\"emoji\">\n" +
        "\n" +
        "<label class=\"emoji\">\n" +
        "  <i class=\"em em-rage\"></i>\n" +
        "  <input type=\"radio\" name=\"mood\" value=\"rage\" />\n" +
        "</label class=\"emoji\">" +

         '</div>');

          var oldEmoji = tBox.find('.card-emoji').attr('class').split(" ")[1].split("-")[1];
          console.log(oldEmoji);

          console.log(newEmoji.find("input[value='"+oldEmoji+"']").prop("checked", true));
          tBox.find('.card-emoji').replaceWith(newEmoji);

            var newWeather = $('<div class="edit-mode">'
            +'<label class="emoji">'
            + '<i class="em em-sunny"></i>'
            + '<input type="radio" name="weather" value="sunny" />'
        + '</label class="emoji">'

          	+'<label class="emoji">'
            + '<i class="em em-partly_sunny"></i>'
            + '<input type="radio" name="weather" value="partly_sunny" />'
        + '</label class="emoji">'

        	+'<label class="emoji">'
          + ' <i class="em em-cloud"></i>'
          +  '<input type="radio" name="weather" value="cloud" />'
        + '</label class="emoji">'

        	+'<label class="emoji">'
          +  '<i class="em em-umbrella"></i>'
          +  '<input type="radio" name="weather" value="umbrella" />'
        + '</label class="emoji">'

        	+'<label class="emoji">'
          +  '<i class="em em-snowflake"></i>'
          +  '<input type="radio" name="weather" value="snowflake" />'
        + '</label class="emoji">' +


          '</div>');


        var oldWeather = tBox.find('.card-weather').attr('class').split(" ")[1].split("-")[1];
        newWeather.find("input[value='"+oldWeather+"']").prop("checked", true);
        tBox.find('.card-weather').replaceWith(newWeather);

        var saveBtn = $('<button type="button" class="btn btn-danger saveBtn">Save Changes</button>');
        var btnContainer = $('<div class="btnContainer"></div>');

        btnContainer.append(saveBtn);
        tBox.append(btnContainer);

        // Replace editable fields with new values
        saveBtn.click(function() {
          var editedTContent = newTContent.val();
          newTContent.replaceWith('<p class="textbox-content">'+editedTContent+'</p>');

          var selectedEmoji = newEmoji.find("input[type='radio']:checked").val();
          newEmoji.replaceWith('<i class="em em-'+selectedEmoji+ ' card-emoji"></i>');

          var selectedWeather = newWeather.find("input[type='radio']:checked").val();
          newWeather.replaceWith('<i class="em em-'+selectedWeather+ ' card-weather"></i>');

          tBox.css("border", "none");
          //remove changes button
          $(this).remove();
        })

})
