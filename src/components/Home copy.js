import React from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

import imgBeers from "../assets/beers.png" 

class Home extends React.Component {

    state = {
        allbeers: []
    }

    allbeers = () => async () => {
        try{
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/")
            console.log(response)

            this.setState({ allbeers: [...response.data]} )
        }catch(err){
            console.log(err)
        }
    }

    randomIndex = () => {

        // const min = 0
        // const max = this.state.allbeers.length - 1
        // const random = Math.floor(Math.random() * (max - min)) + min; 
        // const random = Math.floor(Math.random() * (this.state.allbeers.length - 1 - 0)) + 0; 

        const random = Math.floor(Math.random() * (this.state.allbeers.length - 1 )); 

        return random

    }    

    searchRandomBeer = async() => {
        try{

            // const min = 0
            // const max = this.state.allbeers.length - 1
            // const random = Math.floor(Math.random() * (max - min)) + min; 
            // const random = Math.floor(Math.random() * (this.state.allbeers.length - 1 - 0)) + 0; 

            const random = Math.floor(Math.random() * (this.state.allbeers.length - 1 )); 

            await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${random}`)
            console.log(response)

            this.setState({ allbeers: [...response.data]} )
        }catch(err){
            console.log(err)
        }
        }
    }
        


    // const random = índice aleatório da lista de cervejas (beers que é uma array)
    render(){
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
                    // to={`/beers/${beer[`_id`]}`}>
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
};

export default Home;