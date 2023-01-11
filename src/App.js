import "./App.css";
import Weather from "./Weather"
export default function App() {
  return (
    <div className="App">
      <div classname="container">
    
<Weather />
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
