import React, { useState, useEffect, Fragment } from "react";
import Spinner from "../layout/Spinner";
import User from "../components/User";
import Project from "../components/Project";
import axios from "axios";
import "../css/Login.css";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");
  const [screen, setScreen] = useState("user");

  const retrieveUsers = () => {
    // Chequear en el server que carpetas existen.
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
    console.log(name + " " + typeof name);
    const manuel = ["casa 1", "casa 2", "casa 3"];
    const juan = ["lechuga", "papa", "zanahoria"];
    const pedro = ["ravioli", "gnochi", "fusilli"];
    const mario = ["agua", "cerveza", "vino", "fernet", "whiskey"];
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
    }
    setSelected(name);
    setLoading(false);
  };

  const createUser = username => {
    // Crear carpeta nueva
    setLoading(false);
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

  const deselectUser = () => {
    setSelected("");
  };

  const selectProject = name => {
    // hacer axios request y obtener los datos del JSON
    setLoading(true);

    /*
    axios
      .get("http://hicsbrightcapital.com/getData.php", {
        params: { name: name, user: selected }
      })
      .then(res => {
        setProjects(res.data);
        console.log(" termine " + res.data);
        setLoading(false);
      });
    */
  };

  const changeScreen = fase => {
    setScreen(fase);
  };

  useEffect(() => {
    // retrieve users here

    setLoading(true);
    const data = ["manuel", "juan", "pedro", "mario"];
    setUsers(data);
    setLoading(false);

    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  if (screen === "user")
    return (
      <Fragment>
        {selected === "" ? ( //si no hay ningun user seleccionado
          users.length > 0 ? (
            <div className="ctUsers container">
              <div className="row justify-content-between align-items-center ml-lg-5 mr-lg-5 mt-lg-5">
                {Object.keys(users).map(name => (
                  <div
                    className="card text-white bg-primary mb-3 col-lg-3 col-5 ml-1 mr-1 ct-card"
                    onClick={() => retrieveProjects(users[name])}
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
          )
        ) : (
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
              <div class="card-header">Nombre de user</div>
              <div
                className=" card-body btn-group-vertical d-flex w-100 m-auto"
                dataToggle="buttons"
              >
                {Object.keys(projects).map(name => (
                  <Project name={projects[name]} key={name} />
                ))}
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  else if (screen === "projects") return <div> projects</div>;
};

export default Login;
