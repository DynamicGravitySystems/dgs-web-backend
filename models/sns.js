const debug = require('debug')('dgsapi:sns');
const AWS = require('aws-sdk');
const env = require('../env');
const sns = new AWS.SNS({apiVersion: '2010-03-31', region: env.AWS_SNS_REGION});

exports.publish = function (arn, subject, message) {
    debug("Publishing to TopiARN: " + arn);
    const params = {
        Subject: subject,
        Message: message,
        TopicArn: arn
    };
    return new Promise((resolve, reject) => {
        sns.publish(params, (err, data) => {
            if (err) return reject(err);
            else return resolve(data);
        })
    })
};
