//html tag that holds the team name 
let teamheader = document.getElementById("teamheader")

//html tag that holds the token value
let tokenvalue = document.getElementById('tokenvalue')

//html button that allows  you to call api without reloading the page
let apicall = document.getElementById('apicall')

//the url is the standard format for the api endpoint that
//is holding the team name and token values 
let url = "https://cs684api.7g2rji63c728k.us-east-1.cs.amazonlightsail.com/hw3?team="

//sets the requested api endpoint team name with 
//the value returned from the function
let team_name = getTeamName()

//function that makes an ajax call to a remote 
//api and updates the teamname and token values
//in the html document with the requested values
let getTeamInformation = () => {
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

//call function on window load
window.onload = () => {
    getTeamInformation()
} 

apicall.addEventListener('click', getTeamInformation);