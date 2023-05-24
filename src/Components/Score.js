import React from 'react'; 
import Database  from './database.js';

// let db = new Database()
function Score (){
    return (
        <>
        <div class="score">
            <h1>Taulell de jugadors</h1>
            <div id="leaderboard">
            
            <iframe id="phaser" src="http://172.20.17.84:3005/scoreboard"></iframe>

            </div>
        </div>
        </>
    )
}

// async function getScore(){
//     let jugadors = db.getPlayers();
//     console.log(jugadors)
//     let jugadors = [];
//     let header = {
//         mode: 'no-cors',
//         headers: {
//             'Access-Control-Allow-Origin':'*'
//         }
//     }
//     let url = window.location.origin.replace("3000","3005")
//     fetch(url + "/mostrarUsers",header)
//     .then(res => res.json())
//     .then(json=>{
//         console.log(json)
//         for(let player of json){
//             let jugador = {
//                 username: player.username,
//                 score: player.score,
//                 date: new Date(player.date),
//             }
//             jugadors.push(jugador); 
//         }
//         return jugadors;
//     })

//     // console.log(jugadors)


// }
export default Score; 