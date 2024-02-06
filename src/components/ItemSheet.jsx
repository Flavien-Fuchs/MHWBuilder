/* eslint-disable react/prop-types */
import "../css/ItemSheet.css";
import ItemSheetSingle from "./ItemSheetSingle";
import ItemCharm from "./Parts/ItemCharm";
import ItemChest from "./Parts/ItemChest";
import ItemGloves from "./Parts/ItemGloves";
import ItemHead from "./Parts/ItemHead";
import ItemLegs from "./Parts/ItemLegs";
import ItemWaist from "./Parts/ItemWaist";
import ItemWeapon from "./Parts/ItemWeapon";



function ItemSheet({
  head,
  chest,
  gloves,
  waist,
  legs,
  weapon,
  charm,
  setArmorPage,
  setWeaponPage,
  setCharmsPage,
  deleteItem,
  displayItem,
  setDisplayItem
}) {

  const toggleDisplayItem = (type) => {
    setDisplayItem(type)
  }

  return (
    <div className="itemShit">
      {displayItem && <ItemSheetSingle
        type={displayItem}
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
        toggleDisplayItem={toggleDisplayItem}
        deleteItem={deleteItem}
      />}
      <div className="part">
        <ItemHead head={head} toggleDisplayItem={toggleDisplayItem} setArmorPage={setArmorPage} />
        <ItemCharm charm={charm} toggleDisplayItem={toggleDisplayItem} setCharmsPage={setCharmsPage} />
      </div>

      <div className="part">
        <ItemWeapon weapon={weapon} toggleDisplayItem={toggleDisplayItem} setWeaponPage={setWeaponPage} />
        <ItemChest chest={chest} toggleDisplayItem={toggleDisplayItem} setArmorPage={setArmorPage} />
        <ItemGloves gloves={gloves} toggleDisplayItem={toggleDisplayItem} setArmorPage={setArmorPage} />
      </div>

      <div className="part">
        <ItemWaist waist={waist} toggleDisplayItem={toggleDisplayItem} setArmorPage={setArmorPage} />
      </div>

      <div className="part">
        <ItemLegs legs={legs} toggleDisplayItem={toggleDisplayItem} setArmorPage={setArmorPage} />
      </div>

    </div>
  );
}

export default ItemSheet;
