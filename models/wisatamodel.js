// models/wisataModel.js
const { db } = require('../firebase');

const Wisata = {
  getAll: async () => {
    const wisataSnapshot = await db.collection('wisata').get();
    return wisataSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  create: async (data) => {
    const res = await db.collection('wisata').add(data);
    return { id: res.id, ...data };
  },
  update: async (id, data) => {
    await db.collection('wisata').doc(id).update(data);
    return { id, ...data };
  },
  delete: async (id) => {
    await db.collection('wisata').doc(id).delete();
  }
};

module.exports = Wisata;
