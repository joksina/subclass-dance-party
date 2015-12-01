var rainbowfy = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="rainbowfy"></span>');
  this.setPosition(top, left);
};

rainbowfy.prototype = Object.create(makeDancer.prototype);
rainbowfy.prototype.construct = rainbowfy;

rainbowfy.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};