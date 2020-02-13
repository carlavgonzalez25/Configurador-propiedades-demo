import React, { useEffect, useContext, Fragment } from "react";
import "../App.css";
import Categories from "../components/Categories";
import "typeface-roboto";
import { logoHeader, logoSolo } from "../img";
import { properties } from "../const";
import Alert from "../components/Alert";
import Summary from "../components/Summary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import GeneralContext from "../context/general/generalContext";
import MainContext from "../context/main/mainContext";

const Main = props => {
  const mainContext = useContext(MainContext);
  const generalContext = useContext(GeneralContext);

  const { config } = generalContext;

  const {
    filename,
    selected,
    imgElegida,
    step,
    alert,
    clearState,
    selectCat,
    selectOpt,
    showImage,
    changeSteps,
    setAlert,
    closeAlert,
    checkFilename,
    loadConfig
  } = mainContext;

  useEffect(() => {
    clearState();

    config !== "new" &&
      Object.keys(config).map(key => {
        if (mainContext.hasOwnProperty(key) && key !== "step")
          loadConfig(key, config[key]);
      });
  }, []);

  const saveData = e => {
    e.preventDefault();

    // para guardarlo necesitamos: nombre de usuario, nombre de proyecto (form)

    let projects = JSON.parse(localStorage.getItem("projects"));
    // console.log(" usuario selected " + this.props.selectedUser);
    // console.dir(projects);

    // si el usuario existe, mostrar proyectos. Sino, mostrar vacio
    if (projects.hasOwnProperty(props.selectedUser)) {
      if (filename === "") setAlert("You have to specify a filename", "danger");
      else {
        projects[props.selectedUser].push(filename);
        localStorage.setItem("projects", JSON.stringify(projects));
        setAlert("Project Saved ", "info");
      }
    } else if (filename === "")
      setAlert("You have to specify a filename", "danger");
    else {
      setAlert(
        "We have encountered a problem. Try again later " +
          filename +
          " " +
          props.selectedUser,
        "danger"
      );
    }

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    };

    //recorremos todo el array para modificar la url de las imagenes y quitarle el /app/

    let aux = mainContext;
    console.log("antes de modificar " + mainContext);

    Object.keys(aux).map(key => {
      console.log(" propiedad " + aux[key] + " key " + key);

      if (key !== "alert" && aux[key].hasOwnProperty("image_url")) {
        //comparmos con alert porque vale NULL
        console.log("  url antes " + aux[key].image_url);

        aux[key].image_url = aux[key].image_url.replace(
          "/app/static",
          "static"
        );
        console.log(" url modificada " + aux[key].image_url);
      }
      if (key !== "alert" && aux[key].hasOwnProperty("subOption")) {
        aux[key].subOption.image_url = aux[key].subOption.image_url.replace(
          "/app/static",
          "static"
        );
      }
    });

    console.log("data stringified: " + JSON.stringify(aux));
    /*     // todo esto funciona

    axios
      .post("https://hicsbrightcapital.com/save.php", JSON.stringify(aux), {
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

  return (
    <div className="App">
      <div className="ctInterfaz d-flex flex-column justify-content-top align-items-start">
        <img src={logoHeader} alt="Logo hics" className="ctLogo" />
        <div
          className={
            "btnSummary d-flex justify-content-center align-items-center " +
            (step.izq === "categories" && "pointerCursor")
          }
          onClick={
            step.izq === "categories"
              ? () => changeSteps("izq", "summary")
              : null
          }
        >
          {step.izq === "summary" && (
            <span
              className="ctArrowBack"
              onClick={() => changeSteps("izq", "categories")}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
          )}
          <span>Summary</span>
        </div>
        {step.izq === "categories" &&
          Object.keys(properties).map(category => (
            <li key={properties[category].alias} className="list-group">
              <Categories
                key={properties[category].alias}
                name={properties[category].name}
                alias={properties[category].alias}
                options={properties[category].options}
                subOptions={
                  properties[category].subOptions
                    ? properties[category].subOptions
                    : null
                }
                selectedCat={selected}
                selectCat={selectCat}
                selectOpt={selectOpt}
                showImage={showImage}
                selectedOpt={mainContext[properties[category].alias]}
                hasSelectedOpt={
                  mainContext[category] !== "" ? mainContext[category] : "empty"
                }
              />
            </li>
          ))}
        {step.izq === "summary" && <Summary options={mainContext} />}
      </div>
      {step.der === "images" ? (
        <Fragment>
          <div className="ctDerecha">
            <div className="ctImagen" id="ctImagen">
              <img src={imgElegida} alt="Selected image" className="imagen" />
            </div>
            <button
              type="submit"
              onClick={() => changeSteps("der", "save")}
              className="btn btn-info btnSave"
            >
              Guardar
            </button>
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            id="btnAtrasMain"
            onClick={() => generalContext.changeSteps("login")}
          >
            Atras
          </button>
        </Fragment>
      ) : (
        step.der === "save" && (
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
                      onChange={checkFilename}
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
                  onClick={saveData}
                >
                  Save
                </button>
              </fieldset>
            </form>
            <Alert alert={alert} closeAlert={closeAlert} />
            <button
              type="button"
              className="btn btn-secondary"
              id="btnAtrasSave"
              onClick={() => changeSteps("der", "images")}
            >
              Back
            </button>
          </Fragment>
        )
      )}
    </div>
  );
};

export default Main;
