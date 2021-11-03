import mailchimpFactory from "@mailchimp/mailchimp_transactional";
//const mailchimpFactory = require("@mailchimp/mailchimp_transactional");
const mailchimp = mailchimpFactory("JfphREqqlFD4vbjGdjO6xw");


const sendDiscountEmail = async (email) => {
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
                email: email,
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

sendDiscountEmail(user.email);