
module.exports = {
    NODE_PORT: process.env.APP_PORT || 8080,
    API_CORS_ORIGIN: process.env.API_CORS_ORIGIN || 'https://www.dynamicgravitysystems.com',
    CAPTCHA_SITE_KEY: process.env.CAPTCHA_SITE_KEY,
    AWS_SNS_TOPIC: process.env.AWS_SNS_TOPIC
};
