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
  var title = $(".textbox h3").text(lists[i].title);
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
