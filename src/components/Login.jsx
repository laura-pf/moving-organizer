import "../scss/components/Landing.scss";
function Login(props) {
  function handleClickForm() {
    props.toggleForm();
  }
  return (
    <div className="container-login">
      {props.isLogin ? (
        <div className="form-box">
          <h2>Iniciar Sesión</h2>
          <form id="loginForm">
            <div className="input-group">
              <label htmlFor="email" className="label">
                Correo electrónico
              </label>
              <input
                className="label"
                type="email"
                id="email"
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password" className="label">
                Contraseña
              </label>
              <input
                className="label"
                type="password"
                id="password"
                placeholder="Introduce tu contraseña"
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Iniciar Sesión
            </button>
            <p className="switch-text">
              ¿Aún no estás registrado?{" "}
              <a href="#" onClick={handleClickForm}>
                Regístrate aquí
              </a>
            </p>
          </form>
        </div>
      ) : (
        <div className="form-box">
          <h2>Regístrate</h2>
          <form id="registerForm">
            <div className="input-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Introduce tu nombre"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="apellidos">Apellidos</label>
              <input
                type="text"
                id="apellidos"
                placeholder="Introduce tus apellidos"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email-register">Correo electrónico</label>
              <input
                type="email"
                id="email-register"
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="username">Usuario</label>
              <input
                type="text"
                id="username"
                placeholder="Elige un nombre de usuario"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password-register">Contraseña</label>
              <input
                type="password"
                id="password-register"
                placeholder="Introduce una contraseña"
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Registrarse
            </button>
            <p className="switch-text">
              ¿Ya tienes una cuenta?{" "}
              <a href="#" onClick={handleClickForm}>
                Inicia Sesión
              </a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
