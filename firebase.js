// firebase.js
var admin = require('firebase-admin');
require('dotenv').config(); // Ensure environment variables are loaded

const {
  TYPE,
  PROJECT_ID,
  PRIVATE_KEY_ID,
  PRIVATE_KEY,
  CLIENT_EMAIL,
  CLIENT_ID,
  AUTH_URI,
  TOKEN_URI,
  AUTH_PROVIDER_X509_CERT_URL,
  CLIENT_X509_CERT_URL,
  DATABASE_URL
} = process.env;

// Check for missing environment variables and provide default values or throw an error
if (!TYPE || !PROJECT_ID || !PRIVATE_KEY_ID || !PRIVATE_KEY || !CLIENT_EMAIL || !CLIENT_ID || !AUTH_URI || !TOKEN_URI || !AUTH_PROVIDER_X509_CERT_URL || !CLIENT_X509_CERT_URL || !DATABASE_URL) {
  throw new Error('Missing environment variables');
}

admin.initializeApp({
  credential: admin.credential.cert({
    type: TYPE,
    project_id: PROJECT_ID,
    private_key_id: PRIVATE_KEY_ID,
    private_key: PRIVATE_KEY.replace(/\\n/g, '\n'), // Handle escaped newlines in private key
    client_email: CLIENT_EMAIL,
    client_id: CLIENT_ID,
    auth_uri: AUTH_URI,
    token_uri: TOKEN_URI,
    auth_provider_x509_cert_url: AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: CLIENT_X509_CERT_URL
  }),
  databaseURL: DATABASE_URL
});

var db = admin.firestore();
module.exports =  { 
    db,
    admin,
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    jwtExpiresIn: '1h'
} ;
