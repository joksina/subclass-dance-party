$(document).ready(function() {
  window.dancers = [];

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
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".lineUpButton").on("click", function(event){
    for (var i=0; i<window.dancers.length; i++){
      window.dancers[i].lineUp($("body").height(), i);
    }
  });

});

