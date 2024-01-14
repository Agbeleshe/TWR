function sendMail() {
    event.preventDefault(); // Prevents the default form submission behavior
  
    // Get the button element
    const sendButton = document.querySelector('.theme-btn');
  
    // Store the original button content
    const originalButtonText = sendButton.textContent;
  
    // Change the button content to "Loading"
    sendButton.textContent = 'Please wait, Loading...';
  
    console.log("hello world");
    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
    };
  
    emailjs
      .send("service_cvtzypq", "template_oi9a2ki", parms)
      .then(function (response) {
        console.log("Email sent successfully:", response);
        alert("Email sent successfully");
        clearForm();
  
        // Change the button content back to the original text
        sendButton.textContent = originalButtonText;
      })
      .catch(function (error) {
        console.error("Failed to send email:", error);
        alert("Ops! something went wrong!");
  
        // Change the button content back to the original text
        sendButton.textContent = originalButtonText;
      });
  }
  
  function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("subject").value = "";
  }
  