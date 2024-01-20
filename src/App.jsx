import { useState } from 'react'
import axios from 'axios'
import './App.css'
import Armors from './components/Armors'
import ItemShit from './components/ItemShit'
import Defense from './components/Defense'
import Login from './components/Login'

function App() {

  //Appel API

  const [index, setIndex] = useState(true);
  const [armors, setArmors] = useState(null);
  const [weapons, setWeapons] = useState(null);
  const [charms, setCharms] = useState(null);


  async function Api() {
    const api1 = await ArmorApi()
    const api2 = await WeaponApi()
    const api3 = await CharmsApi()

    if (armors) setIndex(false)

  }

  function ArmorApi() {
    axios
      .get('https://mhw-db.com/armor')
      .then((response) => {
        setArmors(response)
      })
    return true
  }

  function WeaponApi() {
    axios
      .get('https://mhw-db.com/weapons')
      .then((response) => {
        setWeapons(response)
      })
    return true;
  }

  function CharmsApi() {
    axios
      .get('https://mhw-db.com/charms')
      .then((response) => {
        setCharms(response)
      })
    return true;
  }





  // 

  const [head, setHead] = useState(null)
  const [chest, setChest] = useState(null)
  const [gloves, setGloves] = useState(null)
  const [waist, setWaist] = useState(null)
  const [legs, setLegs] = useState(null)

  const [armurPage, setArmurPage] = useState(null)

  // States for stats

  const [baseDefense, setBaseDefense] = useState(0)
  const [maxDefense, setMaxDefense] = useState(0)
  const [AugDefense, setAugDefense] = useState(0)

  const [resFire, setResFire] = useState(0)
  const [resWater, setResWater] = useState(0)
  const [resIce, setResIce] = useState(0)
  const [resThunder, setResThunder] = useState(0)
  const [resDragon, setResDragon] = useState(0)


  // Functions for stats

  function addStats(armor, pastArmor, action) {
    if (pastArmor !== null) {
      addDefense(action, pastArmor.defense.base, pastArmor.defense.max, pastArmor.defense.augmented, armor.defense.base, armor.defense.max, armor.defense.augmented)
      addRes(action, pastArmor.resistances.fire, pastArmor.resistances.water, pastArmor.resistances.ice, pastArmor.resistances.thunder, pastArmor.resistances.dragon, armor.resistances.fire, armor.resistances.water, armor.resistances.ice, armor.resistances.thunder, armor.resistances.dragon)
    } else {
      addDefense(action, null, null, null, armor.defense.base, armor.defense.max, armor.defense.augmented)
      addRes(action, null, null, null, null, null, armor.resistances.fire, armor.resistances.water, armor.resistances.ice, armor.resistances.thunder, armor.resistances.dragon)
    }
  }

  function addDefense(action, pastBaseDef, pastMaxDef, pastAugDef, baseDef, maxDef, augDef) {
    action === "add" ? setBaseDefense(baseDefense + baseDef) : ((action === "less") ? setBaseDefense(baseDefense - pastBaseDef + baseDef) : null)
    action === "add" ? setMaxDefense(maxDefense + maxDef) : ((action === "less") ? setMaxDefense(maxDefense - pastMaxDef + maxDef) : null)
    action === "add" ? setAugDefense(AugDefense + augDef) : ((action === "less") ? setAugDefense(AugDefense - pastAugDef + augDef) : null)
  }

  function addRes(action, pastFire, pastWater, pastIce, pastThunder, pastDragon, fire, water, ice, thunder, dragon) {
    action === "add" ? setResFire(resFire + fire) : ((action === "less") ? setResFire(resFire - fire) : null)
    action === "add" ? setResWater(resWater + water) : ((action === "less") ? setResWater(resWater - water) : null)
    action === "add" ? setResIce(resIce + ice) : ((action === "less") ? setResIce(resIce + ice) : null)
    action === "add" ? setResThunder(resThunder + thunder) : ((action === "less") ? setResThunder(resThunder - thunder) : null)
    action === "add" ? setResDragon(resDragon + dragon) : ((action === "less") ? setResDragon(resDragon - dragon) : null)
  }

  // Functions

  const handleArmor = (armor, type) => {
    if (type === "head") {
      (head !== null) ? addStats(armor, head, "less") : addStats(armor, null, "add")
      setHead(armor)
    }
    if (type === "chest") {
      chest !== null ? addStats(armor, chest, "less") : addStats(armor, null, "add")
      setChest(armor)
    }
    if (type === "gloves") {
      gloves !== null ? addStats(armor, gloves, "less") : addStats(armor, null, "add")
      setGloves(armor)
    }
    if (type === "waist") {
      waist !== null ? addStats(armor, waist, "less") : addStats(armor, null, "add")
      setWaist(armor)
    }
    if (type === "legs") {
      legs !== null ? addStats(armor, legs, "less") : addStats(armor, null, "add")
      setLegs(armor)
    }
    setArmurPage(null)
  }

  const closePage = () => {
    setArmurPage(null)
  }

  return (
    <div>
      {index && <div> <Login Api={Api} /> </div>}

      {!index && <div className='globalContainer'>
        <div className='title'><img src="./src/images/logo.png" alt="logo" /></div>
        <ItemShit head={head} chest={chest} gloves={gloves} waist={waist} legs={legs} setArmurPage={setArmurPage} />
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
        {armurPage && <Armors armors={armors} handleArmor={handleArmor} type={armurPage} closePage={closePage} />}
      </div>}
    </div>
  )
}

export default App
