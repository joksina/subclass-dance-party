var squirrelDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="squirrel"></span>');
  this.setPosition(top, left);
};

squirrelDancer.prototype = Object.create(makeDancer.prototype);
squirrelDancer.prototype.construct = squirrelDancer;

squirrelDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};