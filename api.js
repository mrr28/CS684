//html tag that holds the team name 
let teamheader = document.getElementById("teamheader")

//input box for entering different team
let enter_team = document.getElementById('enter_team')

//html tag that holds the token value
let tokenvalue = document.getElementById('tokenvalue')

//html button that allows  you to call api without reloading the page
let apicall = document.getElementById('apicall')

//html button for submitting custom team
let changeteam = document.getElementById('changeteam')

let defaultteam = document.getElementById('defaultteam')


//the url is the standard format for the api endpoint that
//is holding the team name and token values 
let url = "https://cs684api.7g2rji63c728k.us-east-1.cs.amazonlightsail.com/hw3?team="

//global default team_name
let team_name = ""


//function that makes an ajax call to a remote 
//api and updates the teamname and token values
//in the html document with the requested values
let getTeamInformation = () => {

    //on window load set team name to default. Changing teams  
    //updates value
    if(changeteam.style.display == "none"){
        team_name = enter_team.value;
    }
    else{
        team_name = getTeam()
    }

    console.log(team_name)
    $.ajax({
        url:  url + team_name,
        type : 'GET',
        crossDomain: true,
        dataType:'json',
        success: function(data) {           
            teamheader.innerHTML = data.team
            tokenvalue.innerHTML = data.token
        },
        error: function(error)
        {
            console.log(error)
        }
      });
}

let searchCustom = (event) => {
    if(teamheader.style.display != "none"){
        teamheader.style.display = "none";
        enter_team.style.display = "block";
        defaultteam.style.display = "inline-block";
        changeteam.style.display = "none";
    }
    else{
        teamheader.style.display = "block";
        enter_team.style.display = "none";
        defaultteam.style.display = "none";
        changeteam.style.display = "inline-block";
        teamheader.innerHTML = getTeam();
        team_name = getTeam();
        tokenvalue.innerHTML = "";
    }
}



//call function on window load
window.onload = () => {
    getTeamInformation()
} 

changeteam.addEventListener('click', searchCustom);
defaultteam.addEventListener('click', searchCustom);
apicall.addEventListener('click', getTeamInformation);

