import React, { useReducer, useContext } from "react";
import LoginContext from "./loginContext";
import LoginReducer from "./loginReducer";
import {
  CHANGE_SCREEN,
  SET_LOADING,
  SET_USERNAME,
  SET_USERS,
  SET_PROJECTS,
  SET_SELECTED
} from "../types";
import { configPrueba } from "../../const";

import GeneralContext from "../general/generalContext";

const LoginState = props => {
  const generalContext = useContext(GeneralContext);

  const { loadUser, loadConfig } = generalContext;

  const initialState = {
    users: [],
    projects: [],
    selected: "",
    screen: "user",
    username: "",
    loading: false
  };

  const [state, dispatch] = useReducer(LoginReducer, initialState);

  const changeScreen = fase => {
    setLoading(true);
    dispatch({ type: CHANGE_SCREEN, payload: fase });
    setLoading(false);
  };

  const setUsername = name => dispatch({ type: SET_USERNAME, payload: name });

  const setLoading = estado => dispatch({ type: SET_LOADING, payload: estado });

  const setUsers = usernames =>
    dispatch({ type: SET_USERS, payload: usernames });

  const setProjects = projectList =>
    dispatch({ type: SET_PROJECTS, payload: projectList });

  const setSelected = name => dispatch({ type: SET_SELECTED, payload: name });

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

    jsonProjects.hasOwnProperty(name) // si el usuario existe, mostrar proyectos. Sino, mostrar vacio
      ? setProjects(jsonProjects[name])
      : setProjects("");

    setLoading(false);
    changeScreen("projects");
  };

  const deselectUser = () => {
    setSelected("");
    loadUser("");
    changeScreen("user");
  };

  const createUser = e => {
    e.preventDefault();
    if (state.username === "") {
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
      let auxUsers = state.users;
      auxUsers.push(state.username);
      setUsers(auxUsers);
      setSelected(state.username);
      loadUser(state.username);
      setProjects("");
      localStorage.setItem("users", JSON.stringify(auxUsers));
      let auxProjects = JSON.parse(localStorage.getItem("projects"));
      auxProjects[state.username] = [];
      localStorage.setItem("projects", JSON.stringify(auxProjects));
      changeScreen("projects");
      //console.log(auxUsers + " users " + users);
    }
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

  return (
    <LoginContext.Provider
      value={{
        screen: state.screen,
        loading: state.loading,
        username: state.username,
        changeScreen,
        setLoading,
        setUsername,
        users: state.users,
        setUsers,
        projects: state.projects,
        setProjects,
        retrieveProjects,
        deselectUser,
        createUser,
        selectProject,
        createProject,
        checkUsername,
        selected: state.selected
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
export default LoginState;
