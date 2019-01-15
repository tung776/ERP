var ValidatorBase = require("validator");

function Validator() {}

for (var key in ValidatorBase) {
  if (ValidatorBase.hasOwnProperty(key))
    Validator.prototype[key] = ValidatorBase[key];
}

Validator.prototype.extend = function(name, fn) {
  this[name] = fn;
};

module.exports = Validator;
