const debug = require('debug')('dgsapi:sns');
const AWS = require('aws-sdk');
const sns = new AWS.SNS();


exports.publish = function(arn, subject, message) {
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
