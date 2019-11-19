import React, { Component } from "react";
import "./App.css";
import Categories from "./components/Categories";
import "typeface-roboto";
import { logoHeader, logoSolo } from "./img";
import axios from "axios";
import { properties } from "./const";

class App extends Component {
  state = {
    shingles: "",
    windows: "",
    tileThroughout: "",
    showerFloorTile: "",
    cabinets: "",
    kitchenSink: "",
    bathroomSink: "",
    bathroomFaucet: "",
    interiorWallColor: "",
    exteriorWallColor: "",
    selected: "",
    imgElegida: logoSolo
  };

  selectCat = nombre => {
    this.setState({
      selected: nombre
    });
  };

  selectOpt = (category, opciones) => {
    this.setState({
      [category]: opciones,
      imgElegida: opciones.image_url
    });
  };

  saveData = e => {
    e.preventDefault();
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    };

    console.log("data stringified: " + JSON.stringify(this.state));
    axios
      .post(
        "http://hicsbrightcapital.com/save.php",
        JSON.stringify(this.state),
        { headers: headers }
      )
      .then(res => {
        console.log(" termine " + res.data);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="ctInterfaz">
          <img src={logoHeader} alt="Logo hics" className="ctLogo" />
          {Object.keys(properties).map(category => (
            <li key={properties[category].alias} className="list-group">
              <Categories
                name={properties[category].name}
                alias={properties[category].alias}
                options={properties[category].options}
                selectedCat={this.state.selected}
                selectCat={this.selectCat}
                selectOpt={this.selectOpt}
                selectedOpt={this.state[properties[category].alias]}
              />
            </li>
          ))}
        </div>
        <div className="ctDerecha">
          <div className="ctImagen">
            <img
              src={this.state.imgElegida}
              alt="ventana 1"
              className="imagen"
            />
          </div>
          <form className="ctForm">
            <fieldset>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Insert file name"
                />
              </div>
              <button
                type="submit"
                onClick={this.saveData}
                className="btn btn-info"
              >
                Guardar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
