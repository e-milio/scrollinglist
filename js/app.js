(function() {
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
    var credits = database.ref("credits");

    var nameField = document.getElementById("title");
    var creditField = document.getElementById("name");
    var button = document.getElementById("SendToFirebase");

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log("user is auth");
            var stepUnoI = $(".step_uno textarea");
            var stepUnoD = $(".step_dos textarea");
            var myInputs = $("#auth");

            $(stepUnoI).on("input", function() {
                $("#step_uno").prop("disabled", false);
            });
            $(stepUnoD).on("input", function() {
                $("#step_dos").prop("disabled", false);
            });
            $(myInputs).on("click", function() {
                if ($(this).is(":checked")) {
                    $("#SendToFirebase").prop("disabled", false);
                } else {
                    $("#SendToFirebase").prop("disabled", true);
                }
            });

            $(".trigger").on("click", function() {
                $(this).toggleClass("active_res");
                $(".side").toggleClass("active");
            });

            $("#step_uno").on("click", function() {
                $("html, body").animate({
                        scrollTop: $(".this_quest").offset().top
                    },
                    250
                );
                $(".step_uno").removeClass("active");
                $(".step_uno").addClass("actived");
                $(".step_tres").removeClass("active");
                $(".step_dos").addClass("active");
            });
            $("#step_dos").on("click", function() {
                var getTitle = $("#title").val();
                var getName = $("#name").val();

                $(".step_dos").removeClass("active");
                $(".step_dos").addClass("actived");
                $(".step_uno").removeClass("active");
                $(".step_tres").addClass("active");

                $("#give_me_title").text(getTitle);
                $("#give_me_name").text(getName);
            });
            $("#goto_uno").on("click", function() {
                $(".step_dos").removeClass("active");
                $(".step_uno").removeClass("actived");
                $(".step_uno").addClass("active");
            });
            $("#goto_dos").on("click", function() {
                $(".step_tres").removeClass("active");
                $(".step_dos").removeClass("actived");
                $(".step_dos").addClass("active");
            });

            button.addEventListener("click", submitCredit);

            function submitCredit() {
                var name = nameField.value;
                var title = creditField.value;
                var obj = {
                    name: name,
                    title: title
                };
                credits.push(obj);
                $("#success").addClass("in");
                $(".form button").addClass("hide");

                var data = {
                    uname: $("#uname").val(),
                    uemail: $("#uemail").val(),
                    title: $("#title").val(),
                    name: $("#name").val()
                };
                $.ajax({
                    type: "POST",
                    url: "../php/mailer.php",
                    data: data,
                    success: function() {
                        console.log("email enviado");
                    }
                });

                setTimeout(function() {
                    $("#success").removeClass("in");
                    $(".form button").removeClass("hide");
                    //location.reload();
                }, 4000);
            }
        } else {
            console.log("user is not auth");
            window.location = "../index.html";
        }
    });
})();