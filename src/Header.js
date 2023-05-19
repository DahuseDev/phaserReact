    import React, {useState, useEffect} from "react";
    import './App.css'; 
    //import { Link } from "react-router-dom";
    import {Link, animateScroll as scroll } from 'react-scroll';
    import Home from './Components/Home.js'; 
    import Exemples from './Components/Exemples.js'; 
    import Up from "./Components/Up.js";


    function Header(){
    
    // const [isContentVisible, setIsContentVisible] = useState(true);

    // const desapareixerClick = () => {
    //     setIsContentVisible(false);
    // }  onClick={desapareixerClick} als buttons 

    // useEffect(() => {
    //     const apareixerBtn = () => {
    //         window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false); 
    //     }; 

    //     window.addEventListener('scroll', apareixerBtn); 

    //     return () => {
    //         window.removeEventListener('scroll', apareixerBtn); 
    //     }
    // })

        return (
            <>
            <div className="nav">
                <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="box" to="home"><button> Introducció</button></Link>
                <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="box" to="exemples"><button>Exemples</button></Link>
                <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="box" to="play"><button>Video</button></Link>
            </div>
            <div className="btn-up">
                <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={1000} className="up-circle" to="nav"> <Up/></Link>
            </div>

            <div className="home">
                <Home/>

            </div>

            <div className="play">

             </div>   

            <div className="exemples">
                <Exemples/>

            </div> 
       

           </> 
        )
    }

    export default Header; 
