function validate(){
    const form = document.getElementById("email-form");
    if (form.reportValidity()){
        grecaptcha.reset();
        grecaptcha.execute();
    } else {
        return false;
    }
}
function onEmailSubmit(token){
    // TODO: Iterate through form to grab inputs?
    var fromEmail = document.getElementById('email-input').value;
    var fromName = document.getElementById('name-input').value;
    var subject = document.getElementById('subject-input').value;
    var message = document.getElementById('body-input').value;
    var payload = {
        from: fromEmail,
        name: fromName,
        subject: subject,
        message: message,
        captcha: token
    };
    console.log(payload);
    var http = new XMLHttpRequest();
    // http.open("POST", "https://api.dynamicgravitysystems.com/sendmail", true);
    http.open("POST", "http://localhost:8080/sendmail", true);
    http.onload = function () {
        M.toast({html: "Your message was sent!", displayLength: 4000});
        M.Modal.getInstance(document.querySelector('.modal')).close();
    };
    http.onerror = function (ev) {
        console.log(ev);
        M.toast({html: "Error sending your message.", displayLength: 4000});
    };
    http.setRequestHeader("Content-type", "application/json");
    http.send(JSON.stringify(payload));
}
