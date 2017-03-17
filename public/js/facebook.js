function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    console.log('Successfully logged in with Facebook');
    FB.api('/me?fields=name,first_name', changeUser);
  }
}
function changeUser(response){
  console.log(response.name);
  var string = "Welcome " + response.first_name;
  var words = "Continue as " + response.name;
  $(".facebookLogin").hide();
  $("#kname").show();
  $("#kname").text(string);
  $("#yo").text(response.name);
  $(".submit").text(words);
  $("#logs").hide();
  $("#logs2").hide();
  $("#logs3").hide();

}
