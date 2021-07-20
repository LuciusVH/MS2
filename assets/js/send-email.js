// Links the 
// Code snippet taken from the Code Institute UCD Resume project and modified to fit the app
function sendMail(contactForm) {
    emailjs.send("service_0gbqz3i", "template_ouiouibaguette", {
            "from_fname": contactForm.fname.value,
            "from_lname": contactForm.lname.value,
            "from_email": contactForm.email.value,
            "message": contactForm.message.value
        })
        .then(
            function(response) {
                console.log("SUCCESS - Email sent", response);
            },
            function(error) {
                console.log("FAILED - The email has not been sent", error);
            }
        );
    return false; // To block from loading a new page
}