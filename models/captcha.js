const request = require('request');
const captchaSecret = require('../env').CAPTCHA_SITE_KEY;
const endpoint = "https://www.google.com/recaptcha/api/siteverify";

exports.verify = function(token){
    const payload = {
        secret: captchaSecret,
        response: token
    };
    return new Promise(function(resolve, reject){
        request.post(endpoint, {form: payload}, function(err, httpResponse, body){
            if (err) return reject(err);
            let responseData = JSON.parse(body);
            if (responseData.success) return resolve();
            else return reject("CAPTCHA Verification Failed.");
        })
    });
};
