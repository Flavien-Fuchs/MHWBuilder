import { useState } from "react";
import { useLanguage } from "../utils/context/LanguageContext";
import styles from "../css/SelectLang.module.css";

function SelectLang() {
  const [isShowSelectLanguage, setIsShowSelectLanguage] = useState(false);
  const { currentLanguage, setLanguage, getTranslation } = useLanguage();
  const languages = [
    { name: "francais", init: "fr" },
    { name: "anglais", init: "en" },
  ];

  const handleClickOpenSelectLanguage = () => {
    setIsShowSelectLanguage(!isShowSelectLanguage);
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setIsShowSelectLanguage(!isShowSelectLanguage);
  };

  return (
    <div className={styles.container}>
      <div
        onClick={handleClickOpenSelectLanguage}
        className={styles.toggleOpenModal}
      >
        <img src={`./src/images/${currentLanguage}.png`} alt="language" />
      </div>
      {isShowSelectLanguage && (
        <div className={styles.modal}>
          {languages.map((language) => (
            <div
              key={language.init}
              onClick={() => changeLanguage(language.init)}
              disabled={currentLanguage === language.init}
            >
              <div>
                <img src={`./src/images/${language.init}.png`} alt="language" />
              </div>
              <div>{getTranslation(language.name)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectLang;
