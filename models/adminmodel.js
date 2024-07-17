// models/adminModel.js
const { db } = require('../firebase');

const Admin = {
  getByUsername: async (username) => {
    const adminSnapshot = await db.collection('admins').where('username', '==', username).get();
    if (adminSnapshot.empty) return null;
    return adminSnapshot.docs[0].data();
  },
  create: async (username, password) => {
    const newAdminRef = db.collection('admins').doc();
    await newAdminRef.set({ username, password });
    return { id: newAdminRef.id, username };
  }
};

module.exports = Admin;
