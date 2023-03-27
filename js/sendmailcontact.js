document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("conName").value;
  const mail = document.getElementById("conEmail").value;
  const subject = document.getElementById("conSubject").value;
  const message = document.getElementById("conMessage").value;
  const body = `<html><h2 style='color:red'>Contact</h2><strong>Mr: ${username} , Email : ${mail} <br> send that message : <br> ${message} </strong><br></html>`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mohiefineartcompany@gmail.com",
    Password: "1D5B9B8351314E69BDCD92389599CAB54073",
    To: "fineart@mohiefineartco.com",
    From: "mohiefineartcompany@gmail.com",
    Subject: subject,
    Body: body,
  });
  document.getElementById("senttext").innerText =
    "Message was sent successfully.";
  document.getElementById("conName").value = "";
  document.getElementById("conEmail").value = "";
  document.getElementById("conSubject").value = "";
  document.getElementById("conMessage").value = "";
});
