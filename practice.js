
//ADD YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBmMJl74J5kAMRGjZbpAJS0S-BsLe3fblg",
    authDomain: "kwitter-236b7.firebaseapp.com",
    databaseURL: "https://kwitter-236b7-default-rtdb.firebaseio.com",
    projectId: "kwitter-236b7",
    storageBucket: "kwitter-236b7.appspot.com",
    messagingSenderId: "714592799015",
    appId: "1:714592799015:web:3ce47c67fd8d2442390102"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding User"
      });
  } 