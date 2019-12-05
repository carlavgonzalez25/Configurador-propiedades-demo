import React, { useState, useEffect, Fragment } from "react";
import Spinner from "../layout/Spinner";
import User from "../components/User";
import Project from "../components/Project";
import axios from "axios";
import { configPrueba } from "../const";

const Login = ({ changeSteps, loadConfig, loadUser }) => {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");
  const [screen, setScreen] = useState("user");
  const [username, setUsername] = useState("");

  const retrieveUsers = () => {
    // Chequear  que usuarios existen.
    /*
    setLoading(true);
    const res = axios.get(`https://api.github.com/users/brad`);
    setLoading(false);
    setUsers(res.data); //.items ?
  */
  };

  const retrieveProjects = name => {
    setLoading(true);

    // obtener un array con todos los nombres de proyectos guardados para este user en particular

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

    setSelected(name);
    loadUser(name);

    let jsonProjects = JSON.parse(localStorage.getItem("projects"));

    /* console.log("Se vuelve a ejecutar");
    console.dir(jsonProjects);
*/
    jsonProjects.hasOwnProperty(name) // si el usuario existe, mostrar proyectos. Sino, mostrar vacio
      ? setProjects(jsonProjects[name])
      : setProjects("");

    setLoading(false);
    setScreen("projects");
  };

  const createProject = name => {
    // Crear proyecto nuevo
    setLoading(true);

    setLoading(false);

    /*
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
      */
  };

  const selectProject = name => {
    // hacer  request y obtener los datos de este proyecto en particular

    setLoading(true);
    name === "new" ? loadConfig("new") : loadConfig(configPrueba); // si no es un archivo nuevo, cargar datos almacenados
    setLoading(false);

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
    loadUser("");
    setScreen("user");
  };

  const changeScreen = fase => {
    setScreen(fase);
  };

  const checkUsername = e => {
    // falta comprobar que comience con numero, que no contenga caracteres raros
    let newName = e.target.value.replace(/ /g, "_");
    // console.log("new name " + newName + " value " + e.target.value);

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

  const createUser = e => {
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
      loadUser(username);
      setProjects("");
      localStorage.setItem("users", JSON.stringify(auxUsers));
      let auxProjects = JSON.parse(localStorage.getItem("projects"));
      auxProjects[username] = [];
      localStorage.setItem("projects", JSON.stringify(auxProjects));
      setScreen("projects");
      //console.log(auxUsers + " users " + users);
    }
  };

  useEffect(() => {
    setLoading(true);

    //retrieveUsers()

    //- dummy data . Para probar ahora
    const usuarios = ["Rafael", "Richard", "Pedro", "Fernando"];

    //localStorage.removeItem("users");
    //localStorage.removeItem("projects");

    const proyectos = {
      Rafael: ["casa 1", "casa 2", "casa 3"],
      Richard: ["Modelo parana 1", "Modelo Florida", "Cliente Juan Pedro"],
      Pedro: ["Cliente John Doe modelo 1", "Modelo Parana John"],
      Fernando: [
        "Modelo Florida 2",
        "Cliente Johnson Modelo 3",
        "Modelo Florida 4",
        "Modelo Parana",
        "Cliente Johnson"
      ]
    };

    if (!localStorage.getItem("projects")) {
      localStorage.setItem("projects", JSON.stringify(proyectos)); // esto carga por primera vez
    }

    let jsonUsers = JSON.parse(localStorage.getItem("users"));
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(usuarios));
      setUsers(usuarios);
    } else setUsers(jsonUsers);

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
            <Project
              name="new"
              key="new"
              changeScreen={changeSteps}
              selectProject={selectProject}
            />

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
              className={"form-control /*is-valid*/"}
              id="userNameInput"
              value={username}
              onChange={checkUsername}
            />
            <div className="valid-feedback" id="usernameFeedback"></div>
            <button
              type="submit"
              onClick={createUser}
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
