$('#list-form #submit-button').click(function(e) {
  e.preventDefault();
  console.log("clicked");
  $('#list-form input').each(function(index) {
    var newVal =   $(this).val();
    $(this).val(newVal);
    $(this).prop('disabled', true);
  })
  $(this).css("display", "none");
  $('#edit-button').css("display", "block");
})

$('#edit-button').click(function() {
  $('#list-form input').each(function(index) {
    var newVal =   $(this).val();
    $(this).val(newVal);
    $(this).prop('disabled', false);
  })
  $(this).css("display", "none");
  $('#submit-button').css("display", "block");
});
