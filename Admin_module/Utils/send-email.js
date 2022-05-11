const CLIENT_ID = "6876092288-5sk00vlfkvshqh7hvjr5af568j0klsv3.apps.googleusercontent.com"
const CLEINT_SECRET = "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"
const REDIRECT_URI = "https://developers.google.com/oauthplayground"
const REFRESH_TOKEN = "1//04-RNKjTnims3CgYIARAAGAQSNwF-L9Ir4dVPXfoRqatn93bghpNyKMYniOa7MAwg4SfebHC9r_3ZZFa_RL-93riW02-bngfI-ck"

const nodemailer = require('nodemailer');

const { google } = require('googleapis');

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

exports.sendemail = async (email,otp) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: "detoxify2022@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'Diet Advisor <detoxify2022@gmail.com>',
      to: email,
      subject: 'Diet Advisor App',
      html: '<table bgcolor="" border="0" cellpadding="0" cellspacing="0" width="100%">' +
      '<tbody><tr>' +
          '<td bgcolor="">' +
              '<table align="center" border="0" cellpadding="0" cellspacing="0">'+
                  '<tbody><tr>'+
                      '<td>'+
                          '<table border="0" cellpadding="0" cellspacing="0" width="100%">'+
                              '<tbody><tr>'+
                                  '<td width="100%">'+
                                      '<table border="0" cellpadding="0" cellspacing="0" style="border-bottom:4px solid #ececec;margin:auto">'+
                                          '<tbody><tr>'+
                                              '<td style="padding:20px 50px 15px">'+
                                                  '<a href="" target="_blank" data-saferedirecturl="">'+
                                                      '<img src="https://firebasestorage.googleapis.com/v0/b/seproject-3021f.appspot.com/o/diet_logo-removebg-preview.png?alt=media&token=7bfe78c2-95e2-46f1-a738-4a4fa093bf3f" width="140" style=" border-radius: 50%;" src="" alt="Our LOGO" class="CToWUd">'+
                                                  '</a>'+
                                              '</td>'+
                                         '</tr>'+
                                      '</tbody></table>'+
                                  '</td>'+
                              '</tr>'+
                          '</tbody></table>'+
                      '</td>'+
                  '</tr>'+
              '</tbody></table>'+
         ' </td>'+
      '</tr>'+
  '</tbody></table>'+
      '<table bgcolor="" border="0" cellpadding="0" cellspacing="0" width="100%">' +
      '<tbody><tr>'+
      '<td bgcolor="">'+
           ' <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:70%;text-align:left">'+
                  '<tbody><tr>'+
                 ' <td style="padding-top:20px">'+
                       ' <span style="font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;color:#000000;line-height:34px;font-weight:500;font-size:30px">Hello from <b>Detoxify</b>,</h2></span>'+
                  '</td>'+
                  '</tr>'+
                  '<tr>'+
                  '<td style="padding-top:5px;padding-bottom:20px">'+
                       ' <span style="font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:15px;color:#4a4a4a;font-weight:normal;line-height:21px">Use <h1>' + `${otp}` +'</h1>as One Time Password (<span class="il">OTP</span>) to Register into our Diet Advisory System. '+
                       'Please do not share this <span class="il">OTP</span> with anyone for security reasons.' +
      '<br><br></span>'+
                  '</td>'+
                  '</tr>'+
            '</tbody></table>'+
      '</td>'+
      '</tr>'+
      '</tbody></table>'
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

// sendMail()
//   .then((result) => console.log('Email sent...', result))
//   .catch((error) => console.log(error.message));