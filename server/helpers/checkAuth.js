module.exports = function(req, res, next) {
  "use strict";
  //   console.log("session", req.session);
  //   console.log("session.lastDb", req.session.lastDb);
  //   console.log("session.loggedIn", req.session.loggedIn);
  var err;
  if (req.session && req.session.loggedIn && req.session.lastDb) {
    return next();
  }

  err = new Error();
  err.status = 404; // 404 for more security

  next(err);
};
