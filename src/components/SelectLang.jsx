import React, { useState } from "react";
import { useLanguage } from "../utils/context/LanguageContext";
import styles from "../css/SelectLang.module.css";

function SelectLang() {
  const { currentLanguage, setLanguage, getTranslation } = useLanguage();
  const langues = [
    { name: "francais", init: "fr" },
    { name: "anglais", init: "en" },
  ];
  const [isShowSelectLangue, setIsShowSelectLangue] = useState(false);

  const handleClickOpenSelectLangue = () => {
    setIsShowSelectLangue(!isShowSelectLangue);
  };

  const changeLangue = (newLanguage) => {
    setLanguage(newLanguage);
    setIsShowSelectLangue(!isShowSelectLangue);
  };

  return (
    <div className={styles.container}>
      <div
        onClick={handleClickOpenSelectLangue}
        className={styles.toggleOpenModal}
      >
        <img src={`./src/images/${currentLanguage}.png`} alt="langue" />
      </div>
      {isShowSelectLangue && (
        <div className={styles.modal}>
          {langues.map((langue) => (
            <div
              key={langue.init}
              onClick={() => changeLangue(langue.init)}
              disabled={currentLanguage === langue.init}
            >
              <div>
                <img src={`./src/images/${langue.init}.png`} alt="langue" />
              </div>
              <div>{getTranslation(langue.name)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectLang;
