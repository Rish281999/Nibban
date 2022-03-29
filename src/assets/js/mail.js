function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "thoratrishabh28@gmail.com",
        Password: "Rishabh_Rb@1999",
        To: 'thoratrishabh28@gmail.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    )
}