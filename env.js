
module.exports = {
    PORT: process.env.PORT || 8080,
    API_CORS_ORIGIN: process.env.API_CORS_ORIGIN,
    CAPTCHA_SITE_KEY: process.env.CAPTCHA_SITE_KEY,
    AWS_SNS_TOPIC: process.env.AWS_SNS_TOPIC,
    AWS_SNS_REGION: process.env.AWS_SNS_REGION || 'us-west-2',
};
