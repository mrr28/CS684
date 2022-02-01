//html tag that holds the team name
let teamheader = document.getElementById("teamheader");

//html tag that holds the token value
let tokenvalue = document.getElementById("tokenvalue");

const team = "Team Z";

//html button that allows  you to call api without reloading the page
let apicall = document.getElementById("apicall");

//button for setting the default team
let defaultteam = document.getElementById("defaultteam");

//the url is the standard format for the api endpoint that
//is holding the team name and token values
let url =
    "https://cs684api.7g2rji63c728k.us-east-1.cs.amazonlightsail.com/hw3?team=";

//flag added to isolate the input box data from the default search team
let startflag = 0;

//set global team name
let team_name = "";

//function that makes an ajax call to a remote
//api and updates the teamname and token values
//in the html document with the requested values
let getTeamInformation = () => {
    //on window load set team name to default. Changing teams
    //updates value
    if(startflag == 0){
        team_name = getTeam();
    }
    else{
        team_name = teamheader.value;
    }

    $.ajax({
        url: url + team_name,
        type: "GET",
        crossDomain: true,
        dataType: "json",
        success: function (data) {
            console.log(data)
            teamheader.value = data.team;
            tokenvalue.value = data.token;
        },
        error: function (error) {
            console.log(error);
        }
    });
};

//Get Default team name and on page load
let getTeam = () => {
    return team;
};

//Update the teamname input box to the default value and query the api
let setDefault = (event) => {
    teamheader.value = getTeam();
    getTeamInformation();
};

//call api on window load
window.onload = () => {
    getTeamInformation();
    startflag = 1;
};

defaultteam.addEventListener("click", setDefault);
apicall.addEventListener("click", getTeamInformation);