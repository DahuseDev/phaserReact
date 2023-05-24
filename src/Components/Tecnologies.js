import { useRef, useState } from "react";
import "./style.css";

const menuHeight = getComputedStyle(document.documentElement).getPropertyValue(
  "--menu-height"
);

const buttons = ["HTML5 & CSS3", "ExpressJS", "MongoDB", "React", "Phaser"];

function  Tecnologies (){
  const [activeBlock, setActiveBlock, isOpen] = useState(0);

  const toggleMenuBlock = (index) => {
    setActiveBlock(index);
  };

  return (
    <>
    <div className="Ttitol">    
        <h1>Tecnologies utilitzades</h1>
    </div>
    <article className={`card ${isOpen ? "open" : ""}`}>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button
            className={index === activeBlock ? "active" : ""}
            onClick={() => toggleMenuBlock(index)}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="wrapper">
        <div
          className="content"
          style={{ translate: `0 calc(0px - ${menuHeight} * ${activeBlock})` }}
        >
          <div className="block">
            <h2>HTML5 & CSS3</h2>
            <p>
              Aquestes son les dues tecnologies per crear tot el contingut visual en les pàgines web. Els dos han sigut utilitzats ampliament durant tot el projecte
            </p>
          </div>
          <div className="block">
            <h2>ExpressJS</h2>
            <p>
             Aquest es un framework de backend minimalista. Ens ha sigut de gran ajut ja que ha sigut en aquest on hem fet tota la lògica del joc.
            </p>
          </div>
          <div className="block">
            <h2>MongoDB</h2>
            <p>
              Durant tot el curs aquest tipus de base de dades no relacional ha sigut utilitzat en moltes ocasions. I en aquest projecte no ha sigut una excepció. 
            </p>
          </div>
          <div className="block">
            <h2>React</h2>
            <p>
              El framework més utilitzat en tot el món de frontend sense cap mena de dubte és React. I per aquest projecte hem volgut utilizar-lo per fer aquesta pàgina. 
            </p>
          </div>
          <div className="block">
            <h2>Phaser</h2>
            <p>
              El protagonista d'aquest projecte ha sigut aquest framework de creació de videojocs 2D. Aquí ha sigut on hem dedicat més hores per la creació del nostre Tower Defense. 
            </p>
          </div>
        </div>
      </div>
    </article>
</>
  );
}; 

export default Tecnologies; 