const firebaseConfig = {
  apiKey: "AIzaSyBiQHpYmz1xycfPcV87AGAXo3_aLWOG0_M",
  authDomain: "redsocial-ce9b2.firebaseapp.com",
  databaseURL: "https://redsocial-ce9b2-default-rtdb.firebaseio.com",
  projectId: "redsocial-ce9b2",
  storageBucket: "redsocial-ce9b2.appspot.com",
  messagingSenderId: "542909026273",
  appId: "1:542909026273:web:ee3832852f07abb0658ca0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// AÑADE LOS ENLACES FIREBASE

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


