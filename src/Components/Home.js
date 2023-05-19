import React from "react"; 

function Home () {
    return (
        <>
    <div className="HomePage">
        <h1>GP3 - Tower Defense amb Phaser</h1>
        
        <div className="preguntes">
            <div className="p1">
                <div className="p1-info">
                    <h1>Què és un Tower Defense</h1>
                    <p>És un subgènere del videojoc d'estratègia en què l'objectiu és defensar els territoris o les possessions d'un jugador mitjançant l'obstrucció dels atacants enemics, que generalment s'aconsegueix mitjançant la col·locació d'estructures defensives al voltant i en la trajectòria d'atac, malgrat del nom del gènere els elements defensius no sempre són torres típiques, podent ser en realitat una gran gamma d'elements defensius, com ara personatges, estructures, edificis de diferent tipus, elements minerals o vegetals, entre d'altres.</p>
                    {/* <button id="btn-p1">Saber més </button> */}
                </div>
                <div className="p1-img">
                    <img src='/towerDefense.jpg' alt="phaser"/>
                </div>
            </div>

           
            <div className="p2">
                <div className="p1-info">
                    <h3>Què és Phaser</h3>
                    <p>Phaser és una biblioteca de JavaScript que facilita la codificació d'un joc, de manera similar a com jQuery és una biblioteca de JavaScript que facilita la modificació d'HTML i CSS en una pàgina web.
                    Phaser facilita afegir els gràfics del vostre joc per construir un món de joc, afegir animacions, afegir entrades de jugadors, afegir física al vostre món de joc (velocitat, gravetat, fricció, etc.), detectar col·lisions entre objectes del joc, afegir explosions de partícules, jugar. sons, i molt més.
                    Phaser crea jocs en 2D. Tanmateix, si ets nou a crear jocs, és millor començar amb 2D.</p>
                </div>
                
                <div className="p2-img">
                    <img src="phaser.png" alt="phaser"/>
                </div>
            </div>
        </div>

    </div>
    </>
    )
}

export default Home; 