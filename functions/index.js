const functions = require("firebase-functions");
/**
const mailchimpFactory = require("@mailchimp/mailchimp_transactional");
const mailchimp = mailchimpFactory("JfphREqqlFD4vbjGdjO6xw");
**/
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


//http callable function
exports.sendDiscount = functions.https.onCall((data, context) => {
  const sendDiscountEmail = async () => {
    const response = await mailchimp.messages.sendTemplate({
      template_name: "discount",
      template_content: [{
          "name": "main",
          "content": Math.floor(100000 + Math.random() * 900000)
      }],
      message: {
          subject: "Your $5 Speedline Coupon Is Here!",
          text: "Keep this email handy! Offer expires Nov 14th.",
          from_email: "no-reply@speedlinewash.com",
          from_name: "Speedline",
          to: [
              {
                  email: data.email,
                  type: "to"
              }
          ],
          important: true,
          track_opens: true,
          track_clicks: true
      },
    });
    console.log(response);
  };
});
