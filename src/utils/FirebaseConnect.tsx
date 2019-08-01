import * as firebase from 'firebase/app';
require('firebase/database');

let db;

export default {
  init: () => {
    const config = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: 'hafizhnotes.firebaseapp.com',
      databaseURL: 'https://hafizhnotes.firebaseio.com',
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    db = firebase.database();
    return db;
  },
  getDb: () => {
    return db;
  },
};
