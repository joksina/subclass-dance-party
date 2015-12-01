var doggyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="doggy"></span>');
  this.setPosition(top, left);
};

doggyDancer.prototype = Object.create(makeDancer.prototype);
doggyDancer.prototype.construct = doggyDancer;

doggyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};