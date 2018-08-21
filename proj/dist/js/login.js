(function(){
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyCYhRCoL69Fq5lqldWDQoJhgLbB0Y1b3fw",
        authDomain: "scrolling-list.firebaseapp.com",
        databaseURL: "https://scrolling-list.firebaseio.com",
        projectId: "scrolling-list",
        storageBucket: "scrolling-list.appspot.com",
        messagingSenderId: "765420066698"
    };
    firebase.initializeApp(config);

    // elements
    const txtEmail = document.getElementById('userEmail');
    const txtPass = document.getElementById('userPass');
    const signIn = document.getElementById('signIn');

    signIn.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPass.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    firebase.auth().onAuthStateChanged( firebaseUser => {
       if(firebaseUser) {
           window.location = 'quest.html';
       }
    });
} ());

// btnLogin