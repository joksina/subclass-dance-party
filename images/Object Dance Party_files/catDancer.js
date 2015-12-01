var catDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="cat"></span>');
  this.setPosition(top, left);
};

catDancer.prototype = Object.create(makeDancer.prototype);
catDancer.prototype.construct = catDancer;

catDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};