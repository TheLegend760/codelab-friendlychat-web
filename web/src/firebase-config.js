/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBWTs8KBj0q1OmLb0-M84Ph4j5K9Zqlrog",
  authDomain: "friendlychat-2b751.firebaseapp.com",
  projectId: "friendlychat-2b751",
  storageBucket: "friendlychat-2b751.appspot.com",
  messagingSenderId: "555778393675",
  appId: "1:555778393675:web:212d88979657bec73cafce",
  measurementId: "G-E4Y5EL91F9"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
