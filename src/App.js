import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Herzogenaurach" />

        <footer>
          This project was created by{" "}
          <a
            href="https://bukeysblog.wordpress.com/"
            target="-blank"
            rel="noreferrer"
          >
            {" "}
            Arasanyin Olubukola
          </a>{" "}
          ,{" "}
          <a
            href="https://github.com/Bukilola/react-weather-app"
            target="-blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://lively-cannoli-87defc.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
