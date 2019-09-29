Function.prototype.bind = Function.prototype.bind || function (target) {
  var self = this;
  return function (args) {
    if (!(args instanceof Array)) {
    	console.log(args);
      args = [args];
    }
    self.apply(target, args);
  };
};
