import React from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class Beers extends React.Component {

    state = {
        allbeers: []
    }

    componentDidMount = async () => {
        try{
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/")
            console.log(response)

            this.setState({ allbeers: [...response.data]} )
        }catch(err){
            console.log(err)
        }
        
        
    }

    render(){
        return (
            <div>
                {this.state.allbeers.map(beer => {
                    return (
                        <div>
                        {/* // <div className="container mt-5">
                        //     <div className="row"> */}
                                <div className="col-md-4">
                                    <img 
                                        src={beer.image_url}
                                        alt={beer.name}
                                        style={{height:"50px", width:"auto"}}
                                        />
                                </div>
                                <div className="col-md-8">
                                    <Link className="list-group-item list-group-item-action" 
                                        to={`/beers/${beer[`_id`]}`}>
                                        <h2>{beer.name}</h2>
                                    </Link>
                                    <h3>{beer.tagline}</h3>
                                    <h4>{beer.contributed_by}</h4>
                                </div>
                            {/* </div> */}
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Beers