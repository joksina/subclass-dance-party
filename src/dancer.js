// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

makeDancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/
makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(height, positon) {
  var width = 100;
  this.setPosition(height / 2 - 100, width * positon);
};