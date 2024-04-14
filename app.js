// function to send the email when the sendMail() function gets called via the button

function sendMail() {
  let params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
    to_email: document.getElementById("email_id").value,
  };
  emailjs
    .send("service_hpy9phb", "template_9qdwkod", params)
    .then(function (res) {
      if (res.status == 200 || res.status == "OK") {
        alert("Successfully sent email!\n" + res.status);
      } else {
        alert("Not success\n" + res.status);
      }
    });
}
