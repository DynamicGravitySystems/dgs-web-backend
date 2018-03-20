const mailer = require('nodemailer');
const aws = require('aws-sdk');
const env = require('../env');
aws.config.update({region: env.AWS_SES_REGION});

const transport = mailer.createTransport({
    SES: new aws.SES({
        apiVersion: '2010-12-01'
    })
});

exports.sendMessage = function(toAddr, fromAddr, subject, message){
    let mail = {
        from: fromAddr,
        to: toAddr,
        subject: subject,
        text: message,
        html: ''
    };

    return new Promise(function(resolve, reject){
        transport.sendMail(mail, function(err, info){
            if(err) return reject(err);
            else return resolve(info);
        })
    })
};
