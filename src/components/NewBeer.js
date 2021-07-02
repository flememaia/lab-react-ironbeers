import React from "react";
import axios from "axios";

import TextInput from "../TextInput";

import "bootstrap/dist/css/bootstrap.min.css";

class NewBeer extends React.Component {
    state = {
        image_url: "",
        name: "",
        tagline: "",
        first_brewed: "",
        attenuation_level: 0,
        description: "",
        brewers_tips: "",
        contributed_by: ""
    }

    // Atualizar o state com o valor interno do input quando o usuário dispara o evento 'change'
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

    // Envia os dados para a API quando acontece o evento 'submit', que é disparado quando o usuário aciona um botão com 'type' submit dentro de um formulário
  handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão dos formulários, que é recarregar a página e enviar os dados através da URL

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push("/"); // Redireciona a aplicação de volta pra Home
      })
      .catch((err) => {
        console.log(err);
      });
  };

    render() {
        return (
            <div> 
                <div>
            <h1>New Beer</h1>
            <hr />
            <form onSubmit={this.handleSubmit}>
            <TextInput
                label="Beer image"
                type="text"
                name="image_url"
                onChange={this.handleChange}
                value={this.state.name}
              />
              <TextInput
                label="Beer name"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                required
              />
              <TextInput
                label="tagline"
                type="text"
                name="tagline"
                onChange={this.handleChange}
                value={this.state.tagline}
                required
              />
              <TextInput
                label="First brewed"
                type="text"
                name="first_brewed"
                onChange={this.handleChange}
                value={this.state.first_brewed}
                required
              />
              <TextInput
                label="Attenuation level"
                type="numbert"
                name="attenuation_level"
                onChange={this.handleChange}
                value={this.state.attenuation_level}
                required
              />
              <TextInput
                label="Beer description"
                type="text"
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
                required
              />
              <TextInput
                label="Brewers tips"
                type="text"
                name="brewers_tips"
                onChange={this.handleChange}
                value={this.state.brewers_tips}
                required
              />
              <TextInput
                label="Contributed by"
                type="text"
                name="contributed_by"
                onChange={this.handleChange}
                value={this.state.contributed_by}
                required
              />
              
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  ADD NEW
                </button>
              </div>
            </form>
          </div>
            </div>
          
        );
      }
}


export default NewBeer