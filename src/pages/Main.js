import React, { Component, Fragment } from "react";
import "../App.css";
import Categories from "../components/Categories";
import "typeface-roboto";
import { logoHeader, logoSolo } from "../img";
import axios from "axios";
import { properties } from "../const";
import Alert from "../components/Alert";

class Main extends Component {
  state = {
    shingles: "",
    tileThroughout: "",
    showerFloorTile: "",
    cabinets: "",
    kitchenSink: "",
    bathroomSink: "",
    bathroomFaucet: "",
    interiorWallColor: "",
    exteriorWallColor: "",
    graniteEdge: "",
    grout: "",
    selected: "",
    imgElegida: logoSolo,
    step: "configurate"
  };

  componentDidMount() {
    //console.dir(this.props.config);
    //primero limpiar el state, luego cargar

    this.setState({
      shingles: "",
      tileThroughout: "",
      showerFloorTile: "",
      cabinets: "",
      kitchenSink: "",
      bathroomSink: "",
      bathroomFaucet: "",
      interiorWallColor: "",
      exteriorWallColor: "",
      selected: "",
      graniteEdge: "",
      grout: "",
      imgElegida: logoSolo,
      step: "configurate"
    });
    console.log("config es " + this.props.config);

    this.props.config !== "new" &&
      Object.keys(this.props.config).map(key => {
        if (this.state.hasOwnProperty(key) && key !== "step")
          this.setState({
            [key]: this.props.config[key]
          });
      });

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
    this.state.hasOwnProperty(category) &&
      this.setState({
        [category]: opciones,
        imgElegida: opciones.image_url
      });
  };

  showImage = opciones => {
    this.setState({
      imgElegida: opciones.image_url
    });
  };

  saveData = e => {
    e.preventDefault();
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    };

    //recorremos todo el array para modificar la url de las imagenes y agregarle el /app/

    let aux = this.state;

    /*
    Object.keys(aux).map(
      key =>
        aux[key].hasOwnProperty(
          "image_url"
        ) aux[key].image_url = aux[key].image_url.replace("app/", "") &&
        (aux[key].image_url = "app" + aux[key].image_url)
    );
*/
    console.log("data stringified: " + JSON.stringify(aux));

    axios
      .post("http://hicsbrightcapital.com/save.php", JSON.stringify(aux), {
        headers: headers
      })
      .then(res => {
        console.log(" termine " + res.data);

        alert("Guardado");
      })
      .catch(error => {
        alert(error);
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
                showImage={this.showImage}
                selectedOpt={this.state[properties[category].alias]}
                hasSelectedOpt={
                  this.state[category] !== "" ? this.state[category] : "empty"
                }
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
            <Fragment>
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
              <button
                type="button"
                className="btn btn-secondary"
                id="btnAtrasSave"
                onClick={() => this.changeSteps("configurate")}
              >
                Back
              </button>
            </Fragment>
          )
        )}
      </div>
    );
  }
}

export default Main;
