

var emojis = {
  smile: {
    name: "smile",
    num: 0
  },
  grimacing: {
    name: "grimacing",
    num: 0
  },
  smirk: {
    name: "smirk",
    num: 0
  },
  stuck_out_tongue: {
    name: "stuck_out_tongue",
    num: 0
  },
  flushed: {
    name: "flushed",
    num: 0
  },
  cold_sweat: {
    name: "cold_sweat",
    num: 0
  },
  pensive: {
    name: "pensive",
    num: 0
  },
  sob: {
    name: "sob",
    num: 0
  },
  angry: {
    name: "angry",
    num: 0
  },
  rage: {
    name: "rage",
    num: 0
  }
}

var weather = {
  sunny: {
    name: "sunny",
    num: 0
  },
  partly_sunny: {
    name: "partly_sunny",
    num: 0
  },
  cloud: {
    name: "cloud",
    num: 0
  },
  umbrella: {
    name: "umbrella",
    num: 0
  },
  snowflake: {
    name: "snowflake",
    num: 0
  }
}


$("#load-div").load("index",function(data){
  emojis = countOccurences(data, emojis);
  weather = countOccurences(data, weather);
  // select top emojis
    create($("#emoji-chart"), 5, emojis);
    create($("#weather-chart"), 5, weather);
  });

  function create(ctx, numDisplay, emojiList) {
    var topEmoji = [];
    var usedEmojis=[];
    res = generateTopEmojis(topEmoji, numDisplay, emojiList, usedEmojis);
    topEmoji = res[0];
    usedEmojis = res[1]
    generateChart(ctx, topEmoji);
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
    for(key in emojiList) {
      if(!usedArr.includes(key)) {
        maxEmoji=key;
      }
    }

    for(key in emojiList) {
      var emoji = emojiList[key];

      if(emoji.num > max){
        max = emoji.num;
        maxEmoji=emoji.name;
      }

    }
    topArr.push({
      name: maxEmoji,
      num: max
    });
    usedArr.push(maxEmoji);
    emojiList[maxEmoji].num=-1;
  }
  return [topArr, usedArr];
}

function generateChart(ctx, topArr) {
  console.log(topArr);
  return new Chart(ctx, {
      type: 'bar',
      data: {
          labels: [topArr[0].name, topArr[1].name, topArr[2].name, topArr[3].name, topArr[4].name],
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

console.log('myChart');
