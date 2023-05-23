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


//console.log(numPointsScored(`s`))
//console.log(shoeSize(`Alan Anderson`))
//console.log(teamColors("Charlotte Hornets"))
//console.log(teamNames())
console.log(playerNumbers(`Brooklyn Nets`))