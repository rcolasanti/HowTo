console.log("Kittens")



var Kitten = function() {
  this.name = 'Garfield';
  this.color = 'brown';
  this.gender = 'male';
};

Kitten.prototype.setName = function(name) {
  this.name = name;
  return this;
};

Kitten.prototype.setColor = function(color) {
  this.color = color;
  return this;
};

Kitten.prototype.setGender = function(gender) {
  this.gender = gender;
  return this;
};

Kitten.prototype.log = function() {
  console.log(
    this.name + ', the ' +
    this.color + ' ' + this.gender + ' kitten...'
  );
  return this;
};

///////////////////
// WITHOUT CHAINING

var bob = new Kitten();

bob.setName('Bob');
bob.setColor('black');
bob.setGender('male');

bob.log();

// OUTPUT:
// > saving Bob, the black male kitten...


///////////////////
// WITH CHAINING

new Kitten()
  .setName('Bob')
  .setColor('black')
  .setGender('male')
  .log();
