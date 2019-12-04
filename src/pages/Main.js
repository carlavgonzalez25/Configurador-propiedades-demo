import React, { Component, Fragment } from "react";
import "../App.css";
import Categories from "../components/Categories";
import "typeface-roboto";
import { logoHeader, logoSolo } from "../img";
import axios from "axios";
import { properties } from "../const";
import Alert from "../components/Alert";
import Summary from "../components/Summary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

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
    step: { der: "images", izq: "categories" },
    alert: null
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
      graniteEdge: "",
      grout: "",
      selected: "",
      imgElegida: logoSolo,
      step: { der: "images", izq: "categories" },
      alert: null,
      fileName: ""
    });

    console.log("config es " + this.props.config);
    console.dir(properties);

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

    // para guardarlo necesitamos: nombre de usuario, nombre de proyecto (form)

    let projects = JSON.parse(localStorage.getItem("projects"));
    //console.log(jsonProjects + " type " + typeof jsonProjects);

    // si el usuario existe, mostrar proyectos. Sino, mostrar vacio
    if (projects.hasOwnProperty(this.props.selectedUser)) {
      projects = projects[this.props.selectedUser].push(this.state.fileName);
    } else this.setAlert("We have encountered a problem. Try again ", "danger");

    /* todo esto funciona 

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    };

    //recorremos todo el array para modificar la url de las imagenes y quitarle el /app/

    let aux = this.state;
    console.log("antes de modificar " + this.state);

    Object.keys(aux).map(key => {
      console.log(" propiedad " + aux[key] + " key " + key);

      if (key !== "alert" && aux[key].hasOwnProperty("image_url")) {
        console.log("  url antes " + aux[key].image_url);

        aux[key].image_url = aux[key].image_url.replace(
          "/app/static",
          "static"
        );
        console.log(" url modificada " + aux[key].image_url);
      }
    });

    console.log("data stringified: " + JSON.stringify(aux));

    axios
      .post("http://hicsbrightcapital.com/save.php", JSON.stringify(aux), {
        headers: headers
      })
      .then(res => {
        console.log(" termine " + res.data);
        this.setAlert("The file has been saved", "info");
        //alert("Guardado");
      })
      .catch(error => {
        this.setAlert("The file could not be saved, error: " + error, "danger");
        // alert(error);
      });
      */
  };

  changeSteps = (panel, step) => {
    let newStep = this.state.step;
    newStep[panel] = step;

    this.setState({
      step: newStep
    });
  };

  setAlert = (msg, type) => {
    this.setState({
      alert: { msg: msg, type: type } //Esto se puede reescribir como alert: {msg, type}
    });
    console.log("entro a cheqeuar el alert" + msg + " " + type);

    // setTimeout(() => this.setState({ alert: null }), 5000);
  };

  closeAlert = () => {
    this.setState({ alert: null });
  };

  render() {
    return (
      <div className="App">
        <div className="ctInterfaz d-flex flex-column justify-content-top align-items-start">
          <img src={logoHeader} alt="Logo hics" className="ctLogo" />
          <div
            className={
              "btnSummary d-flex justify-content-center align-items-center " +
              (this.state.step.izq === "categories" && "pointerCursor")
            }
            onClick={
              this.state.step.izq === "categories"
                ? () => this.changeSteps("izq", "summary")
                : null
            }
          >
            {this.state.step.izq === "summary" && (
              <span
                className="ctArrowBack"
                onClick={() => this.changeSteps("izq", "categories")}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
            )}
            <span>Summary</span>
          </div>
          {this.state.step.izq === "categories" &&
            Object.keys(properties).map(category => (
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
          {this.state.step.izq === "summary" && (
            <Summary options={this.state} names={properties} />
          )}
        </div>
        {this.state.step.der === "images" ? (
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
                onClick={() => this.changeSteps("der", "save")}
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
          this.state.step.der === "save" && (
            <Fragment>
              <form className="ctDerecha">
                <fieldset className="w-75 m-5">
                  <legend>Save project</legend>
                  <div className="form-group">
                    <div className="form-group">
                      <label for="filename">Filename</label>
                      <input
                        className="form-control"
                        id="filename"
                        placeholder="Choose a name for your project"
                        required
                      ></input>
                    </div>
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Enter client's email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputName">Name</label>
                    <input
                      type="name"
                      className="form-control"
                      id="inputName"
                      placeholder="Enter client's name"
                    />
                  </div>

                  <div className="form-group">
                    <label for="inputPhone">Phone</label>
                    <input
                      type="telephone"
                      className="form-control"
                      id="inputPhone"
                      placeholder="Enter client's phone number"
                    />
                  </div>

                  <div className="form-group">
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
              <Alert alert={this.state.alert} closeAlert={this.closeAlert} />
              <button
                type="button"
                className="btn btn-secondary"
                id="btnAtrasSave"
                onClick={() => this.changeSteps("der", "images")}
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
