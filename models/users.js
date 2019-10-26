var mongoose = require('mongoose');
mongoose.set('useCreateIndex' , true);
var UserSchema = new mongoose.Schema({
    username :{ type : String , required : true , index : { unique : true } },
    password :{ type : String , required : true},
    email : {type : String , required : true , index : { unique : true }},
    data : { type : Date , default : Date.now() },
});

var UserModel = mongoose.model('user', UserSchema);
UserModel.createIndexes();
//添加用户
var  save = (data)=>{
    var user = new UserModel(data);
    return user.save().then(()=>{
        return true;
    })
    .catch(()=>{
        return false;
    });
};

//登录
var findLogin  =  (data)=>{
    return UserModel.findOne(data);
};
var updatePassword = ( email , password)=>{
    return UserModel.update( {email} , { $set : { password } } )
           .then(()=>{
               return true;
           })
           .catch(()=>{
               return false;
           });
};
module.exports = {
    save,
    findLogin,
    updatePassword
}