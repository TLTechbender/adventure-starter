const Item = require("./item");

// FILL THIS OUT
/* I'm finding this difficult so far, this problem set is different from the ones I've been encountering so far, as usual the mocha test ain't working, funny enough this time around I'm finding the spec file difficult to read*/
class Food extends Item {
    constructor(name,description){
        this.name=name;
        this.description=description;
    }
}

module.exports = {
  Food,
};
