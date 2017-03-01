$(".textbox").on("click", "#editModalButton", function() {
alert("hell")
})

$(".deleteModalButton").click(function() {
  var thisOne = $(this);

  $("#deleteCardButton").click(function() {
    thisOne.closest(".textbox").remove();
    $('#deleteModal').modal('hide');
  });
})
