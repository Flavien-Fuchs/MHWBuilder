import { useState } from "react";
import axios from "axios";
import "./App.css";
import Armors from "./components/Armors";
import Weapons from "./components/Weapons";
import ItemShit from "./components/ItemShit";
import Defense from "./components/Defense";
import Attack from "./components/Attack";
import Login from "./components/Login";
import { LanguageProvider } from "./utils/context/LanguageContext";

function App() {
  //Appel API

  const [index, setIndex] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [armors, setArmors] = useState(null);
  const [weapons, setWeapons] = useState(null);
  const [charms, setCharms] = useState(null);
  const [skills, setSkills] = useState(null);

  const handleApi = () => {
    setIsLoading(true);

    const promiseArmor = armorApi();
    const promiseWeapon = weaponApi();
    const promiseCharms = charmsApi();
    const promiseSkills = skillsApi();
    Promise.all([
      promiseArmor,
      promiseWeapon,
      promiseCharms,
      promiseSkills,
    ]).then(() => {
      setIndex(false);
    });
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

  //

  const [head, setHead] = useState(null);
  const [chest, setChest] = useState(null);
  const [gloves, setGloves] = useState(null);
  const [waist, setWaist] = useState(null);
  const [legs, setLegs] = useState(null);
  const [weapon, setWeapon] = useState(null);

  const [armurPage, setArmurPage] = useState(null);
  const [weaponPage, setWeaponPage] = useState(null);

  // States for stats

  const [baseDefense, setBaseDefense] = useState(0);
  const [maxDefense, setMaxDefense] = useState(0);
  const [AugDefense, setAugDefense] = useState(0);

  const [resFire, setResFire] = useState(0);
  const [resWater, setResWater] = useState(0);
  const [resIce, setResIce] = useState(0);
  const [resThunder, setResThunder] = useState(0);
  const [resDragon, setResDragon] = useState(0);

  const [attack, setAttack] = useState(0);
  const [elementalAttack, setElementalAttack] = useState(null);

  // Functions for stats

  function addDefStats(armor, pastArmor, action) {
    /* const prevArmorMax = pastArmor.defense.max */

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
      ? setAugDefense(AugDefense + augDef)
      : action === "less"
      ? setAugDefense(AugDefense - pastAugDef + augDef)
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

  // Functions

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
    setArmurPage(null);
  };

  const handleWeapon = (weapon) => {
    setWeapon(weapon);
    setAttack(weapon.attack.display);
    setElementalAttack(weapon.elements);
    setWeaponPage(null);
  };

  const closePage = () => {
    setArmurPage(null);
    setWeaponPage(null);
  };

  console.log(weapon);

  return (
    <LanguageProvider>
      <div>
        {index && (
          <div>
            <Login
              handleApi={handleApi}
              isLoading={isLoading}
              armor={armors}
              weapons={weapons}
              charms={charms}
              skills={skills}
            />
          </div>
        )}

        {!index && (
          <div className="globalContainer">
            <div className="title">
              <img src="./src/images/logo.png" alt="logo" />
            </div>
            <ItemShit
              head={head}
              chest={chest}
              gloves={gloves}
              waist={waist}
              legs={legs}
              weapon={weapon}
              setArmurPage={setArmurPage}
              setWeaponPage={setWeaponPage}
            />
            <div className="stat-container">
              <Attack attack={attack} elementalAttack={elementalAttack} />
              <Defense
                baseDefense={baseDefense}
                maxDefense={maxDefense}
                AugDefense={AugDefense}
                resFire={resFire}
                resWater={resWater}
                resIce={resIce}
                resThunder={resThunder}
                resDragon={resDragon}
              />
            </div>
            {armurPage && (
              <Armors
                armors={armors}
                handleArmor={handleArmor}
                type={armurPage}
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
      </div>
    </LanguageProvider>
  );
}

export default App;
