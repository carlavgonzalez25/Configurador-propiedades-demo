import React, { Component, Fragment } from "react";
import "../App.css";
import Categories from "../components/Categories";
import "typeface-roboto";
import { logoHeader, logoSolo } from "../img";
import axios from "axios";
import { properties } from "../const";

class Main extends Component {
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
    imgElegida: logoSolo,
    step: "configurate"
  };

  componentDidMount() {
    //console.dir(this.props.config);
    Object.keys(this.props.config).map(key => {
      if (this.state.hasOwnProperty(key))
        this.setState({
          [key]: this.props.config[key]
        });
    });
    this.state.step = "configurate";

    /*
      this.props.type // casa nueva o a editar? 
      this.props.data // data de la casa cargada
      this.props.model // modelo de casa
      */
  }

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
        alert("Guardado");
      });
  };

  changeSteps = step => {
    this.setState({
      step: step
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
        {this.state.step === "configurate" ? (
          <Fragment>
            <div className="ctDerecha">
              <div className="ctImagen">
                <img
                  src={this.state.imgElegida}
                  alt="ventana 1"
                  className="imagen"
                />
              </div>
              <button
                type="submit"
                onClick={() => this.changeSteps("save")}
                className="btn btn-info btnSave"
              >
                Guardar
              </button>
            </div>
            <button
              type="button"
              className="btn btn-secondary"
              id="btnAtrasMain"
              onClick={() => this.props.changeSteps("login")}
            >
              Atras
            </button>
          </Fragment>
        ) : (
          this.state.step === "save" && (
            <form className="ctDerecha">
              <fieldset className="w-75 m-5">
                <legend>Save project</legend>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label for="inputName">Name</label>
                  <input
                    type="name"
                    className="form-control"
                    id="inputName"
                    placeholder="Enter name"
                  />
                </div>

                <div class="form-group">
                  <label for="inputPhone">Phone</label>
                  <input
                    type="telephone"
                    className="form-control"
                    id="inputPhone"
                    placeholder="Enter phone number"
                  />
                </div>

                <div class="form-group">
                  <label for="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.saveData}
                >
                  Save
                </button>
              </fieldset>
            </form>
          )
        )}
      </div>
    );
  }
}

export default Main;
