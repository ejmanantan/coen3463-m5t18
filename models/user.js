var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    nickname: {
        type: String
  },
    birthdate: Date
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);