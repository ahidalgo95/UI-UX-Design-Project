var data = {
	"lists": [
		{
			"title": "Happy about",
			"date": "Thu Feb 09 2017",
			"items": [
				"Midterms",
				"Chipotle",
				"Coffee with Joe"
			]
		},
		{
			"title": "Grateful For",
			"date": "Wed Feb 08 2017",
			"items": [
				"Friends",
				"Fraser",
				"Chocolate"
			]
		}
	]
}

var formValues = JSON.parse(localStorage.getItem('formValues')) || {};
var $checkboxes = $("#checkbox-container :checkbox");
var $button = $("#checkbox-container button");

function allChecked(){
  return $checkboxes.length === $checkboxes.filter(":checked").length;
}

function updateButtonStatus(){
  $button.text(allChecked()? "Uncheck all" : "Check all");
}

function handleButtonClick(){
  $checkboxes.prop("checked", allChecked()? false : true)
}

function updateStorage(){
  $checkboxes.each(function(){
    formValues[this.id] = this.checked;
  });

  formValues["buttonText"] = $button.text();
  localStorage.setItem("formValues", JSON.stringify(formValues));
}

$button.on("click", function() {
  handleButtonClick();
  updateButtonStatus();
  updateStorage();
});

$checkboxes.on("change", function(){
  updateButtonStatus();
  updateStorage();
});

// On page load
$.each(formValues, function(key, value) {
  $("#" + key).prop('checked', value);
});

$button.text(formValues["buttonText"]);


var cardIndex = 0;

$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

  $(".left").click(function() {
    toggleCard();
  })

  $(".right").click(function() {
    toggleCard();
  })

}

function toggleCard(toggle) {
  var i = getIndex();
  var lists = data.lists;
  $("#last").text(lists[i].date);
  $(".textbox h3").text(lists[i].title);
  $( ".textbox li" ).each(function(index) {
    $( this ).text(lists[i].items[index]);
  });

  cardIndex = updateIndex();
}


function getIndex() {
  return cardIndex;
}

function updateIndex() {
  return cardIndex === 0 ? 1: 0;
}

var formValues = JSON.parse(localStorage.getItem('formValues')) || {};
var $checkboxes = $("#checkbox-container :checkbox");
var $button = $("#checkbox-container button");

function allChecked(){
          return $checkboxes.length === $checkboxes.filter(":checked").length;
}

function updateButtonStatus(){
          $button.text(allChecked()? "Uncheck all" : "Check all");
}

function handleButtonClick(){
          $checkboxes.prop("checked", allChecked()? false : true)
}

function updateStorage(){
          $checkboxes.each(function(){
                      formValues[this.id] = this.checked;
                        });

            formValues["buttonText"] = $button.text();
              localStorage.setItem("formValues", JSON.stringify(formValues));
}

$button.on("click", function() {
          handleButtonClick();
            updateButtonStatus();
              updateStorage();
});

$checkboxes.on("change", function(){
          updateButtonStatus();
            updateStorage();
});

// On page load
$.each(formValues, function(key, value) {
          $("#" + key).prop('checked', value);
});

$button.text(formValues["buttonText"]);
