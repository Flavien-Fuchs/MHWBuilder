import { useState } from "react";
import axios from "axios";
import "./App.css";
import Armors from "./components/Armors";
import Weapons from "./components/Weapons";
import ItemSheet from "./components/ItemSheet";
import Defense from "./components/Defense";
import Attack from "./components/Attack";
import Login from "./components/Login";
import Game from "./components/Game";
import Skills from "./components/Skills";
import Charms from "./components/Charms";


function App() {
  //states for pages
  const [index, setIndex] = useState(true);
  const [builder, setBuilder] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [armorPage, setArmorPage] = useState(null);
  const [charmsPage, setCharmsPage] = useState(null);
  const [weaponPage, setWeaponPage] = useState(null);
  const [displayItem, setDisplayItem] = useState(null)
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
  const [charm, setCharm] = useState(null);
  // States for User stats
  const [health, setHealth] = useState(100);
  const [stamina, setStamina] = useState(100);
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
  const [affinity, setAffinity] = useState(0);
  const [criticalBoost, setCriticalBoost] = useState(125);
  const [sharpness, setSharpness] = useState([]);
  const [playerSkills, setPlayerSkills] = useState([]);


  //Function for API

  const handleApi = () => {
    setIsLoading(true);

    Promise.all([
      armorApi(),
      weaponApi(),
      charmsApi(),
      skillsApi(),
    ]).then(() => {
      setIsLoading(false);
      setIndex(false);
      setBuilder(true);
    });
  };

  const armorApi = () => {
    return axios
      .get("https://mhw-db.com/armor")
      .then((response) => {
        setArmors(response.data);
      })
      .catch((err) => {
        throw new Error("Problem whith API to download armor content : ", err);
      });
  };

  const weaponApi = () => {
    return axios
      .get("https://mhw-db.com/weapons")
      .then((response) => {
        setWeapons(response.data);
      })
      .catch((err) => {
        throw new Error("Problem whith API to download weapon content : ", err);
      });
  };

  const charmsApi = () => {
    return axios
      .get("https://mhw-db.com/charms")
      .then((response) => {
        setCharms(response.data);
      })
      .catch((err) => {
        throw new Error("Problem whith API to download charms content : ", err);
      });
  };

  const skillsApi = () => {
    return axios
      .get("https://mhw-db.com/skills")
      .then((response) => {
        setSkills(response.data);
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
      )

      addSkills(action, pastArmor.skills, armor.skills);
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
      addSkills(action, null, armor.skills);

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
    if (action === "add") {
      setBaseDefense(baseDefense + baseDef);
      setMaxDefense(maxDefense + maxDef);
      setAugDefense(augDefense + augDef);
    }

    if (action === "less") {
      setBaseDefense(baseDefense - pastBaseDef + baseDef);
      setMaxDefense(maxDefense - pastMaxDef + maxDef);
      setAugDefense(augDefense - pastAugDef + augDef);
    }
    if (action === "delete") {
      setBaseDefense(baseDefense - pastBaseDef);
      setMaxDefense(maxDefense - pastMaxDef);
      setAugDefense(augDefense - pastAugDef);
    }
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

    if (action === "add") {
      setResFire(resFire + fire);
      setResWater(resWater + water);
      setResIce(resIce + ice);
      setResThunder(resThunder + thunder)
      setResDragon(resDragon + dragon)
    }
    if (action === "less") {
      setResFire(resFire - pastFire + fire);
      setResWater(resWater - pastWater + water);
      setResIce(resIce - pastIce + ice);
      setResThunder(resThunder - pastThunder + thunder)
      setResDragon(resDragon - pastDragon + dragon)
    }
    if (action === "delete") {
      setResFire(resFire - pastFire);
      setResWater(resWater - pastWater);
      setResIce(resIce - pastIce);
      setResThunder(resThunder - pastThunder)
      setResDragon(resDragon - pastDragon)
    }

  }

  function addSkills(action, pastSkills, selectSkills) {

    let newPlayerSkills = [...playerSkills]

    if (action === "less" || action === "delete") {
      if (pastSkills.length > 0) {

        pastSkills.map(pastSkill => {
          newPlayerSkills = newPlayerSkills.map(newPlayerSkill => {
            if (newPlayerSkill.skillName === pastSkill.skillName) {
              if (newPlayerSkill.level - pastSkill.level > 0) {
                return {
                  ...newPlayerSkill,
                  level: newPlayerSkill.level - pastSkill.level
                }
              }
              else {
                return null
              }
            }
            else {
              return newPlayerSkill
            }

          })
        })
      }
    }

    function removeValue(value, index, arr) {
      if (value === null) {
        arr.splice(index, 1);
        return true;
      }
      return false;
    }
    newPlayerSkills.filter(removeValue)

    if (selectSkills.length > 0 && action !== "delete") {
      selectSkills.map(selectSkill => {
        if (newPlayerSkills.some(newPlayerSkill => newPlayerSkill.skillName === selectSkill.skillName)) {

          newPlayerSkills = newPlayerSkills.map(newPlayerSkill => {
            if (newPlayerSkill.skillName === selectSkill.skillName) {

              return {
                ...newPlayerSkill,
                level: newPlayerSkill.level + selectSkill.level
              }
            }
            else {
              return newPlayerSkill
            }
          })
        } else {
          newPlayerSkills.push(selectSkill)
        }
      })
    }
    setPlayerSkills(newPlayerSkills)
  }


  // Functions on click

  const deleteItem = (selectedStuff, type) => {
    switch (type) {
      case "head":
        addDefStats(selectedStuff, selectedStuff, "delete")
        setHead(null)
        break;
      case "chest":
        addDefStats(selectedStuff, selectedStuff, "delete")
        setChest(null)
        break;
      case "gloves":
        addDefStats(selectedStuff, selectedStuff, "delete")
        setGloves(null)
        break;
      case "waist":
        addDefStats(selectedStuff, selectedStuff, "delete")
        setWaist(null)
        break;
      case "legs":
        addDefStats(selectedStuff, selectedStuff, "delete")
        setLegs(null)
        break;
      case "weapon":
        setWeapon(null)
        setAttack(0)
        setElementalAttack([])
        setAffinity(0)
        setCriticalBoost(125)
        setSharpness([])
        break;
      case "charm":
        addSkills("delete", selectedStuff.ranks[selectedStuff.ranks.length - 1].skills, selectedStuff.ranks[selectedStuff.ranks.length - 1].skills)
        setCharm(null)
        break;
      default:
        break;
    }
    setDisplayItem(null)
  }

  const handleArmor = (selectedArmor, type) => {
    let armor = selectedArmor
    switch (type) {
      case "head":
        head !== null
          ? addDefStats(armor, head, "less")
          : addDefStats(armor, null, "add");
        setHead(armor);
        break;
      case "chest":
        chest !== null
          ? addDefStats(armor, chest, "less")
          : addDefStats(armor, null, "add");
        setChest(armor);
        break;
      case "gloves":
        gloves !== null
          ? addDefStats(armor, gloves, "less")
          : addDefStats(armor, null, "add");
        setGloves(armor);
        break;
      case "waist":
        waist !== null
          ? addDefStats(armor, waist, "less")
          : addDefStats(armor, null, "add");
        setWaist(armor);
        break;
      case "legs":
        legs !== null
          ? addDefStats(armor, legs, "less")
          : addDefStats(armor, null, "add");
        setLegs(armor);
        break;
      default:
        break;
    }
    setArmorPage(null);
  };

  const handleWeapon = (weapon) => {
    setWeapon(weapon);
    setAttack(weapon.attack.display);
    setElementalAttack(weapon.elements);
    weapon.attributes.affinity ? setAffinity(weapon.attributes.affinity) : setAffinity(0);
    weapon.durability ? setSharpness(weapon.durability[0]) : setSharpness([]);
    setWeaponPage(null);
  };

  const handleCharms = (selectCharm) => {
    setCharm(selectCharm)
    charm ? (
      addSkills("less", charm.ranks[charm.ranks.length - 1].skills, selectCharm.ranks[charm.ranks.length - 1].skills)
    ) : (
      addSkills("add", null, selectCharm.ranks[selectCharm.ranks.length - 1].skills)
    )
    setCharmsPage(null);
  }

  const closePage = () => {
    setArmorPage(null);
    setWeaponPage(null);
    setCharmsPage(null);
  };

  /* console.log(playerSkills) */

  return (
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
        <div className="body">
          <div className="title">
            <img src="./src/images/logo.png" alt="logo" />
          </div>
          <div className="globalContainer">
            <ItemSheet
              head={head}
              chest={chest}
              gloves={gloves}
              waist={waist}
              legs={legs}
              weapon={weapon}
              charm={charm}
              setArmorPage={setArmorPage}
              setWeaponPage={setWeaponPage}
              setCharmsPage={setCharmsPage}
              deleteItem={deleteItem}
              displayItem={displayItem}
              setDisplayItem={setDisplayItem}
            />
            <div className="statContainer">
              <Attack
                attack={attack}
                elementalAttack={elementalAttack}
                affinity={affinity}
                criticalBoost={criticalBoost}
                sharpness={sharpness}
              />
              <Defense
                health={health}
                stamina={stamina}
                baseDefense={baseDefense}
                maxDefense={maxDefense}
                augDefense={augDefense}
                resFire={resFire}
                resWater={resWater}
                resIce={resIce}
                resThunder={resThunder}
                resDragon={resDragon}
              />
              <Skills playerSkills={playerSkills} skills={skills} />
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
            {charmsPage && (
              <Charms
                charms={charms}
                handleCharms={handleCharms}
                closePage={closePage}
              />
            )}
          </div>
        </div>
      )}

      {playing && (
        <div className="globalContainer">
          <Game />
        </div>
      )}
    </div>
  );
}

export default App;
