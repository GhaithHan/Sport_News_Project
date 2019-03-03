import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD3neEqaUYNwUrbwpDYr3zK_qbkRQgIqgU",
  authDomain: "sport-news-f8ef9.firebaseapp.com",
  databaseURL: "https://sport-news-f8ef9.firebaseio.com",
  projectId: "sport-news-f8ef9",
  storageBucket: "sport-news-f8ef9.appspot.com",
  messagingSenderId: "452287875907"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
  const data = [];
      snapshot.forEach((childSnapshot) => {
        data.push({
          ...childSnapshot.val(),
          id:childSnapshot.key
        })
      });
      return data;
}




export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseTeams,
  firebaseVideos,
  firebaseLooper
}