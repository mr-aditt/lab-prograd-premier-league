//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  return [managerName, managerAge, currentTeam, trophiesWon]
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(arr){
  if(arr.length==0){return null}
  return {defender:arr[0], midfield:arr[1], forward:arr[2]}
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  debut = []
  for(var i=0;i<players.length;i++){
    if(players[i]['debut']==year){
      debut.push(players[i])
    }
  }
  return debut
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  pos = []
  for(var i=0;i<players.length;i++){
    if(players[i]['position']==position){
      pos.push(players[i])
    }
  }
  return pos
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  awardWon = []
  for(var i=0;i<players.length;i++){
    for(var j=0;j<players[i]['awards'].length;j++){
      if(players[i]['awards'][j]['name']==awardName){
        awardWon.push(players[i])
      }
    }
  }
  return awardWon
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  var awardWonXtimes = []
  var count=0
  for(var i=0;i<players.length;i++){
    for(var j=0;j<players[i]['awards'].length;j++){
      if(players[i]['awards'][j]['name']==awardName){
        count+=1
        if(count==noOfTimes){awardWonXtimes.push(players[i])}
      }
    }
    count=0
  }
  return awardWonXtimes
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  awardByCountry = []
  for(var i=0;i<players.length;i++){
    for(var j=0;j<players[i]['awards'].length;j++){
      if(players[i]['awards'][j]['name']==awardName && players[i]['country']==country){
        awardByCountry.push(players[i])
      }
    }
  }
  return awardByCountry
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var items = []
  for(var i=0;i<players.length;i++){
    if(players[i]['awards'].length>=noOfAwards && players[i]['team']==team && players[i]['age']<age){
      items.push(players[i])
    }
  }
  return items
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
