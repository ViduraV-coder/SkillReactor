import { useState } from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { RegisterUser, LoginUser } from "./services/App.services";
import Dashboard from "./Dashboard";
import { GetAsset } from "./services/Dashboard.services"

import "./App.css";

function App () {
  const [registerUser, setRegisterUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loginUser, setLoginUser] = useState({ username: "", password: "" });
  const [signupError, setsignupError] = useState("");
  const [loginError, setloginError] = useState("");

  const rootElement = document.getElementById("root");

  async function handleRegister(event: any) {
    event.preventDefault();
    if (
      registerUser.username === null ||
      registerUser.username === "" ||
      registerUser.email === null ||
      registerUser.email === "" ||
      registerUser.password === null ||
      registerUser.password === ""
    ) {
      setsignupError("Error: Unable to signup, please fill all the details");
    } else {
      RegisterUser(registerUser);
    }
    setRegisterUser({ username: "", email: "", password: "" });
  }

  async function handleLogin(event: any) {
    event.preventDefault();
    if (
      loginUser.username === null ||
      loginUser.username === "" ||
      loginUser.password === null ||
      loginUser.password === ""
    ) {
      setloginError("Error: Unable to login, please fill all the details");
    } else {
      if (await LoginUser(loginUser)) {
        const username = loginUser.username;
        const data = await GetAsset(username);
        ReactDOM.render(
          <HashRouter>
            <Dashboard username={username} data={data}/>
          </HashRouter>,
          rootElement
        );
      } else {
        setloginError("Error: Unable to login, details do not match");
      }
    }
    setLoginUser({ username: "", password: "" });
  }

  return (
    <div id="App">
      <section id="product_details_section" className="sections">
        <h1 id="product_headline">
          Crypto Tracker: All your crypto in one place
        </h1>
        <p id="product_description">
          Crypto Tracker is a web app that allows you to easily manage your
          Crypto currency holdings in one place. Keep track of the prices and
          your profit/loss trends.
        </p>
      </section>
      <section id="product_features_section" className="sections">
        <h1 id="features_heading">Features </h1>
        <ul id="features_list">
          <li className="feature">Add/Remove Crypto Assets</li>
          <li className="feature">Track Prices</li>
          <li className="feature">View PnL</li>
        </ul>
      </section>
      <section id="login_register">
        <div id="registration_section" className="relo">
          <div className="relo-inside">
            <h1 id="registration_heading">Registration</h1>
            <form onSubmit={handleRegister}>
              <label htmlFor="username_field">UserName: </label>
              <input
                id="username_field"
                type="text"
                onChange={(event) =>
                  setRegisterUser({
                    ...registerUser,
                    username: event.target.value,
                  })
                }
                value={registerUser.username}
              />
              <br />
              <label id="email_label" htmlFor="email_field">
                Email:{" "}
              </label>
              <input
                id="email_field"
                type="text"
                onChange={(event) =>
                  setRegisterUser({
                    ...registerUser,
                    email: event.target.value,
                  })
                }
                value={registerUser.email}
              />
              <br />
              <label htmlFor="password_field">Passsword: </label>
              <input
                id="password_field"
                type="text"
                onChange={(event) =>
                  setRegisterUser({
                    ...registerUser,
                    password: event.target.value,
                  })
                }
                value={registerUser.password}
              />
              <br />
              <br />
              <button id="signup_button" className="button" type="submit">
                Signup
              </button>
              <br />
              <label id="signup_error">{signupError}</label>
            </form>
          </div>
        </div>
        <div id="login_section" className="relo">
          <div className="relo-inside">
            <h1 id="login_heading">Login</h1>
            <form onSubmit={handleLogin}>
              <label htmlFor="login_username_field">UserName: </label>
              <input
                id="login_username_field"
                type="text"
                onChange={(event) =>
                  setLoginUser({ ...loginUser, username: event.target.value })
                }
                value={loginUser.username}
              />
              <br />
              <label htmlFor="login_password_field">Passsword: </label>
              <input
                id="login_password_field"
                type="text"
                onChange={(event) =>
                  setLoginUser({ ...loginUser, password: event.target.value })
                }
                value={loginUser.password}
              />
              <br />
              <br />
              <button id="login_button" className="button" type="submit">
                Login
              </button>
              <br />
              <label id="login_error">{loginError}</label>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
