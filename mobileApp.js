var data;
fetch("https://api.myjson.com/bins/18u6wk", {

    method: "GET",

}).then(function (response) {

    if (response.ok) {

        return response.json();
    }

    throw new Error(response.statusText);
}).then(function (JSON) {

    data = JSON;

    app.nextMatches = data.nextmatches;

    app.previousMatches = data.previousmatches;
    console.log(app.previousMatches);

    app.news = data.news;
    console.log(app.news);

    app.lifestyle = data.lifestyle;
    console.log(app.lifestyle);

    app.teams = data.teams;
    console.log(app.teams);


    app.jornadaFind();
    app.lastJornada();


}).catch(function (error) {

    console.log("Request failed: " + error.message);



});

var app = new Vue({

    el: "#appMobile",
    data: {

        nextMatches: [],
        jornadaNext: [],
        jornadaUnica: [],
        previousMatches: [],
        lastgames: [],
        lastMatches: [],
        news: [],
        teams: [],
        team: {},
        menudropdown: "",
        page: {},
        players: [],
        localTeam: "",
        oppTeam: "",
        matchLocation: "",
        localPlayers: [],
        oppPlayers: [],
        selectedTeam: "",
        lifestyle: {},
        stadium: {},
        lg: "",
        section1: true,
        section2: false,
        section25: false,
        section26: false,
        section27: false,
        section3: false,
        section4: false

    },
    methods: {

        jornadaFind: function () {

            for (var i = 0; i < this.nextMatches.length; i++) {
                var jornada = this.nextMatches[i].jornada;
                if (!this.jornadaNext.includes(jornada)) {

                    this.jornadaNext.push(jornada);
                }

            }

        },

        uniqueJornada: function (divide) {
            this.jornadaUnica = [];
            console.log("OK")
            for (var i = 0; i < this.nextMatches.length; i++) {
                console.log(this.nextMatches[i].jornada);

                if (divide == this.nextMatches[i].jornada) {
                    console.log(app.nextMatches[i].jornada);
                    app.jornadaUnica.push(app.nextMatches[i]);
                }

                console.log(app.jornadaUnica);
            }


        },

        lastJornada: function () {

            for (var i = 0; i < this.previousMatches.length; i++) {

                var journey = this.previousMatches[i].jornada;
                if (!this.lastgames.includes(journey)) {
                    this.lastgames.push(journey);
                }
            }

            console.log(this.lastgames);
        },

        matchesLately: function (clasified) {
            this.lastMatches = [];
            for (var i = 0; i < this.previousMatches.length; i++) {

                if (clasified == this.previousMatches[i].jornada) {
                    this.lastMatches.push(this.previousMatches[i]);
                }
                console.log(this.lastMatches);
            }

        },
        eachTeam: function (teamName) {

            console.log(teamName);
            this.team = teamName;
            console.log(this.team);
        },

        showSection1: function (section1, section2, section25, section26, section27, section3, section4) {
            this.section1 = true;
            this.section2 = false;
            this.section25 = false;
            this.section26 = false;
            this.section27 = false;
            this.section3 = false;
            this.section4 = false;
        },

            /*if (this.section1 == true) {
                this.section1 = true;
                this.section2 = false;
                this.section25 = false;
                this.section26 = false;
                this.section27 = false;
                this.section3 = false;
                this.section4 = false;
            } else if (this.section2 = true) {

                this.section1 = false;
                this.section2 = true;
                this.section25 = false;
                this.section26 = false;
                this.section27 = false;
                this.section3 = false;
                this.section4 = false;

            } else if (this.section25 = true) {
                this.section1 = false;
                this.section2 = false;
                this.section25 = true;
                this.section26 = false;
                this.section27 = false;
                this.section3 = false;
                this.section4 = false;
            } else if (this.section26 = true) {
                this.section1 = false;
                this.section2 = false;
                this.section25 = false;
                this.section26 = true;
                this.section27 = false;
                this.section3 = false;
                this.section4 = false;
            } else if (this.section27 = true) {
                this.section1 = false;
                this.section2 = false;
                this.section25 = false;
                this.section26 = false;
                this.section27 = true;
                this.section3 = false;
                this.section4 = false;
            } else if (this.section3 = true) {
                this.section1 = false;
                this.section2 = false;
                this.section25 = false;
                this.section26 = false;
                this.section27 = false;
                this.section3 = true;
                this.section4 = false;
            } else if (this.section4 = true) {
                this.section1 = false;
                this.section2 = false;
                this.section25 = false;
                this.section26 = false;
                this.section27 = false;
                this.section3 = false;
                this.section4 = true;

            }

        },*/
       showSection2: function () {
             this.section1 = false;
             this.section2 = true;
             this.section25 = false;
             this.section26 = false;
             this.section27 = false;
             this.section3 = false;
             this.section4 = false;

         },
         showSection25: function () {
             this.section1 = false;
             this.section2 = false;
             this.section25 = true;
             this.section26 = false;
             this.section27 = false;
             this.section3 = false;
             this.section4 = false;

         },
         showSection26: function () {
             this.section1 = false;
             this.section2 = false;
             this.section25 = false;
             this.section26 = true;
             this.section27 = false;
             this.section3 = false;
             this.section4 = false;

         },
         showSection27: function () {
             this.section1 = false;
             this.section2 = false;
             this.section25 = false;
             this.section26 = false;
             this.section27 = true;
             this.section3 = false;
             this.section4 = false;

         },

         showSection3: function () {
             this.section1 = false;
             this.section2 = false;
             this.section25 = false;
             this.section26 = false;
             this.section27 = false;
             this.section3 = true;
             this.section4 = false;

         },
         showSection4: function () {
             this.section1 = false;
             this.section2 = false;
             this.section25 = false;
             this.section26 = false;
             this.section27 = false;
             this.section3 = false;
             this.section4 = true;
         },
        displayTeam: function (match) {
            console.log("displayTeam ok");
            console.log(match);

            var localTeamName = match.Team1;
            var oppTeamName = match.Team2;

            this.localTeam;
            this.oppTeam;

            for (i = 0; i < this.teams.length; i++) {
                if (this.teams[i].name == localTeamName) {
                    console.log("local:", this.teams[i]);
                    this.localTeam = this.teams[i];
                }
                if (this.teams[i].name == oppTeamName) {
                    console.log("visitante:", this.teams[i]);
                    this.oppTeam = this.teams[i];
                }
            }
            var matchLocation = this.localTeam.location;
            this.localPlayers = this.localTeam.players;
            console.log(this.localPlayers);

            this.oppPlayers = this.oppTeam.players;
            console.log(this.oppPlayers);
        }

    }
});



document.getElementById("login").addEventListener("click", login);
document.getElementById("create-post").addEventListener("click", writeNewPost);


getPosts();

function login() {

    // https://firebase.google.com/docs/auth/web/google-signin

    // Provider
    var provider = new firebase.auth.GoogleAuthProvider();

    // How to Log In
    firebase.auth().signInWithPopup(provider).then(function(){
        document.getElementById("login").style.display="none";
    })

    console.log("login");

}


function writeNewPost() {

    // https://firebase.google.com/docs/database/web/read-and-write

    // Values
    var text = document.getElementById("textInput").value;
    console.log(text);

    var name = firebase.auth().currentUser.displayName;
    console.log(name);

    var message = {
        mensaje: text,
        user: name
    }

    firebase.database().ref("MyChat").push(message);
    console.log(message);

    // A post entry.

    //Write data
    if(!name){
    alert(document.getElementById("wrongId").style.display = "Sorry yoy have to Sign In");
    }

}


function getPosts() {

    // https://firebase.google.com/docs/database/web/read-and-write


    console.log("getting posts");


    firebase.database().ref("MyChat").on("value", function (data) {
        console.log(data.val());

        var mensajes = data.val();

        document.getElementById("posts").innerHTML = "";
        for (key in mensajes) {

            var everyMessage = mensajes[key];


            var p = document.createElement("p");
            p.append(everyMessage.mensaje)
            document.getElementById("posts").append(p)
        }

    })

}
