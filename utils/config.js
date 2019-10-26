 var mongoose = require('mongoose');
 var nodemailer = require('nodemailer');
 var Mongoose = {
    url : 'mongodb://localhost:27017/miaomiao',
    // 链接数据库的方法
    connect() {
        mongoose.connect(this.url , {useNewUrlParser: true},(err)=>{
            if(err){
                console.log('数据库连接失败');
                return ;
            }
            console.log('数据库连接成功');
        });
    }
 };

 //邮箱配置
 var Email = {
    config : {
        host: 'smtp.qq.com',
        port: 587,
        auth: {
            user: '951040436@qq.com', // generated ethereal user
            pass: 'ageglxcgrazcbfea' // generated ethereal password
        }
    },
    get transporter(){
        return nodemailer.createTransport(this.config);
    },
    get verify(){
        return  Math.random().toString().substring(2,6);
    }
 };

//  对外提供接口
module.exports = {
    Mongoose,
    Email
}