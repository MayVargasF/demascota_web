import "../styles/App.scss";
import logo from "../images/logoDemascota.jpg";

function App() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="Logo Demascota" />

        <nav className="header__nav">
          <ul className="header__nav--menu">
            <li>
              <a href="#">Conócenos</a>
            </li>
            <li>
              <a href="#">Educación</a>
            </li>
            <li>
              <a href="#">Hospedaje</a>
            </li>
            <li>
              <a href="#">Centro</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
      </header>

      <main></main>
      <footer>
        {/* <div className="">
          <h4>Contacto</h4>
          <nav>
            <ul>
              <li>
                <a href="#">Email</a>
              </li>
              <li>
                <a href="#">Teléfono</a>
              </li>
            </ul>
          </nav>
        </div> */}
      </footer>
    </>
  );
}

export default App;
