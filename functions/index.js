require("dotenv").config();
const functions = require("firebase-functions");
const admin = require("firebase-admin"); // para insertar en la DB

admin.initializeApp();

/**Starts email senders */

const nodemailer = require("nodemailer");
// const smtpTransport = require('nodemailer-smtp-transport');

let alternativeMail = process.env.ALTERNATIVE_EMAIL;

var transporter = nodemailer.createTransport({
  // host: "smtp.gmail.com",
  host: process.env.HOST,
  // port: 465,
  port: process.env.PORT,
  secure: true,
  // secure: false,
  auth: {

    user: process.env.EMAIL_ADMIN,
    pass: process.env.PASSWORD,
  },
});

exports.sendEmailEa = functions.firestore
  .document("Electric_Actuator/{Electric_ActuatorId}")
  .onCreate((snap, context) => {
    console.log('Function was trigered')
    const mailOptions = {
      from: `vsi-project.firebaseapp.com`,
      to: `${snap.data().Contact_Email}, ${alternativeMail}`,
      subject: `Hello from Valve Solutions Inc.`,
      html: `
      <body style="font-family:sans-serif;">
      <div style="
      width: 100%;
      heigth:100%;
      background-color:#a9a9a9;
      position: absolute;
      text-align: center;">
      <h1 style="color:green;
      ">Retrofit Form Request</h1>
        <h2 style="
            font-size:20pt;">Hello "${snap.data().Contact_Name
        }" We received your Retrofit form request </h2><br>
      <img style="
            width:400px;
            height:300px;" src="https://static.wixstatic.com/media/69f70f_27d1b55cde814d3daf8d8ac641fcfe01~mv2.png" alt="VSI">
        <h3 style="
            font-size:18pt;">
          Here is some information you provied us
        </h3>
        <section>
          <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;margin:0px auto;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-02se{font-weight:bold;font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif !important;;background-color:#cbcefb;text-align:center;vertical-align:top}
.tg .tg-xcnk{font-weight:bold;font-size:18px;font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif !important;;background-color:#96fffb;text-align:center;vertical-align:top}
.tg .tg-fzpw{font-weight:bold;font-size:18px;font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif !important;;background-color:#cbcefb;text-align:center;vertical-align:top}
.tg .tg-qmta{font-weight:bold;font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif !important;;background-color:#96fffb;text-align:center;vertical-align:top}
@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;margin: auto 0px;}}</style>
<div class="tg-wrap"><table class="tg">
  <tr>
    <th class="tg-fzpw">Company</th>
    <th class="tg-xcnk">${snap.data().Company_Name}</th>
  </tr>
  <tr>
    <td class="tg-fzpw">Contact</td>
    <td class="tg-xcnk">${snap.data().Contact_Name}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Email</td>
    <td class="tg-xcnk">${snap.data().Contact_Email}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Phone number</td>
    <td class="tg-xcnk">${snap.data().Phone_Contact}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Valve size</td>
    <td class="tg-xcnk">${snap.data().Valve_Size}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Valve Brand</td>
    <td class="tg-xcnk">${snap.data().Brand}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Valve Series</td>
    <td class="tg-xcnk">${snap.data().Series}</td>
  </tr>
  <tr>
    <td class="tg-02se">Valve Type</td>
    <td class="tg-qmta">${snap.data().Valve_Type}</td>
  </tr>
  <tr>
    <td class="tg-02se">Actuator Type</td>
    <td class="tg-qmta">${snap.data().Actuator_Type}</td>
  </tr>
  <tr>
    <td class="tg-02se"> Type Electric Actuator</td>
    <td class="tg-qmta">${snap.data().Electric_Actuator}</td>
  </tr>
  <tr>
    <td class="tg-02se">Brand</td>
    <td class="tg-qmta">${snap.data().Brand_Electric_Actuator}</td>
  </tr>
  <tr>
    <td class="tg-02se">Model</td>
    <td class="tg-qmta">${snap.data().Model_Electric_Actuator}</td>
  </tr>
</table></div>
        </section>
      <p> We'll keep in touch </p><br><br>
         <a target="_blank" href="https://valvesolutions.com/">

                <button style="
                background-color:4CAF50;
                color: white;
                text-align:center;
                display: inline-block;
                font-size: 12px;
                padding:12px 28px;
                "><strong>Check us out!!</strong></button>
            </a>
      </div>
      </body>
            `,
    };
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Sent!");
    });
    //});
  });

exports.sendEmailHp = functions.firestore
  .document("HP_Pneumatic/{HP_PneumaticId}")
  .onCreate((snap, context) => {
    const mailOptions = {
      from: `noreply@vsi-project.firebaseapp.com`,
      to: `${snap.data().Contact_Email}, ${alternativeMail}`,
      subject: `Hello from Valve Solutions Inc.`,
      html: `
      <body style="font-family:sans-serif;">
      <div style="
      width: 100%;
      heigth:100%;
      background-color:#a9a9a9;
      position: absolute;
      text-align: center;">
      <h1 style="color:green;
      ">Retrofit Form Request</h1>
        <h2 style="
            font-size:20pt;">Hello "${snap.data().Contact_Name
        }" We received your Retrofit form request </h2><br>
      <img style="
            width:400px;
            height:300px;" src="https://static.wixstatic.com/media/69f70f_27d1b55cde814d3daf8d8ac641fcfe01~mv2.png" alt="VSI">
        <h3 style="
            font-size:18pt;">
          Here is some information you provied us
        </h3>
        <section>
          <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;margin:0px auto;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-02se{font-weight:bold;font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif !important;;background-color:#cbcefb;text-align:center;vertical-align:top}
.tg .tg-xcnk{font-weight:bold;font-size:18px;font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif !important;;background-color:#96fffb;text-align:center;vertical-align:top}
.tg .tg-fzpw{font-weight:bold;font-size:18px;font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif !important;;background-color:#cbcefb;text-align:center;vertical-align:top}
.tg .tg-qmta{font-weight:bold;font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif !important;;background-color:#96fffb;text-align:center;vertical-align:top}
@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;margin: auto 0px;}}</style>
<div class="tg-wrap"><table class="tg">
  <tr>
    <th class="tg-fzpw">Company</th>
    <th class="tg-xcnk">${snap.data().Company_Name}</th>
  </tr>
  <tr>
    <td class="tg-fzpw">Contact</td>
    <td class="tg-xcnk">${snap.data().Contact_Name}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Email</td>
    <td class="tg-xcnk">${snap.data().Contact_Email}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Phone number</td>
    <td class="tg-xcnk">${snap.data().Phone_Contact}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Valve size</td>
    <td class="tg-xcnk">${snap.data().Valve_Size}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Valve Brand</td>
    <td class="tg-xcnk">${snap.data().Brand}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Valve Series</td>
    <td class="tg-xcnk">${snap.data().Series}</td>
  </tr>
  <tr>
    <td class="tg-02se">Valve Type</td>
    <td class="tg-qmta">${snap.data().Valve_Type}</td>
  </tr>
  <tr>
    <td class="tg-02se">Actuator Type</td>
    <td class="tg-qmta">${snap.data().Actuator_Type}</td>
  </tr>
  <tr>
    <td class="tg-02se"> Actuator Mode</td>
    <td class="tg-qmta">${snap.data().Actuator_Mode}</td>
  </tr>
  <tr>
    <td class="tg-02se">Brand</td>
    <td class="tg-qmta">${snap.data().Brand_Actuator_HP}</td>
  </tr>
  <tr>
    <td class="tg-02se">Model</td>
    <td class="tg-qmta">${snap.data().Model_Actuator_HP}</td>
  </tr>
</table></div>
        </section>
      <p> We'll keep in touch </p><br><br>
         <a target="_blank" href="https://valvesolutions.com/">

                <button style="
                background-color:4CAF50;
                color: white;
                text-align:center;
                display: inline-block;
                font-size: 12px;
                padding:12px 28px;
                "><strong>Check us out!!</strong></button>
            </a>
      </div>
      </body>
            `,
    };
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Sent!");
    });
  });

exports.sendEmailLp = functions.firestore
  .document("LowP_Pneumatic/{LowP_PneumaticId}")
  .onCreate((snap, context) => {
    const mailOptions = {
      from: `noreply@vsi-project.firebaseapp.com`,
      to: `${snap.data().Contact_Email}, ${alternativeMail}`,
      subject: `Hello from Valve Solutions Inc.`,
      html: `
      <body style="font-family:sans-serif;">
      <div style="
      width: 100%;
      heigth:100%;
      background-color:#a9a9a9;
      position: absolute;
      text-align: center;">
      <h1 style="color:green;
      ">Retrofit Form Request</h1>
        <h2 style="
            font-size:20pt;">Hello "${snap.data().Contact_Name
        }" We received your Retrofit form request </h2><br>
      <img style="
            width:400px;
            height:300px;" src="https://static.wixstatic.com/media/69f70f_27d1b55cde814d3daf8d8ac641fcfe01~mv2.png" alt="VSI">
        <h3 style="
            font-size:18pt;">
          Here is some information you provied us
        </h3>
        <section style="
        justify-content:center;
        ">
          <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;margin:0px auto;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-02se{font-weight:bold;font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif !important;;background-color:#cbcefb;text-align:center;vertical-align:top}
.tg .tg-xcnk{font-weight:bold;font-size:18px;font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif !important;;background-color:#96fffb;text-align:center;vertical-align:top}
.tg .tg-fzpw{font-weight:bold;font-size:18px;font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif !important;;background-color:#cbcefb;text-align:center;vertical-align:top}
.tg .tg-qmta{font-weight:bold;font-family:"Lucida Sans Unicode", "Lucida Grande", sans

-serif !important;;background-color:#96fffb;text-align:center;vertical-align:top}
@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;margin: auto 0px;}}</style>
<div class="tg-wrap"><table class="tg" style="border="1" style="margin: 0 auto;">
  <tr>
    <th class="tg-fzpw">Company</th>
    <th class="tg-xcnk">${snap.data().Company_Name}</th>
  </tr>
  <tr>
    <td class="tg-fzpw">Contact</td>
    <td class="tg-xcnk">${snap.data().Contact_Name}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Email</td>
    <td class="tg-xcnk">${snap.data().Contact_Email}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Phone number</td>
    <td class="tg-xcnk">${snap.data().Phone_Contact}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Valve size</td>
    <td class="tg-xcnk">${snap.data().Valve_Size}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Valve Brand</td>
    <td class="tg-xcnk">${snap.data().Brand}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Valve Series</td>
    <td class="tg-xcnk">${snap.data().Series}</td>
  </tr>
  <tr>
    <td class="tg-02se">Valve Type</td>
    <td class="tg-qmta">${snap.data().Valve_Type}</td>
  </tr>
  <tr>
    <td class="tg-02se">Actuator Type</td>
    <td class="tg-qmta">${snap.data().Actuator_Type}</td>
  </tr>
  <tr>
    <td class="tg-02se"> Actuator Mode</td>
    <td class="tg-qmta">${snap.data().Actuator_Mode}</td>
  </tr>
  <tr>
    <td class="tg-02se">Brand</td>
    <td class="tg-qmta">${snap.data().Brand_Actuator_LP}</td>
  </tr>
  <tr>
    <td class="tg-02se">Model</td>
    <td class="tg-qmta">${snap.data().Model_Actuator_LP}</td>
  </tr>
</table></div>
        </section>
      <p> We'll keep in touch </p><br><br>
         <a target="_blank" href="https://valvesolutions.com/">

                <button style="
                background-color:4CAF50;
                color: white;
                text-align:center;
                display: inline-block;
                font-size: 12px;
                padding:12px 28px;
                "><strong>Check us out!!</strong></button>
            </a>
      </div>
      </body>
            `,
    };
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Sent!");
    });
  });

exports.sendEmail3Way = functions.firestore
  .document("3_Way/{3_WayId}")
  .onCreate((snap, context) => {
    const mailOptions = {
      from: `noreply@vsi-project.firebaseapp.com`,
      to: `${snap.data().Contact_Email}, ${alternativeMail}`,
      subject: `Hello from Valve Solutions Inc.`,
      html: `
      <body style="font-family:sans-serif;">
      <div style="
      width: 100%;
      heigth:100%;
      background-color:#a9a9a9;
      position: absolute;
      text-align: center;">
      <h1 style="color:green;
      ">Retrofit Form Request</h1>
        <h2 style="
            font-size:20pt;">Hello "${snap.data().Contact_Name
        }" We received your Retrofit form request </h2><br>
      <img style="
            width:400px;
            height:300px;" src="https://static.wixstatic.com/media/69f70f_27d1b55cde814d3daf8d8ac641fcfe01~mv2.png" alt="VSI">
        <h3 style="
            font-size:18pt;">
          Here is some information you provied us
        </h3>
        <section>
          <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;margin:0px auto;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-02se{font-weight:bold;font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif !important;;background-color:#cbcefb;text-align:center;vertical-align:top}
.tg .tg-xcnk{font-weight:bold;font-size:18px;font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif !important;;background-color:#96fffb;text-align:center;vertical-align:top}
.tg .tg-fzpw{font-weight:bold;font-size:18px;font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif !important;;background-color:#cbcefb;text-align:center;vertical-align:top}
.tg .tg-qmta{font-weight:bold;font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif !important;;background-color:#96fffb;text-align:center;vertical-align:top}
@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;margin: auto 0px;}}</style>
<div class="tg-wrap"><table class="tg">
  <tr>
    <th class="tg-fzpw">Company</th>
    <th class="tg-xcnk">${snap.data().Company_Name}</th>
  </tr>
  <tr>
    <td class="tg-fzpw">Contact</td>
    <td class="tg-xcnk">${snap.data().Contact_Name}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Email</td>
    <td class="tg-xcnk">${snap.data().Contact_Email}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Phone number</td>
    <td class="tg-xcnk">${snap.data().Phone_Contact}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Valve size</td>
    <td class="tg-xcnk">${snap.data().Valve_Size}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Valve Brand</td>
    <td class="tg-xcnk">${snap.data().Brand}</td>
  </tr>
  <tr>
    <td class="tg-fzpw">Valve Series</td>
    <td class="tg-xcnk">${snap.data().Series}</td>
  </tr>
  <tr>
    <td class="tg-02se">Valve Type</td>
    <td class="tg-qmta">${snap.data().Valve_Type}</td>
  </tr>


  <tr>
    <td class="tg-02se">Arrangement Type</td>
    <td class="tg-qmta">${snap.data().Arrangement_Type}</td>
  </tr>
  <tr>
    <td class="tg-02se"> Bonnet Type</td>
    <td class="tg-qmta">${snap.data().Bonnet_Type}</td>
  </tr>
  <tr>
    <td class="tg-02se">Dimmension A</td>
    <td class="tg-qmta">${snap.data().Dimension_Bonnet_A}</td>
  </tr>
  <tr>
    <td class="tg-02se">Dimmension B</td>
    <td class="tg-qmta">${snap.data().Dimension_Bonnet_B}</td>
  </tr>
  <tr>
    <td class="tg-02se">Dimmensions C</td>
    <td class="tg-qmta">${snap.data().Dimension_Bonnet_C}</td>
  </tr>
  <tr>
    <td class="tg-02se">Type of bolt holes</td>
    <td class="tg-qmta">${snap.data().TypeOf_Bolt_Holes}</td>
  </tr>
  <tr>
    <td class="tg-02se">Hole Size</td>
    <td class="tg-qmta">${snap.data().Hole_Size}</td>
  </tr>
  <tr>
    <td class="tg-02se">Other</td>
    <td class="tg-qmta">${snap.data().Other}</td>
  </tr>
  <tr>
    <td class="tg-02se">Shaft Type</td>
    <td class="tg-qmta">${snap.data().Shaft_Type}</td>
  </tr>
  <tr>
    <td class="tg-02se">Shaft dimensions D</td>
    <td class="tg-qmta">${snap.data().Shaft_Dimensions_D}</td>
  </tr>
  <tr>
    <td class="tg-02se">Shaft dimensions E</td>
    <td class="tg-qmta">${snap.data().Shaft_Dimensions_E}</td>
  </tr>
  <tr>
    <td class="tg-02se">Shaft dimensions F</td>
    <td class="tg-qmta">${snap.data().Shaft_Dimensions_F}</td>
  </tr>
  <tr>
    <td class="tg-02se">Shaft dimensions G</td>
    <td class="tg-qmta">${snap.data().Shaft_Dimensions_G}</td>
  </tr>
  <tr>
    <td class="tg-02se">Shaft dimensions H</td>
    <td class="tg-qmta">${snap.data().Shaft_Dimensions_H}</td>
  </tr>
  <tr>
    <td class="tg-02se">Requirements 1</td>
    <td class="tg-qmta">${snap.data().Actuator_Requirements_Secc_1}</td>
  </tr>
  <tr>
    <td class="tg-02se">Requirements 2</td>
    <td class="tg-qmta">${snap.data().Actuator_Requirements_Secc_2}</td>
  </tr>
  <tr>
    <td class="tg-02se">Requirements 3</td>
    <td class="tg-qmta">${snap.data().Actuator_Requirements_Secc_3}</td>
  </tr>
  <tr>
    <td class="tg-02se">Requirements 4</td>
    <td class="tg-qmta">${snap.data().Actuator_Requirements_Secc_4}</td>
  </tr>
  <tr>
    <td class="tg-02se">Pneunamic or Electric</td>
    <td class="tg-qmta">${snap.data().Pneumatic_Or_Electric}</td>
  </tr>
  <tr>
    <td class="tg-02se">Control Signal</td>
    <td class="tg-qmta">${snap.data().Control_Signal}</td>
  </tr>
   <tr>
    <td class="tg-02se">Other</td>
    <td class="tg-qmta">${snap.data().Other2}</td>
  </tr>
   <tr>
    <td class="tg-02se">Enclosure required</td>
    <td class="tg-qmta">${snap.data().Enclosure_Required}</td>
  </tr>
</table></div>
        </section>
      <p> We'll keep in touch </p><br><br>
         <a target="_blank" href="https://valvesolutions.com/">

                <button style="
                background-color:4CAF50;
                color: white;
                text-align:center;
                display: inline-block;
                font-size: 12px;
                padding:12px 28px;
                "><strong>Check us out!!</strong></button>
            </a>
      </div>
      </body>
            `,
    };
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Sent!");
    });
  });

/**Ends email senders */

/**  Registrando a topico Electric Actuator*/
exports.registrarTopicoEA = functions.firestore
  .document("/tokens/{id}")
  .onCreate((dataSnapshot) => {
    const token = dataSnapshot.data().token;
    const registrationTokens = [token];
    console.log(`${token} ${registrationTokens}`);

    return (
      admin
        .messaging()
        .subscribeToTopic(
          // Pienso que aqu esta el problema de las notificaciones
          //
          registrationTokens,
          "Electric_Actuator",
          "HP_Pneumatic",
          "LowP_Pneumatic",
          "3_way"
        )

        // NuevosPosts es una collecion (Electric_Actuator)
        // parece que el segundo argumento no apunta a la coleccion, sino es solo un string
        .then(() => {
          return console.log("Adicinando correctamente al topico Electric");
        })
        .catch((err) => {
          console.error(`Error registrando al topico el token Electric${err}`);
        })
    );
  });
/**  /Registrando a topico Electric Actuator*/

/** Electric Actuator cloud Function*/
exports.electActuatorNotification = functions.firestore
  .document("/Electric_Actuator/{id}")
  .onCreate((dataSnapshot) => {
    const titulo = dataSnapshot.data().Company_Name;
    const descripcion = dataSnapshot.data().Contact_Email;

    const mensaje = {
      data: {
        titulo: titulo,
        descripcion: descripcion,
      },
      topic: "Electric_Actuator",
    };

    return admin
      .messaging()
      .send(mensaje)
      .then(() => {
        return console.log(
          `Mensaje enviado correctamente Electric ${mensaje.data.titulo}`
        );
      })
      .catch((err) => {
        console.error(`Error enviando mensaje Electric ${err}`);
      });
  });

/** / Electric Actuator cloud Function*/

/** High Pressure cloud Function*/
exports.highPressureNotification = functions.firestore
  .document("/HP_Pneumatic/{hpId}")
  .onCreate(async (dataSnapshot, context) => {
    const titulo = await dataSnapshot.data().Company_Name;
    const descripcion = await dataSnapshot.data().Contact_Email;

    const mensaje = {
      data: {
        titulo: titulo,
        descripcion: descripcion,
      },
      topic: context.params.hpId,
    };

    return admin
      .messaging()
      .send(mensaje)
      .then((response) => {
        return console.log(
          `Mensaje enviado correctamente HP ${mensaje.data.titulo} ${response}`
        );
      })
      .catch((err) => {
        return console.error(`Error enviando mensaje HP ${err}`);
      });
  });

/** / High Pressure cloud Function*/

/** Low Pressure cloud Function*/
exports.lowPressureNotification = functions.firestore
  .document("/LowP_Pneumatic/{id}")
  .onCreate((dataSnapshot) => {
    const titulo = dataSnapshot.data().Company_Name;
    const descripcion = dataSnapshot.data().Contact_Email;

    const mensaje = {
      data: {
        titulo: titulo,
        descripcion: descripcion,
      },
      topic: "LowP_Pneumatic",
    };

    return admin
      .messaging()
      .send(mensaje)
      .then(() => {
        return console.log(
          `Mensaje enviado correctamente LP ${mensaje.data.titulo}`
        );
      })
      .catch((err) => {
        console.error(`Error enviando mensaje LP ${err}`);
      });
  });

/** / Low Pressure cloud Function*/

/** Tree way cloud Function*/
exports.threeWayNotification = functions.firestore
  .document("/3_Way/{id}")
  .onCreate((dataSnapshot) => {
    const titulo = dataSnapshot.data().Company_Name;
    const descripcion = dataSnapshot.data().Contact_Email;

    const mensaje = {
      data: {
        titulo: titulo,
        descripcion: descripcion,
      },
      topic: "3_Way",
    };

    return admin
      .messaging()
      .send(mensaje)
      .then(() => {
        return console.log(
          `Mensaje enviado correctamente 3 Way ${mensaje.data.titulo}`
        );
      })
      .catch((err) => {
        console.error(`Error enviando mensaje 3 Way ${err}`);
      });
  });

/** / Tree way cloud Function*/
