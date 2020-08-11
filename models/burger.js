// Inside burger.js, import orm.js into burger.js
var orm = require("../config/orm.js");

// ???????

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(name, cb) {
      orm.create("burgers", ["burger_name", "devoured"],[name, false],cb)
    },
    update: function(id, cb) {
      var condition = "id = " + id;
      orm.update("burgers", {devoured: true}, condition, function(res) {
        cb(res);
      });
    },
 
  };

// Export at the end of the burger.js file.
module.exports = burger;