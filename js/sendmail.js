document.getElementById("modalform").addEventListener("submit", (e) => {
  e.preventDefault();
  const imgatt = document.getElementById("modalimgchange").getAttribute("src");
  const username = document.getElementById("username").value;
  const phone = document.getElementById("phonenum").value;
  const body = `<html><h2 style='color:red'>ALERT</h2><strong>Mr: ${username} , Phone Number : ${phone} <br> ask about that iteam</strong><br></html>`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mohiefineartcompany@gmail.com",
    Password: "1D5B9B8351314E69BDCD92389599CAB54073",
    To: "fineart@mohiefineartco.com",
    From: "mohiefineartcompany@gmail.com",
    Subject: "MohieFineArtco",
    Body: body,
    Attachments: [
      {
        name: "iteam.png",
        path: "https://mohiefineartco.com/" + imgatt,
      },
    ],
  });
  document.getElementById("closebtn").click();
});

// function sendEmail(mod_id, name_id, num_id) {
//   const imgatt = document.getElementById(mod_id).getAttribute("src");
//   const username = document.getElementById(name_id).value;
//   const phone = document.getElementById(num_id).value;
//   const body = `<html><h2 style='color:red'>ALERT</h2><strong>Mr: ${username} , Phone Number : ${phone} <br> ask about that iteam</strong><br></html>`;
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "mohiefineartcompany@gmail.com",
//     Password: "1D5B9B8351314E69BDCD92389599CAB54073",
//     To: "fineart@mohiefineartco.com",
//     From: "mohiefineartcompany@gmail.com",
//     Subject: "MohieFineArtco",
//     Body: body,
//     Attachments: [
//       {
//         name: "iteam.png",
//         path: "https://mohiefineartco.com/" + imgatt,
//       },
//     ],
//   });
// }
