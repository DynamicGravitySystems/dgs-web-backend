DgS Web Backend
===============

This repository constitutes the backend services for DgS's public website.

Currently this consists simply of an email send utility, which permits users to send
an email to us via a web form, after completing a CAPTCHA challenge.

---

###Environment Variables ###

Environment Variables used to control specific api functionality/authorization.

- NODE_PORT - Port to run node app listener on [optional, default: 8080]
- AWS_SES_SENDER - Email address used to send emails generated by web-form [optional, default: info@dynamicgravitysystems.com]
- AWS_SES_RECVR - Email address to send generated emails to [optional, default: info@dynamicgravitysystems.com]
- AWS_SES_REGION - AWS SES Region to use for email sending [optional, default: us-west-2]
- API_CORS_ORIGIN - Allowed CORS (Cross Origin Resource Sharing) originators/URLS.
- CAPTCHA_SITE_KEY - reCAPTCHA Site key used for Google reCAPTCHA verification requests.
