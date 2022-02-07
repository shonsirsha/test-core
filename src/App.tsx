import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";

function App() {
  const date = dayjs("2019-01-25").toString();
  console.log("Date", date);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a>asd</a>
        <Typography>Hello world </Typography>
        <span>{date}</span>
      </header>
    </div>
  );
}

export default App;
