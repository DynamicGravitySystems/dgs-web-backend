
module.exports = {
    NODE_PORT: process.env.APP_PORT || 8080,
    AWS_SES_SENDER: process.env.AWS_SES_SENDER || 'info@dynamicgravitysystems.com',
    AWS_SES_RECVR: process.env.AWS_SES_RECVR || 'info@dynamicgravitysystems.com',
    AWS_SES_REGION: process.env.AWS_SES_REGION || 'us-west-2',
    API_CORS_ORIGIN: process.env.API_CORS_ORIGIN || 'https://www.dynamicgravitysystems.com',
    CAPTCHA_SITE_KEY: process.env.CAPTCHA_SITE_KEY,
};