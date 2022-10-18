import "../styles/App.scss";

function App() {
  return (
    <>
      <header>
        <img class="logo" src="./assets/images/logo.png" alt="Logo Demascota" />

        <nav>
          <ul class="menu">
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
        <div class="">
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
        </div>
      </footer>
    </>
  );
}

export default App;
