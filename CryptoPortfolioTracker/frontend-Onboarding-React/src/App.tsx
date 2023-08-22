import React, { useState } from "react";
import "./App.css";
import { addUsername } from "./services/server.services";

function App() {
  const [username, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event: any) {
    event.preventDefault();
    if (username === null || username === undefined || username === "") {
      setSuccess('');
      setError("Username field cannot be empty");
    } else {
      if (await addUsername(username)) {
        setError('');
        setSuccess("Success, username accepted");
      } else {
        setSuccess('');
        setError("Error: Username too short");
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username_field">username: </label>
        <input
          id="username_field"
          type="text"
          name="username"
          onChange={(event) => setName(event.target.value)}
          value={username}
        ></input>
        <br></br>
        <button type="button" id="submit_button" onClick={handleSubmit}>
          Submit
        </button>
        <br></br>
        <label id="submit_success" >{success}</label>
        <label id="submit_error" >{error}</label>
      </form>
    </div>
  );
}

export default App;
