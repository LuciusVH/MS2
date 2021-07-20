// Links the contact form with Email JS
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
                $('#contact-form-title').text("Thank you!");
                $('#contact-form-text').text("Your email has been sent, we will get back to you soon!");
                $('#contact-form-content form').hide();

                resetForm()
            },
            function(error) {
                console.log("FAILED - The email has not been sent", error);
                $('#contact-form-title').text("Oops...");
                $('#contact-form-text').text("It seems something went wrong. We are probably already working on a fix, so try again later!");
                $('#contact-form-content form').hide();

                resetForm()
            }
        );
    return false; // To block from loading a new page
}


// Reset the form to its original condition
function resetForm() {
    setTimeout(function() {
        modalClosing()
    }, 4000);

    setTimeout(function() {
        $('#contact-form-title').text("Contact us");
        $('#contact-form-text').html('<p id="contact-form-text">Any query?<br>Drop us a message and we will get back to you quickly.</p>');
        $('#contact-form-content form').show();
        $('#fname').val('');
        $('#lname').val('');
        $('#email').val('');
        $('#message').val('');
    }, 5000);
}