

var emojis = {
  smile: {
    name: "smile",
    num: 0,
    label: "Smile"
  },
  grimacing: {
    name: "grimacing",
    num: 0,
    label: "Grimace"
  },
  smirk: {
    name: "smirk",
    num: 0,
    label: "Grin"
  },
  stuck_out_tongue: {
    name: "stuck_out_tongue",
    num: 0,
    label: "Pull Toungue"
  },
  flushed: {
    name: "flushed",
    num: 0,
    label: "embarrassed"
  },
  cold_sweat: {
    name: "cold_sweat",
    num: 0,
    label: "scared"
  },
  pensive: {
    name: "pensive",
    num: 0,
    label: "Pensive"
  },
  sob: {
    name: "sob",
    num: 0,
    label: "Sob"
  },
  angry: {
    name: "angry",
    num: 0,
    label: "Angry"
  },
  rage: {
    name: "rage",
    num: 0,
    label: "Rage"
  }
}

var weather = {
  sunny: {
    name: "sunny",
    num: 0,
    label: "Sunny"
  },
  partly_sunny: {
    name: "partly_sunny",
    num: 0,
    label: "Mixed"
  },
  cloud: {
    name: "cloud",
    num: 0,
    label: "Cloudy"
  },
  umbrella: {
    name: "umbrella",
    num: 0,
    label: "Rain"
  },
  snowflake: {
    name: "snowflake",
    num: 0,
    label: "Snow"
  }
}


$("#load-div").load("index",function(data){
  emojis = countOccurences(data, emojis);
  weather = countOccurences(data, weather);
  // select top emojis
    var topMoodEmoji = create($("#emoji-chart"), 5, emojis);
    var topWeatherEmoji = create($("#weather-chart"), 5, weather);

    addEmoji($(".emoji-mood-section"), topMoodEmoji)
    addEmoji($(".emoji-weather-section"), topWeatherEmoji)
  });

  function create(ctx, numDisplay, emojiList) {
    var topEmoji = [];
    var usedEmojis=[];
    res = generateTopEmojis(topEmoji, numDisplay, emojiList, usedEmojis);
    topEmoji = res[0];
    usedEmojis = res[1]
    generateChart(ctx, topEmoji);
    return topEmoji;
  }

  function addEmoji(node, list) {
    for(key in list) {
      
      node.append('<label class="emoji">'+
          '<i class="em em-'+ list[key].name+'"></i>' +
        '</label class="emoji">')
    }
  }

// count how many times emoji occuers
function countOccurences(data, emojiList) {
  // Get amount of each emoji
  for(key in emojiList) {
    var emoji = emojiList[key];
    var num = $(data).find(".em-"+emoji.name).size();

    if(num) {
      emojiList[key].num = num
    }
  }
  return emojiList;
}

function generateTopEmojis(topArr, numDisplay, emojiList, usedArr) {
  for(var i = 0; i <numDisplay ; i++) {
    var max = 0;

    // generate extra for less than 5 emojis have been chosen

    var ind = 0;
    var maxEmoji="smile";
    var maxLabel = "smile";
    for(emName in emojiList) {
      if(!usedArr.includes(emName)) {
        maxEmoji=emName;
        maxLabel=emojiList[emName].label;
      }
    }

    for(key in emojiList) {
      var emoji = emojiList[key];

      if(emoji.num > max){
        max = emoji.num;
        maxEmoji=emoji.name;
        maxLabel = emoji.label;

      }

    }

    topArr.push({
      name: maxEmoji,
      num: max,
      label: maxLabel
    });
    usedArr.push(maxEmoji);
    emojiList[maxEmoji].num=-1;
  }
  return [topArr, usedArr];
}

function generateChart(ctx, topArr) {
  return new Chart(ctx, {
      type: 'bar',
      data: {
          labels: [topArr[0].label, topArr[1].label, topArr[2].label, topArr[3].label, topArr[4].label],
          datasets: [{
              label: '# of timesChosen',
              data: [topArr[0].num, topArr[1].num, topArr[2].num, topArr[3].num, topArr[4].num],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(255, 206, 86, 0.5)',
                  'rgba(75, 192, 192, 0.5)',
                  'rgba(153, 102, 255, 0.5)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
}
