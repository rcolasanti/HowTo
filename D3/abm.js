var Agent = function(_x,_y,_type) {
  this.xpos = _x;
  this.ypos = _y;
  this.type =_type;
};

Agent.prototype.moveRandom = function(dist) {
  this.xpos += ((Math.random() * 2.0) - 1.0)*dist;
  this.ypos += ((Math.random() * 2.0) - 1.0)*dist;
  return this;
};

var agents = Array.apply(null, Array(500)).map(function () {return new Agent(250,250,"redabm")})

function draw() {
    setTimeout(function() {
        requestAnimationFrame(draw);
        agents.forEach(abm => {
            abm.moveRandom(1);
        })
        update()
    });
}
draw()
