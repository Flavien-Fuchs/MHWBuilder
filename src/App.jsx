import { useState } from "react";
import axios from "axios";
import "./App.css";
import Armors from "./components/Armors";
import Weapons from "./components/Weapons";
import ItemShit from "./components/ItemShit";
import Defense from "./components/Defense";
import Attack from "./components/Attack";
import Login from "./components/Login";
import Game from "./components/Game";
import { LanguageProvider } from "./utils/context/LanguageContext";

function App() {
  //states for pages
  const [index, setIndex] = useState(true);
  const [builder, setBuilder] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [armorPage, setArmorPage] = useState(null);
  const [weaponPage, setWeaponPage] = useState(null);
  //states for API results
  const [armors, setArmors] = useState(null);
  const [weapons, setWeapons] = useState(null);
  const [charms, setCharms] = useState(null);
  const [skills, setSkills] = useState(null);
  //states for Equipments
  const [head, setHead] = useState(null);
  const [chest, setChest] = useState(null);
  const [gloves, setGloves] = useState(null);
  const [waist, setWaist] = useState(null);
  const [legs, setLegs] = useState(null);
  const [weapon, setWeapon] = useState(null);
  // States for User stats
  const [baseDefense, setBaseDefense] = useState(0);
  const [maxDefense, setMaxDefense] = useState(0);
  const [augDefense, setAugDefense] = useState(0);
  const [resFire, setResFire] = useState(0);
  const [resWater, setResWater] = useState(0);
  const [resIce, setResIce] = useState(0);
  const [resThunder, setResThunder] = useState(0);
  const [resDragon, setResDragon] = useState(0);
  const [attack, setAttack] = useState(0);
  const [elementalAttack, setElementalAttack] = useState([]);

  //Function for API

  const handleApi = () => {
    setIsLoading(true);

    Promise.all([armorApi(), weaponApi(), charmsApi(), skillsApi()]).then(
      () => {
        setIsLoading(false);
        setIndex(false);
        setBuilder(true);
      }
    );
  };

  const handleIndex = () => {
    setIndex(true);
    setIsLoading(false);
  };

  const armorApi = () => {
    return axios
      .get("https://mhw-db.com/armor")
      .then((response) => {
        setArmors(response);
      })
      .catch((err) => {
        throw new Error("Problem whith API to download armor content : ", err);
      });
  };

  const weaponApi = () => {
    return axios
      .get("https://mhw-db.com/weapons")
      .then((response) => {
        setWeapons(response);
      })
      .catch((err) => {
        throw new Error("Problem whith API to download weapon content : ", err);
      });
  };

  const charmsApi = () => {
    return axios
      .get("https://mhw-db.com/charms")
      .then((response) => {
        setCharms(response);
      })
      .catch((err) => {
        throw new Error("Problem whith API to download charms content : ", err);
      });
  };

  const skillsApi = () => {
    return axios
      .get("https://mhw-db.com/skills")
      .then((response) => {
        setSkills(response);
      })
      .catch((err) => {
        throw new Error("Problem whith API to download skills content : ", err);
      });
  };

  // Functions for stats

  function addDefStats(armor, pastArmor, action) {
    if (pastArmor !== null) {
      addDefense(
        action,
        pastArmor.defense.base,
        pastArmor.defense.max,
        pastArmor.defense.augmented,
        armor.defense.base,
        armor.defense.max,
        armor.defense.augmented
      );
      addRes(
        action,
        pastArmor.resistances.fire,
        pastArmor.resistances.water,
        pastArmor.resistances.ice,
        pastArmor.resistances.thunder,
        pastArmor.resistances.dragon,
        armor.resistances.fire,
        armor.resistances.water,
        armor.resistances.ice,
        armor.resistances.thunder,
        armor.resistances.dragon
      );
    } else {
      addDefense(
        action,
        null,
        null,
        null,
        armor.defense.base,
        armor.defense.max,
        armor.defense.augmented
      );
      addRes(
        action,
        null,
        null,
        null,
        null,
        null,
        armor.resistances.fire,
        armor.resistances.water,
        armor.resistances.ice,
        armor.resistances.thunder,
        armor.resistances.dragon
      );
    }
  }

  function addDefense(
    action,
    pastBaseDef,
    pastMaxDef,
    pastAugDef,
    baseDef,
    maxDef,
    augDef
  ) {
    action === "add"
      ? setBaseDefense(baseDefense + baseDef)
      : action === "less"
      ? setBaseDefense(baseDefense - pastBaseDef + baseDef)
      : null;
    action === "add"
      ? setMaxDefense(maxDefense + maxDef)
      : action === "less"
      ? setMaxDefense(maxDefense - pastMaxDef + maxDef)
      : null;
    action === "add"
      ? setAugDefense(augDefense + augDef)
      : action === "less"
      ? setAugDefense(augDefense - pastAugDef + augDef)
      : null;
  }

  function addRes(
    action,
    pastFire,
    pastWater,
    pastIce,
    pastThunder,
    pastDragon,
    fire,
    water,
    ice,
    thunder,
    dragon
  ) {
    action === "add"
      ? setResFire(resFire + fire)
      : action === "less"
      ? setResFire(resFire - pastFire + fire)
      : null;
    action === "add"
      ? setResWater(resWater + water)
      : action === "less"
      ? setResWater(resWater - pastWater + water)
      : null;
    action === "add"
      ? setResIce(resIce + ice)
      : action === "less"
      ? setResIce(resIce - pastIce + ice)
      : null;
    action === "add"
      ? setResThunder(resThunder + thunder)
      : action === "less"
      ? setResThunder(resThunder - pastThunder + thunder)
      : null;
    action === "add"
      ? setResDragon(resDragon + dragon)
      : action === "less"
      ? setResDragon(resDragon - pastDragon + dragon)
      : null;
  }

  // Functions on click

  const handleArmor = (armor, type) => {
    if (type === "head") {
      head !== null
        ? addDefStats(armor, head, "less")
        : addDefStats(armor, null, "add");
      setHead(armor);
    }
    if (type === "chest") {
      chest !== null
        ? addDefStats(armor, chest, "less")
        : addDefStats(armor, null, "add");
      setChest(armor);
    }
    if (type === "gloves") {
      gloves !== null
        ? addDefStats(armor, gloves, "less")
        : addDefStats(armor, null, "add");
      setGloves(armor);
    }
    if (type === "waist") {
      waist !== null
        ? addDefStats(armor, waist, "less")
        : addDefStats(armor, null, "add");
      setWaist(armor);
    }
    if (type === "legs") {
      legs !== null
        ? addDefStats(armor, legs, "less")
        : addDefStats(armor, null, "add");
      setLegs(armor);
    }
    setArmorPage(null);
  };

  const handleWeapon = (weapon) => {
    setWeapon(weapon);
    setAttack(weapon.attack.display);
    setElementalAttack(weapon.elements);
    setWeaponPage(null);
  };

  const closePage = () => {
    setArmorPage(null);
    setWeaponPage(null);
  };

  return (
    <LanguageProvider>
      <div>
        {index && (
          <div>
            <Login
              handleApi={handleApi}
              isLoading={isLoading}
              armors={armors}
              weapons={weapons}
              charms={charms}
              skills={skills}
            />
          </div>
        )}

        {builder && (
          <div className="globalContainer">
            <div className="title">
              <img
                src="./src/images/logo.png"
                alt="logo"
                onClick={handleIndex}
              />
            </div>
            <ItemShit
              head={head}
              chest={chest}
              gloves={gloves}
              waist={waist}
              legs={legs}
              weapon={weapon}
              setArmorPage={setArmorPage}
              setWeaponPage={setWeaponPage}
            />
            <div className="statContainer">
              <Attack attack={attack} elementalAttack={elementalAttack} />
              <Defense
                baseDefense={baseDefense}
                maxDefense={maxDefense}
                augDefense={augDefense}
                resFire={resFire}
                resWater={resWater}
                resIce={resIce}
                resThunder={resThunder}
                resDragon={resDragon}
              />
            </div>
            {armorPage && (
              <Armors
                armors={armors}
                handleArmor={handleArmor}
                type={armorPage}
                closePage={closePage}
              />
            )}
            {weaponPage && (
              <Weapons
                weapons={weapons}
                handleWeapon={handleWeapon}
                closePage={closePage}
              />
            )}
          </div>
        )}

        {playing && (
          <div className="globalContainer">
            <Game />
          </div>
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;
