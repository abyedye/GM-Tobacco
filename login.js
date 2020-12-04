

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



const auth = firebase.auth();

function signUp() {
    console.log("signup");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email, password);
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => alert(e.message));

    alert("Signed Up");
}
function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => alert(e.message));
    alert("Signed In " + email);
    
}
firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location = 'index.html'; //After successful login, user will be redirected to home.html
  }
});

function signOut() {
    auth.signOut();
    alert("Signed Out")
}



//auth.onAuthStateChanged(function (user){
//    if (user) {
//        var email = user.email;
//        alert("Active User" + email);
//        //is signed in
//    }
//    else {
//        alert("No Active User");
//        //no user is signed in
//    }
//});