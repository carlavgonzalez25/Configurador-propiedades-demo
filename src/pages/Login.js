import React, { useState, useEffect, Fragment } from "react";
import Spinner from "../layout/Spinner";
import User from "../components/User";
import Project from "../components/Project";
import axios from "axios";
import "../css/Login.css";
import { configPrueba } from "../const";

const Login = ({ changeSteps, loadConfig }) => {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");
  const [screen, setScreen] = useState("user");
  const [username, setUsername] = useState("");

  const retrieveUsers = () => {
    // Chequear en el server que usuarios existen.
    /*
    setLoading(true);
    const res = axios.get(`https://api.github.com/users/brad`);
    setLoading(false);
    setUsers(res.data); //.items ?
  */
  };
  const retrieveProjects = name => {
    setLoading(true);
    /*
    axios
      .get("http://hicsbrightcapital.com/getProjects.php", {
        params: { name: name }
      })
      .then(res => {
        setProjects(res.data);
        console.log(" termine " + res.data);
        setLoading(false);
      });
      */
    const manuel = ["casa 1", "casa 2", "casa 3"];
    const juan = ["Modelo parana 1", "Modelo Florida", "Cliente Juan Pedro"];
    const pedro = ["Cliente John Doe modelo 1", "Modelo Parana John"];
    const mario = [
      "Modelo Florida 2",
      "Cliente Johnson Modelo 3",
      "Modelo Florida 4",
      "Modelo Parana",
      "Cliente Johnson"
    ];
    switch (name) {
      case "manuel":
        setProjects(manuel);
        console.log("estoy en manuel");
        break;
      case "juan":
        setProjects(juan);
        break;
      case "pedro":
        setProjects(pedro);
        break;
      case "mario":
        setProjects(mario);
        break;
      default:
        setProjects("");
        break;
    }
    setSelected(name);
    setLoading(false);
    setScreen("projects");
  };

  const createUser = username => {
    // Crear carpeta nueva

    setLoading(true);
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    };

    axios
      .post("http://hicsbrightcapital.com/save.php", JSON.stringify(username), {
        headers: headers
      })
      .then(res => {
        console.log(" termine " + res.data);
        setLoading(false);
      });
  };

  const createProject = name => {
    // Crear proyecto nuevo
    setLoading(true);
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    };

    axios
      .post("http://hicsbrightcapital.com/save.php", JSON.stringify(name), {
        headers: headers
      })
      .then(res => {
        console.log(" termine " + res.data);
        setLoading(false);
      });
  };

  const selectProject = name => {
    // hacer axios request y obtener los datos del JSON
    setLoading(true);
    loadConfig(configPrueba);
    setLoading(false);
    console.dir(configPrueba);

    // Guardar los datos en un objeto y pasarlo a loadConfig

    /*
    axios
      .get("http://hicsbrightcapital.com/getData.php", {
        params: { name: name, user: selected }
      })
      .then(res => {
        console.log(" termine " + res.data);
        loadConfig(res.data)
        setLoading(false);
      });
    */
  };

  const deselectUser = () => {
    setSelected("");
    setScreen("user");
  };

  const changeScreen = fase => {
    setScreen(fase);
  };

  const checkUsername = e => {
    // falta comprobar que comience con numero, que no contenga caracteres raros
    let newName = e.target.value.replace(/ /g, "_");
    console.log("new name " + newName + " value " + e.target.value);

    if (newName.includes("_"))
      document.getElementById(
        "usernameFeedback"
      ).innerHTML = `It will be saved as ${newName}`;
    else document.getElementById("usernameFeedback").innerHTML = "";

    if (newName === "")
      document.getElementById("submitUsername").disabled = true;
    else document.getElementById("submitUsername").disabled = false;

    setUsername(newName);
  };

  const submitUsername = e => {
    e.preventDefault();
    if (username === "") {
      console.log("empty username");
    } else {
      console.log("Submited name");

      // Enviar el nombre por ajax para que se cree una nueva carpeta

      /*
    setLoading(true);
    axios
      .get("http://hicsbrightcapital.com/getData.php", {
        params: {  user: username }
      })
      .then(res => {
        setProjects(res.data);
        console.log(" termine " + res.data);
        setLoading(false);
        
      });
    */
      let auxUsers = users;
      auxUsers.push(username);
      setUsers(auxUsers);
      setSelected(username);
      setProjects("");
      setScreen("projects");
    }
  };

  useEffect(() => {
    // retrieve users here

    setLoading(true);
    //retrieveUsers()

    // dummy data
    const data = ["manuel", "juan", "pedro", "mario"];
    setUsers(data);
    setLoading(false);

    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  if (screen === "user")
    return (
      // EMPEZAMOS A EDITAR ACA
      <Fragment>
        {//si no hay ningun user seleccionado
        users.length > 0 ? (
          <div className="ctUsers container">
            <div className="row justify-content-between align-items-center ml-lg-5 mr-lg-5 mt-lg-5">
              {Object.keys(users).map(name => (
                <div
                  className="card text-white bg-primary mb-3 col-lg-3 col-5 ml-1 mr-1 ct-card"
                  onClick={() => retrieveProjects(users[name])}
                  key={name}
                >
                  <User key={name} name={users[name]} />
                </div>
              ))}
              <div
                className="card text-white bg-primary mb-3 col-lg-3 col-5 ml-1 mr-1 ct-card" //Card crear nuevo usuario
                onClick={() => changeScreen("newUser")}
              >
                <User key="new" name="New User" />
              </div>
            </div>
          </div>
        ) : (
          <div
            className="card text-white bg-primary mb-3 col-lg-3 col-5 ml-1 mr-1 ct-card"
            onClick={() => changeScreen("newUser")}
          >
            <User key="new" name="New User" />
          </div>
        )}
      </Fragment>
    );
  // ESTAMOS EDITANDO HASTA ACA
  else if (screen === "projects")
    return (
      //si se selecciono un user
      <Fragment>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={deselectUser}
        >
          Atras
        </button>
        <div className="ct-projects m-auto card text-white bg-primary w-50">
          <div className="card-header">{selected}</div>
          <div
            className=" card-body btn-group-vertical d-flex w-100 m-auto"
            dataToggle="buttons"
          >
            <Project name="new" key="new" changeScreen={changeSteps} />
            {Object.keys(projects).map(name => (
              <Project
                name={projects[name]}
                key={name}
                selectProject={selectProject}
                changeScreen={changeSteps}
              />
            ))}
          </div>
        </div>
      </Fragment>
    );
  else if (screen === "newUser")
    return (
      <Fragment>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={deselectUser}
        >
          Atras
        </button>
        <div className="container">
          <div className="form-group has-success w-50 m-auto">
            <label className="form-control-label" htmlFor="userNameInput">
              Enter a user name
            </label>
            <input
              type="text"
              className="form-control is-valid"
              id="userNameInput"
              value={username}
              onChange={checkUsername}
            />
            <div className="valid-feedback" id="usernameFeedback"></div>
            <button
              type="submit"
              onClick={submitUsername}
              className="btn btn-secondary"
              id="submitUsername"
            >
              Submit
            </button>
          </div>
        </div>
      </Fragment>
    );
};

export default Login;
