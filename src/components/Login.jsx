import PropTypes from "prop-types";
import "../css/Login.css";

function Login({ handleApi, isLoading, armors, weapons, charms, skills }) {

  return (
    <div className="login">
      <div className="container">
        <img src="./src/images/logo.png" alt="logo" />
        {isLoading ? (
          <div className="loginContainer">
            <p>
              Armors :
              {!armors ? (
                <span style={{ color: "red" }}>Loading... </span>
              ) : (
                <span style={{ color: "green" }}>Done!</span>
              )}
            </p>
            <p>Weapons :
              {!weapons ? (
                <span style={{ color: "red" }}>Loading...</span>
              ) : (
                <span style={{ color: "green" }}>Done!</span>
              )}
            </p>
            <p>
              Charms :
              {!charms ? (
                <span style={{ color: "red" }}>Loading...</span>
              ) : (
                <span style={{ color: "green" }}>Done!</span>
              )}
            </p>
            <p>Skills :
              {!skills ? (
                <span style={{ color: "red" }}>Loading...</span>
              ) : (
                <span style={{ color: "green" }}>Done!</span>
              )}
            </p>
            <img src="./src/images/loading.gif" alt="loading" />
          </div>
        ) : (
          <button onClick={handleApi}>Play</button>
        )}
      </div>
      <footer>
        <p>©WCSWebDevMob All rights reserved, 2024</p>
        <p>All Datas and images are Monster Hunter: World and Capcom propriety.</p>
      </footer>
    </div>
  );
}

Login.propTypes = {
  handleApi: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  armors: PropTypes.array,
  weapons: PropTypes.array,
  charms: PropTypes.array,
  skills: PropTypes.array,
};

export default Login;
