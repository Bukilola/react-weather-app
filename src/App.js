import "./App.css";
import SearchWeather from "./Weather"
export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <SearchWeather defaultCity="Herzogenaurach" />

        <div>
          <p className="myGit">
            This project was created by {""}
            <a href="https://bukeysblog.wordpress.com/" target="-blank">
              {" "}
              Arasanyin Olubukola
            </a>{" "}
            and it is{" "}
            <a
              href="https://github.com/Bukilola/react-weather-app"
              target="-blank"
            >
              {" "}
              open-sourced on GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
