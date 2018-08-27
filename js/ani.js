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

  firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      console.log("user is auth");
      var database = firebase.database();
      var credits = database.ref('credits').orderByChild('date');
      var creditList = document.getElementById('credits');

      credits.on('child_added', function (snapshot) {
        addCredit(snapshot.val());
      });

      function init(data) {
        for (var key in data) {
          addCredit(data[key]);
        }
      }

      function addCredit(data) {
        var article = document.createElement('p');
        article.className=".p";
        var name = document.createElement('strong');
        name.innerHTML = data.name;
        article.appendChild(name);
        if (data.title) {
            var title = document.createElement('em');
            title.innerHTML = data.title;
            article.appendChild(title);
        }
        creditList.appendChild(article);
      }

      $('.playit').on("click", function () {
        $(this).addClass("hide");
        $('.credits').addClass("playme");
        console.log( $('.credits').height() );
        var wiHeight = $('.wrapper').height();
        var myHeight = $('.credits').height();
        TweenLite.defaultEase = Power0.easeNone;
        TweenMax.fromTo(".credits", 220, {top: wiHeight}, {
          top: -myHeight,
          ease: Power0.easeNone,
          repeat: -1,
          repeatDelay: 0
        })
      });
    } else {
      console.log("user is not auth");
      window.location = 'index.html';
    }
  });
} ());