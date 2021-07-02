import React from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import imgBeers from "../assets/beers.png" 

function Home () {

    // const random = índice aleatório da lista de cervejas (beers que é uma array)

    return (
        <div className="container-md">
            <div>
                <img 
                    // className para ajustar o padding 
                    // className="pe-2"
                    src={imgBeers} 
                    alt="All Beers"
                    style={{width: "100vw", height: "auto"}}
                /> 
                <Link className="list-group-item list-group-item-action" 
                    to={`/beers`}><h1>All Beers</h1>
                    <p>Any text here!</p>
                </Link>
            </div>
            <div>
                <img 
                    // className para ajustar o padding 
                    // className="pe-2"
                    src={imgBeers} 
                    alt="Random Beer"
                    style={{width: "100vw", height: "auto"}}
                /> 
                <Link className="list-group-item list-group-item-action" 
                    to={`/random-beer`}><h1>Random Beer</h1>
                    <p>Any text here! ARRUMAR A IMAGEM</p>
                </Link>
            </div>
            <div>
                <img 
                    // className para ajustar o padding 
                    // className="pe-2"
                    src={imgBeers} 
                    alt="New Beer"
                    style={{width: "100vw", height: "auto"}}
                /> 
                <Link className="list-group-item list-group-item-action" 
                    to={`/new-beer`}><h1>New Beer</h1>
                    <p>Any text here! ARRUMAR A IMAGEM</p>
                </Link>
            </div>
            

        </div>
    )
}

export default Home