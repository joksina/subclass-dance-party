var doggyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="doggy"><span class="box"></span></span>');
  this.setPosition(top, left);
};

doggyDancer.prototype = Object.create(makeDancer.prototype);
doggyDancer.prototype.construct = doggyDancer;

doggyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

doggyDancer.prototype.addRainbow = function(){
  return new rainbowfy(
    this.top+75,
    this.left+175,
    Math.random() * 1000
  );
};
