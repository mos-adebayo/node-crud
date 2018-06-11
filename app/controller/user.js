var User = require('../model/user');

module.exports.create =  function (req, res) {
    // console.log(req.body);

     var u = new User(req.body);

//    call the custom method  to add salutation
    u.salute( function (err, user) {
        if(err) throw err;
    });

    u.save(function (err, user) {
        if(err){
            return res.status(400).json(err);

        }else{
            return res.json(user);
        }
    })
};

module.exports.list = function(req, res){
  return User.find({}, function (err, users) {
      if(err) throw err;
      return res.json(users);

  })
};
