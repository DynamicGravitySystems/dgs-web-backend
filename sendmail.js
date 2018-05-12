const router = require('express').Router();
const captcha = require('./models/captcha');
const cors = require('cors');
const email = require('./models/email');

const env = require('./env');

const corsOpts = {
    origin: env.API_CORS_ORIGIN,
    optionsSuccessStatus: 200
};

router.post('/', cors(corsOpts), async function(request, response){

    let message = `Message from: ${request.body['from']} / ${request.body['name']}\n\nMessage: ${request.body['message']}\n\nSent via DgS Web Form.`;

    captcha.verify(request.body['captcha']).then(() => {
        return email.sendMessage(env.AWS_SES_RECVR, env.AWS_SES_SENDER, request.body['subject'], message);
    }).then((info) => {
        console.log(info);
        return response.status(200).send({success: true, message: info});
    }).catch((err) => {
        console.log(err);
        return response.status(500).send({success: false, message: err});
    })
});

module.exports = router;
