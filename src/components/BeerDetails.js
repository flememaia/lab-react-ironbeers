import React from 'react';
import axios from "axios";


import "bootstrap/dist/css/bootstrap.min.css";

class BeerDetails extends React.Component {
    state = {
        image_url: "",
        name: "",
        tagline: "",
        first_brewed: "",
        attenuation_level: 0,
        description: "",
        contributed_by: ""
    }

    componentDidMount = async (props) => {
        try{
            const id = this.props.match.params.beerId

            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            console.log(response.data)

            this.setState({...response.data} )
        }catch(err){
            console.log(err)
        }
    }

    render(){
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={this.state.image_url} style={{height:"400px", width:"auto"}} alt={this.state.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.name}</h5>
                        <h6 className="card-text">{this.state.tagline}</h6>
                        <h6 className="card-text">{this.state.first_brewed}</h6>
                        <h6 className="card-text">{this.state.attenuation_level}</h6>
                        <p className="card-text">{this.state.description}</p>
                        <h6 className="card-text">{this.state.contributed_by}</h6>
                    </div>
                </div>
            </div>
        )
    }

}

export default BeerDetails