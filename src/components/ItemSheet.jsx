/* eslint-disable react/prop-types */
import "../css/ItemSheet.css";
import ItemSheetSingle from "./ItemSheetSingle";
import { useState } from "react";



function ItemSheet({
  head,
  chest,
  gloves,
  waist,
  legs,
  weapon,
  setArmorPage,
  setWeaponPage,
  deleteItem
}) {
  const [displayItem, setDisplayItem] = useState(null)

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
        setArmorPage={setArmorPage}
        setWeaponPage={setWeaponPage}
        toggleDisplayItem={toggleDisplayItem}
        deleteItem={deleteItem}
      />}
      <div className="part">
        {head ?
          (
            <div className="slot head" onClick={() => { toggleDisplayItem("head") }}>
              {(!head.assets ? (
                <img src="./src/images/nullArmor.png" alt="armor" />
              ) : head.assets.imageMale ? (
                <img src={head.assets.imageMale} alt="head" />
              ) : (
                <img src={head.assets.imageFemale} alt="head" />
              ))}
            </div>
          ) : (

            <div className="slot head" onClick={() => { setArmorPage("head") }}>
            </div>
          )}
      </div>

      <div className="part">

        {weapon ?
          (
            <div className="slot weapon" onClick={() => toggleDisplayItem("weapon")}>
              {(!weapon.assets ? (
                <img src="./src/images/nullArmor.png" alt="weapon" />
              ) : weapon.assets.image ? (
                <img src={weapon.assets.image} alt="legs" />
              ) : (
                <img src={weapon.assets.icon} alt="legs" />
              ))}
            </div>
          ) : (
            <div className="slot weapon" onClick={setWeaponPage}>
            </div>)
        }

        {chest ? (
          <div className="slot chest" onClick={() => { toggleDisplayItem("chest") }}>
            {(!chest.assets ? (
              <img src="./src/images/nullArmor.png" alt="armor" />
            ) : chest.assets.imageMale ? (
              <img src={chest.assets.imageMale} alt="chest" />
            ) : (
              <img src={chest.assets.imageFemale} alt="chest" />
            ))}
          </div>
        ) : (
          <div className="slot chest" onClick={() => { setArmorPage("chest") }}>
          </div>
        )}

        {gloves ? (
          <div className="slot gloves" onClick={() => { toggleDisplayItem("gloves"); }}>
            {(!gloves.assets ? (
              <img src="./src/images/nullArmor.png" alt="armor" />
            ) : gloves.assets.imageMale ? (
              <img src={gloves.assets.imageMale} alt="gloves" />
            ) : (
              <img src={gloves.assets.imageFemale} alt="gloves" />
            ))}
          </div>
        ) : (
          <div className="slot gloves" onClick={() => { setArmorPage("gloves"); }}>
          </div>
        )}
      </div>

      <div className="part">

        {waist ? (
          <div className="slot waist" onClick={() => { toggleDisplayItem("waist"); }}>
            {(!waist.assets ? (
              <img src="./src/images/nullArmor.png" alt="armor" />
            ) : waist.assets.imageMale ? (
              <img src={waist.assets.imageMale} alt="waist" />
            ) : (
              <img src={waist.assets.imageFemale} alt="waist" />
            ))}
          </div>
        ) : (<div className="slot waist" onClick={() => { setArmorPage("waist"); }}>
        </div>
        )}

      </div>
      <div className="part">

        {legs ? (
          <div className="slot legs" onClick={() => { toggleDisplayItem("legs"); }}>
            {(!legs.assets ? (
              <img src="./src/images/nullArmor.png" alt="armor" />
            ) : legs.assets.imageMale ? (
              <img src={legs.assets.imageMale} alt="legs" />
            ) : (
              <img src={legs.assets.imageFemale} alt="legs" />
            ))}
          </div>
        ) : (
          <div className="slot legs" onClick={() => { setArmorPage("legs"); }}>
          </div>
        )}

      </div>
    </div>
  );
}

export default ItemSheet;
