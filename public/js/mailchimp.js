const mailchimpFactory = require("../../functions/node_modules/@mailchimp/mailchimp_transactional/src/index.js");
const mailchimp = mailchimpFactory("JfphREqqlFD4vbjGdjO6xw");

/** 
const message = {
    from_email: "no-reply@speedlinewash.com",
    subject: "Hello world",
    text: "Welcome to Mailchimp Transactional!",
    to: [
      {
        email: "blankinship2002@gmail.com",
        type: "to"
      }
    ]
  };
  
  async function run() {
    const response = await mailchimp.messages.send({
      message
    });
    console.log(response);
  }
  run();
*/

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
                email: "blankinship2002@gmail.com",
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

