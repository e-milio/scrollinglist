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

    var database = firebase.database();
    var credits = database.ref('credits');

    var nameField = document.getElementById('title');
    var creditField = document.getElementById('name');
    var button = document.getElementById('SendToFirebase');

    firebase.auth().onAuthStateChanged( firebaseUser => {
        if(firebaseUser) {
            console.log("user is auth");
            var myInputs = $('.form textarea');
            $(myInputs).on('input', function () {
                $('#SendToFirebase').prop("disabled", false);
            });

            button.addEventListener('click', submitCredit);

            function submitCredit() {
                if( $(myInputs).has("class", "filled") ) {
                    var name = nameField.value;
                    var title = creditField.value;
                    var obj = {
                        'name'    : name,
                        'title'   : title
                    };
                    credits.push(obj);
                    $('#success').addClass("in");
                    $('.form button').addClass("hide");

                    setTimeout(function() {
                        $('#success').removeClass("in");
                        $('.form button').removeClass("hide");
                        location.reload();
                    }, 4000);
                }
            }
        } else {
            console.log("user is not auth");
            window.location = '../index.html';
        }
    });
} ());