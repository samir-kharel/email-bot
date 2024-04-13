function sendMail() {
  let params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_hpy9phb", "template_9qdwkod", params)
    .then(function (res) {
      if (res.status == 200 || res.status == "OK") {
        console.log("Successfully sent email!" + res.status);
        console.log(params);
      } else {
        console.log("Not success :(" + res.status);
        console.log(params);
      }
    });
}
