import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <h1>Weather App</h1>

        <footer>
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
        </footer>
      </div>
    </div>
  );
}
