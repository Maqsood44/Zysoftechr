const admin = require('firebase-admin');

const serviceAccount = require("../../zysofttech-firebase-adminsdk-27qw4-e4dd7aeb12.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://zysofttech-default-rtdb.firebaseio.com',
});