function gameObject() {
    return { 
        home: {
            teamName: `Brooklyn Nets`,
            colors: ['black', 'white'],
            players: {
                'Alan Anderson': {  
                    number: 0, 
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                    },   
                'Reggie Evans': {  
                    number: 30, 
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                    },
                'Brook Lopez': {  
                    number: 11, 
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                    }, 
                'Mason Plumlee': {  
                    number: 1, 
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                    },  
                'Jason Terry': {  
                    number: 31, 
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,        
                }
            }
        },
        away: {
            teamName: `Charlotte Hornets`,
            colors: ['turquoise', 'purple'],
            players: {
                'Jeff Adrien': {  
                    number: 4, 
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                    },   
                'Bismak Biyombo': {  
                    number: 0, 
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                    },
                'DeSagna Diop': {  
                    number: 2, 
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                    }, 
                'Ben Gordon': {  
                    number: 8, 
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                    },  
                'Brendan Haywood': {  
                    number: 33, 
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,        
                }
            }
        }
    }
};

// console.log(gameObject());

// function homeTeamName() {
//     let obj = gameObject();
//     return obj.home.teamName;
// }
// console.log(homeTeamName());

function numPointsScored(playerName){
    let game = gameObject()
    for (let player in game.home.players){
        if (player == playerName){
            return playerName + ": " + game.home.players[player].points + " points"
        }
    }
    for (let player in game.away.players){
        if (player == playerName){
            return playerName + ": " + game.away.players[player].points + " points"
        }
    }
    // edgecase
    return `Player Not Found`
}

function shoeSize(playerName){
    let game = gameObject()
    for (let player in game.home.players){
        if (player === playerName){
            return playerName + ": " + game.home.players[player].shoe + " Shoe Size"
        }
    }
    for (let player in game.away.players){
        if (player === playerName){
            return playerName + ": " + game.away.players[player].shoe + " Shoe Size"
        }
    }
    // edgecase
    return `Player Not Found`
}

function teamColors(teamName){
    let game = gameObject()
   if (game.home.teamName == teamName){
        return game.home.colors
        
    } else { 
        return game.away.colors
    }

}

function teamNames(){
    let game = gameObject()
    let arr = [game.home.teamName, game.away.teamName]  
    return arr

}

function playerNumbers(teamName){
    let game = gameObject()
    if (game.home.teamName === teamName) {
        return game.home.players.number
    } 
}

// Method 1
function playerNumbers(teamName) {
    let game = gameObject(); 
    let team = game.home.teamName === teamName ? game.home : game.away;
    let jerseyNumbers = [];
    
    for (let player in team.players) {
      jerseyNumbers.push(team.players[player].number); 
    }
  
    return jerseyNumbers;
}

// Method 2
function playerNumbers(teamName) {
    const game = gameObject(); 
  
    if (game.home.teamName === teamName) {
  
      return Object.values(game.home.players).map(player => player.number);
    }
  
    if (game.away.teamName === teamName) {

      return Object.values(game.away.players).map(player => player.number);
    }

    return [];
}
  
function playerStats(playerName) {
    const game = gameObject();
  
    for (let player in game.home.players) {
      if (player === playerName) {
        return game.home.players[player]; 
      }
    }

    for (let player in game.away.players) {
      if (player === playerName) {
        return game.away.players[player];
      }
    }

    return "Does not exist"; 
}

function bigShoeRebounds() {
    const game = gameObject(); 
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;
  
    for (let player in game.home.players) {
      const shoeSize = game.home.players[player].shoe;
      if (shoeSize > largestShoeSize) {
        largestShoeSize = shoeSize;
        playerWithLargestShoe = game.home.players[player];
      }
    }
  
    for (let player in game.away.players) {
      const shoeSize = game.away.players[player].shoe;
      if (shoeSize > largestShoeSize) {
        largestShoeSize = shoeSize;
        playerWithLargestShoe = game.away.players[player];
      }
    }
  
    if (playerWithLargestShoe !== null) {
      return playerWithLargestShoe.rebounds; 
    }

    return null;
}
  
function mostPointsScored() {
    const game = gameObject(); 
    let mostPoints = 0;
    let playerWithMostPoints = null;
  
    for (let player in game.home.players) {
      const points = game.home.players[player].points;
      if (points > mostPoints) {
        mostPoints = points;
        playerWithMostPoints = player;
      }
    }

    for (let player in game.away.players) {
        const points = game.away.players[player].points;
        if (points > mostPoints) {
          mostPoints = points;
          playerWithMostPoints = player;
        }
    }
      
    return playerWithMostPoints;
}

function winningTeam() {
    const game = gameObject(); 
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
  
    for (let player in game.home.players) {
      homeTeamPoints += game.home.players[player].points;
    }
  
    for (let player in game.away.players) {
      awayTeamPoints += game.away.players[player].points;
    }
  

    if (homeTeamPoints > awayTeamPoints) {
      return game.home.teamName;
    } else if (awayTeamPoints > homeTeamPoints) {
      return game.away.teamName;
    } else {
      return "Tie Game";
    }
}
  
function playerWithLongestName() {
    const game = gameObject();
    let longestNameLength = 0;
    let playerWithLongestName = null;

    for (let player in game.home.players) {
      const playerName = player;
      const nameLength = playerName.length;
      if (nameLength > longestNameLength) {
        longestNameLength = nameLength;
        playerWithLongestName = playerName;
      }
    }

    for (let player in game.away.players) {
      const playerName = player;
      const nameLength = playerName.length;
      if (nameLength > longestNameLength) {
        longestNameLength = nameLength;
        playerWithLongestName = playerName;
      }
    }
  
    return playerWithLongestName; 
}
  
function doesLongNameStealATon() {
    const game = gameObject();
    let longestNameLength = 0;
    let playerWithLongestName = null;
  
    for (let player in game.home.players) {
      const playerName = player;
      const nameLength = playerName.length;
      if (nameLength > longestNameLength) {
        longestNameLength = nameLength;
        playerWithLongestName = playerName;
      }
    }
  
    for (let player in game.away.players) {
      const playerName = player;
      const nameLength = playerName.length;
      if (nameLength > longestNameLength) {
        longestNameLength = nameLength;
        playerWithLongestName = playerName;
      }
    }
  
    if (playerWithLongestName !== null) {
      const longestNameSteals = game.home.players[playerWithLongestName].steals || game.away.players[playerWithLongestName].steals;
      let mostSteals = 0;

      for (let player in game.home.players) {
        const steals = game.home.players[player].steals;
        if (steals > mostSteals) {
          mostSteals = steals;
        }
      }
      
      for (let player in game.away.players) {
        const steals = game.away.players[player].steals;
        if (steals > mostSteals) {
          mostSteals = steals;
        }
      }
  
      return longestNameSteals > mostSteals;
    }
  
    return false;
}
  
  
//  console.log(numPointsScored(`s`));
//  console.log(shoeSize(`Alan Anderson`));
//  console.log(teamColors("Charlotte Hornets"));
//  console.log(teamNames());
//  console.log(playerNumbers(`Charlotte Hornets`));
//  console.log(playerStats("Alan Anderson"));
//  console.log(bigShoeRebounds());
//  console.log(mostPointsScored());
//  console.log(winningTeam());
//  console.log(playerWithLongestName());
 console.log(doesLongNameStealATon());