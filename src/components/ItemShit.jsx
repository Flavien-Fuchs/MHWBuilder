/* eslint-disable react/prop-types */
import "../css/ItemShit.css";

function ItemShit({
  head,
  chest,
  gloves,
  waist,
  legs,
  weapon,
  setArmurPage,
  setWeaponPage,
}) {
  return (
    <div className="item-shit">
      <div className="part">
        <div
          className="Slot head"
          onClick={() => {
            setArmurPage("head");
          }}
        >

          {head &&
            (!head.assets ? (
              <img src="./src/images/nullArmor.png" alt="armor" />
            ) : head.assets.imageMale ? (
              <img src={head.assets.imageMale} alt="head" />
            ) : (
              <img src={head.assets.imageFemale} alt="head" />
            ))}
        </div>
      </div>
      <div className="part">
        <div className="Slot weapon" onClick={setWeaponPage}>

          {weapon &&
            (!weapon.assets ? (
              <img src="./src/images/nullArmor.png" alt="weapon" />
            ) : weapon.assets.image ? (
              <img src={weapon.assets.image} alt="legs" />
            ) : (
              <img src={weapon.assets.icon} alt="legs" />
            ))}
        </div>
        <div
          className="Slot chest"
          onClick={() => {
            setArmurPage("chest");
          }}
        >

          {chest &&
            (!chest.assets ? (
              <img src="./src/images/nullArmor.png" alt="armor" />
            ) : chest.assets.imageMale ? (
              <img src={chest.assets.imageMale} alt="chest" />
            ) : (
              <img src={chest.assets.imageFemale} alt="chest" />
            ))}
        </div>
        <div
          className="Slot gloves"
          onClick={() => {
            setArmurPage("gloves");
          }}
        >

          {gloves &&
            (!gloves.assets ? (
              <img src="./src/images/nullArmor.png" alt="armor" />
            ) : gloves.assets.imageMale ? (
              <img src={gloves.assets.imageMale} alt="gloves" />
            ) : (
              <img src={gloves.assets.imageFemale} alt="gloves" />
            ))}
        </div>
      </div>
      <div className="part">
        <div
          className="Slot waist"
          onClick={() => {
            setArmurPage("waist");
          }}
        >

          {waist &&
            (!waist.assets ? (
              <img src="./src/images/nullArmor.png" alt="armor" />
            ) : waist.assets.imageMale ? (
              <img src={waist.assets.imageMale} alt="waist" />
            ) : (
              <img src={waist.assets.imageFemale} alt="waist" />
            ))}
        </div>
      </div>
      <div className="part">
        <div
          className="Slot legs"
          onClick={() => {
            setArmurPage("legs");
          }}
        >

          {legs &&
            (!legs.assets ? (
              <img src="./src/images/nullArmor.png" alt="armor" />
            ) : legs.assets.imageMale ? (
              <img src={legs.assets.imageMale} alt="legs" />
            ) : (
              <img src={legs.assets.imageFemale} alt="legs" />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ItemShit;
