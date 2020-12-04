  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBBc3wfWpesD1CGVHE3v52KPAnuxrcKLXg",
    authDomain: "gm-tobacco-a8b3a.firebaseapp.com",
    databaseURL: "https://gm-tobacco-a8b3a.firebaseio.com",
    projectId: "gm-tobacco-a8b3a",
    storageBucket: "gm-tobacco-a8b3a.appspot.com",
    messagingSenderId: "591803863504",
    appId: "1:591803863504:web:dcc9f25c81a2a392c0a9d5",
    measurementId: "G-8D85F3LJWE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


var rootref = firebase.database().ref().child("Images");
rootref.on("child_added", snap => {
    var image = snap.child("img").val();
    $("#gallery_div").append("<img src =" + image + "></img>");
});