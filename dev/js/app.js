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

    // get elements
    const userEmail = document.getElementById('userEmail');
    const userPass = document.getElementById('userPass');
    const btnLogin = document.getElementById('btnLogin');

    // start login event
    btnLogin.addEventListener('click', e => {
        const email = userEmail.value;
        const pass = userPass.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    firebase.auth().onAuthStateChanged( firebaseUser => {
        if(firebaseUser) {
            window.location = 'quest.html';
        } else {
            //window.location = 'error.html';
        }
    });

} ());

// btnLogin