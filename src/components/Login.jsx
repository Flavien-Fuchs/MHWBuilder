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
            {getTranslation("armors")} :{" "}
            {!armors ? (
              <span style={{ color: "red" }}>
                {getTranslation("loading")}...
              </span>
            ) : (
              <span style={{ color: "green" }}>{getTranslation("done")}!</span>
            )}
          </p>
          <p>
            {getTranslation("weapons")} :{" "}
            {!weapons ? (
              <span style={{ color: "red" }}>
                {getTranslation("loading")}...
              </span>
            ) : (
              <span style={{ color: "green" }}>{getTranslation("done")}!</span>
            )}
          </p>
          <p>
            {getTranslation("charms")} :{" "}
            {!charms ? (
              <span style={{ color: "red" }}>
                {getTranslation("loading")}...
              </span>
            ) : (
              <span style={{ color: "green" }}>{getTranslation("done")}!</span>
            )}
          </p>
          <p>
            {getTranslation("skills")} :{" "}
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
        <button onClick={handleApi}>{getTranslation("play")}</button>
      )}
    </div>
  );
}

export default Login;
