import React from "react"; 

function About_us (){
    return (
        <>
        <h1>Exemples</h1>
            <div className="exemplesFlex">
                <div className="e1">
                    <h3>Bloons</h3>
                    <p>En el joc, els jugadors intenten prevenir que globus (referint-se a ells com a "Bloons" dins del joc) arribin al final del camí per posar torres  o objectes al llarg que puguin rebentar els bloons de diferents maneres. Algunes torres poden parar als bloons i donar més temps a les altres defenses per rebentar-los ja sigui congelant-los, enganxant-los o empenyent-los.</p>
                    <img src='./bloons.png' alt="bloons"/>
                   <a href="https://bloons.fandom.com/es/wiki/Bloons_Tower_Defense_6"><button id="btn-p1">Saber més </button></a>
                </div>
                <div className="e2">
                    <h3>Tower Defense de Club Penguin</h3>
                    <p>System Defender era un joc i un sistema de seguretat per a l' Elite Penguin Force , llançat el 14 de gener de 2011. Tots els agents de l'EPF podien jugar a aquest joc a la sala de comandaments de l'EPF . Es va utilitzar per defensar l'ordinador EPF Mainframe de les amenaces. System Defender era un joc de Tower Defense .</p>
                    <img src='./clubPenguin.png' alt="club_penguin"/>
                    <a href="https://clubpenguin.fandom.com/wiki/System_Defender"><button id="btn-p1">Saber més</button></a>
                </div>
            </div>
        </>
    )
}

export default About_us; 