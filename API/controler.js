const admin = require('firebase-admin');
const serviceAccount = require('.././zysofttech-firebase-adminsdk-27qw4-3bd6778e96.json'); // Replace with your own service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-firebase-project.firebaseio.com', // Replace with your Firebase project's database URL
});

const db = admin.database();
