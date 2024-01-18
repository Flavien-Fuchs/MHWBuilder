import { useState } from 'react'
import './App.css'
import Armors from './components/Armors'
import ItemShit from './components/ItemShit'
import Defense from './components/Defense'

function App() {

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

  function addStats(armor) {
    addDefense(armor.defense.base, armor.defense.max, armor.defense.augmented)
    addRes(armor.resistances.fire, armor.resistances.water, armor.resistances.ice, armor.resistances.thunder, armor.resistances.dragon,)
  }

  function addDefense(baseDef, maxDef, augDef) {
    setBaseDefense(baseDef)
    setMaxDefense(maxDef)
    setAugDefense(augDef)
  }

  function addRes(fire, water, ice, thunder, dragon) {
    setResFire(fire)
    setResWater(water)
    setResIce(ice)
    setResThunder(thunder)
    setResDragon(dragon)
  }

  function lessStats(armor) {
    lessDefense(armor.defense.base, armor.defense.max, armor.defense.augmented)
    lessRes(armor.resistances.fire, armor.resistances.water, armor.resistances.ice, armor.resistances.thunder, armor.resistances.dragon,)

  }

  function lessDefense(baseDef, maxDef, augDef) {
    setBaseDefense(baseDefense - baseDef)
    setMaxDefense(maxDefense - maxDef)
    setAugDefense(AugDefense - augDef)
  }

  function lessRes(fire, water, ice, thunder, dragon) {
    setResFire(resFire - fire)
    setResWater(resWater - water)
    setResIce(resIce - ice)
    setResThunder(resThunder - thunder)
    setResDragon(resDragon - dragon)
  }

  // Functions

  const handleArmor = (armor, type) => {
    if (type === "head") {
      if (head) lessStats(armor)
      setHead(armor)
    }
    if (type === "chest") {
      if (chest) lessStats(armor)
      setChest(armor)
    }
    if (type === "gloves") {
      if (gloves) lessStats(armor)
      setGloves(armor)
    }
    if (type === "waist") {
      if (waist) lessStats(armor)
      setWaist(armor)
    }
    if (type === "legs") {
      if (legs) lessStats(armor)
      setLegs(armor)
    }
    setArmurPage(null)
    addStats(armor)
  }

  const closePage = () => {
    setArmurPage(null)
  }

  return (
    <div className='globalContainer'>
      <h1>MHWorld Builder</h1>
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
      {armurPage && <Armors handleArmor={handleArmor} type={armurPage} closePage={closePage} />}
    </div>
  )
}

export default App
