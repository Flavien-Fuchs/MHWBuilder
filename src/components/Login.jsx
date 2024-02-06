/* eslint-disable react/prop-types */
import "../css/Login.css";
import { useLanguage } from "../utils/context/LanguageContext";
import SelectLang from "./SelectLang";

function Login({ handleApi, isLoading, armors, weapons, charms, skills }) {
  const { getTranslation } = useLanguage();

  return (
    <div className="login">
      <SelectLang />
      <img src="./src/images/logo.png" alt="logo" />
      {isLoading ? (
        <div className="loginContainer">
          <p>
            Armor :{" "}
            {!armors ? (
              <span style={{ color: "red" }}>
                {getTranslation("loading")}...
              </span>
            ) : (
              <span style={{ color: "green" }}>{getTranslation("done")}!</span>
            )}
          </p>
          <p>
            Weapons :{" "}
            {!weapons ? (
              <span style={{ color: "red" }}>
                {getTranslation("loading")}...
              </span>
            ) : (
              <span style={{ color: "green" }}>{getTranslation("done")}!</span>
            )}
          </p>
          <p>
            Charms :{" "}
            {!charms ? (
              <span style={{ color: "red" }}>
                {getTranslation("loading")}...
              </span>
            ) : (
              <span style={{ color: "green" }}>{getTranslation("done")}!</span>
            )}
          </p>
          <p>
            Skills :{" "}
            {!skills ? (
              <span style={{ color: "red" }}>
                {getTranslation("loading")}...
              </span>
            ) : (
              <span style={{ color: "green" }}>{getTranslation("done")}!</span>
            )}
          </p>
          <img src="./src/images/loading.gif" alt="loading" />
        </div>
      ) : (
        <button className="playButton" onClick={handleApi}>
          {getTranslation("play")}
        </button>
      )}
    </div>
  );
}

export default Login;
