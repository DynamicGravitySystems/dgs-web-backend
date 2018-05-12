const debug = require('debug')('dgsapi:sendmail');
const router = require('express').Router({});
const cors = require('cors');
const captcha = require('../models/captcha');
const sns = require('../models/sns');

const env = require('../env');

const corsOpts = {
    origin: env.API_CORS_ORIGIN,
    optionsSuccessStatus: 200
};

// Enable CORS pre-flight check
router.options('/', cors(corsOpts));

router.post('/', cors(corsOpts), async function(request, response){
    let subject = request.body['subject'];
    let message = `Message from: ${request.body['from']} / ${request.body['name']}\n\n`;
    message += `Message: ${request.body['message']}\n\nSent via DgS Web Form.`;
    debug("Received message send request:\n" + message);

    captcha.verify(request.body['captcha']).then(() => {
        return sns.publish(env.AWS_SNS_TOPIC, subject, message);
    }).then((info) => {
        debug("SNS Publish successful: " + info);
        return response.status(200).send({success: true, message: "Message sent successfully"});
    }).catch((err) => {
        debug("SNS Publish failed: " + err);
        return response.status(500).send({success: false, message: "Message failed to send."});
    })
});

module.exports = router;
