$(document).ready(function() {
  window.dancers = [];
  window.rainbows = [];
  $(".addDancerButton").on("click", function(event) {
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var height = $("body").height() * Math.random();
    var width = $("body").width() * Math.random();
    if (height + 242 > $("body").height()) {
      height = height - 242;
    }
    if (width + 242 > $("body").width()) {
      width = width - 242;
    }

    var dancer = new dancerMakerFunction(
      height,
      width,
      Math.random() * 1000
    );
    $('.content').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".lineUpButton").on("click", function(event){
    var linNumber = 0;
    var position = 0;
    for (var i=0; i<window.dancers.length; i++){
      window.dancers[i].lineUp($("body").height(), position, linNumber);
      if (position*100+242+20 > $("body").width()){
        linNumber++;
        position = 0;
      } else {
        position++;  
      }
    }
  });

  $('.rainbowfyTitle').on('click', function(event){
    for (var i=0; i< window.dancers.length; i++){
      var rainbow = window.dancers[i].addRainbow();
      window.rainbows.push(rainbow);
      $('.content').append(rainbow.$node);
    }
  });

  $('.clearButton').on('click', function(event) {
    $('.content').empty();
    window.dancers=[];
    window.rainbows=[];
  });

  $('.circleUpButton').on('click', function(event){
    var angle = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      var x = calculateX(angle);
      var y = calculateY(angle);
      window.dancers[i].setPosition(x - 150, y + 200);
      window.dancers[i].angle = angle;
      angle += 10;
    }
  });

  var calculateX = function(angle) {
    var radius = 300;
    var cx = $("body").height()/2;
    var x = cx + radius * Math.cos(angle);
    return x;
  }

  var calculateY = function(angle) {
    var radius = 300;
    var cy = $("body").height()/2;
    var y = cy + radius * Math.sin(angle);
    return y;
  }

  addEventListener("keydown", function(e) { 
    if (e.keyCode === 37) {
      console.log('left');
      for (var i = 0; i < window.dancers.length; i++) {
        window.dancers[i].angle-=10;
        var angle = window.dancers[i].angle;
        var x = calculateX(angle);
        var y = calculateY(angle);
        window.dancers[i].setPosition(x - 150, y + 200);
      }
    } else if (e.keyCode === 39) {
      for (var i = 0; i < window.dancers.length; i++) {
        window.dancers[i].angle+=10;
        var angle = window.dancers[i].angle;
        var x = calculateX(angle);
        var y = calculateY(angle);
        window.dancers[i].setPosition(x - 150, y + 200);
      }
    }
  }, false);

});

