import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layout/Spinner";
import User from "../components/User";
import Project from "../components/Project";
import LoginContext from "../context/login/loginContext";
import GeneralContext from "../context/general/generalContext";
import * as translationEN from "../translations/EN";
import * as translationSP from "../translations/SP";

const Login = () => {
  const loginContext = useContext(LoginContext);
  const generalContext = useContext(GeneralContext);

  const {
    setLoading,
    changeScreen,
    loading,
    screen,
    username,
    users,
    setUsers,
    projects,
    retrieveProjects,
    deselectUser,
    createUser,
    checkUsername,
    selected
  } = loginContext;

  useEffect(() => {
    setLoading(true);

    //retrieveUsers()

    //- dummy data . Para probar ahora
    const usuarios = ["Fernando", "Rafael", "Pedro"];


    //localStorage.removeItem("users");
    //localStorage.removeItem("projects");

    const proyectos = {
      Rafael: ["casa 1", "casa 2", "casa 3"],
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
      <Fragment>
        {//si no hay ningun user seleccionado
        users.length > 0 ? (
          <div className="ctUsers container d-flex flex-column m-auto">
            <div className="row justify-content-between align-items-center d-flex flex-column ml-lg-5 mr-lg-5 mt-lg-5 p-5">
              {Object.keys(users).map(name => (
                <div
                  className="card text-white bg-primary mb-3 col-lg-8 col-6 mx-1 ct-card"
                  onClick={() => retrieveProjects(users[name])}
                  key={name}
                >
                  <User key={name} name={users[name]} />
                </div>
              ))}
              <div
                className="card text-white bg-primary mb-3  col-lg-8 col-6 mx-1 ct-card" //Card crear nuevo usuario
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
  else if (screen === "projects")
    return (
      //si se selecciono un user
      <Fragment>
        <button
          type="button"
          className="btn btn-secondary btnAtras"
          onClick={deselectUser}
        >
          {generalContext.language === "EN"
            ? translationEN.buttons.back
            : generalContext.language === "SP" && translationSP.buttons.back}

        </button>
        <div className="ct-projects card text-white bg-primary mt-5 mx-auto w-50">
          <div className="card-header">{selected}</div>
          <div
            className=" card-body btn-group-vertical d-flex w-100 m-auto"
            datatoggle="buttons"
          >
            <Project name="new" key="new" />

            {Object.keys(projects).map(name => (
              <Project name={projects[name]} key={name} />
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
          className="btn btn-secondary btnAtras"
          onClick={deselectUser}
        >
          {generalContext.language === "EN"
            ? translationEN.buttons.back
            : generalContext.language === "SP" && translationSP.buttons.back}

        </button>
        <div className="container mt-5 ">
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
              className="btn btn-secondary w-100 mt-3"
              id="submitUsername"
            >
              {generalContext.language === "EN"
                ? translationEN.buttons.submit
                : generalContext.language === "SP" &&
                  translationSP.buttons.submit}
            </button>
          </div>
        </div>
      </Fragment>
    );
};

export default Login;
