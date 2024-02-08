import PropTypes from "prop-types";
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
  setBuilder,
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
        setBuilder={setBuilder}
        toggleDisplayItem={toggleDisplayItem}
        deleteItem={deleteItem}
      />}
      <div className="part">
        <ItemHead head={head} toggleDisplayItem={toggleDisplayItem} setArmorPage={setArmorPage} setBuilder={setBuilder} />
        <ItemCharm charm={charm} toggleDisplayItem={toggleDisplayItem} setCharmsPage={setCharmsPage} setBuilder={setBuilder} />
      </div>

      <div className="part">
        <ItemWeapon weapon={weapon} toggleDisplayItem={toggleDisplayItem} setWeaponPage={setWeaponPage} setBuilder={setBuilder} />
        <ItemChest chest={chest} toggleDisplayItem={toggleDisplayItem} setArmorPage={setArmorPage} setBuilder={setBuilder} />
        <ItemGloves gloves={gloves} toggleDisplayItem={toggleDisplayItem} setArmorPage={setArmorPage} setBuilder={setBuilder} />
      </div>

      <div className="part">
        <ItemWaist waist={waist} toggleDisplayItem={toggleDisplayItem} setArmorPage={setArmorPage} setBuilder={setBuilder} />
      </div>

      <div className="part">
        <ItemLegs legs={legs} toggleDisplayItem={toggleDisplayItem} setArmorPage={setArmorPage} setBuilder={setBuilder} />
      </div>

    </div>
  );
}

ItemSheet.propTypes = {
  head: PropTypes.string.isRequired,
  chest: PropTypes.string.isRequired,
  gloves: PropTypes.string.isRequired,
  waist: PropTypes.string.isRequired,
  legs: PropTypes.string.isRequired,
  weapon: PropTypes.string.isRequired,
  charm: PropTypes.string.isRequired,
  setArmorPage: PropTypes.func.isRequired,
  setWeaponPage: PropTypes.func.isRequired,
  setCharmsPage: PropTypes.func.isRequired,
  setBuilder: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  displayItem: PropTypes.string,
  setDisplayItem: PropTypes.func.isRequired,
};

export default ItemSheet;
