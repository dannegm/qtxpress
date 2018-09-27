const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendEmail = functions.https.onCall ((data, context) => {
    const mailgun = require ('mailgun-js') ({
        apiKey: functions.config().mailgun.api_key,
        domain: functions.config().mailgun.domain
    });
    return mailgun.messages ().send (data);
});