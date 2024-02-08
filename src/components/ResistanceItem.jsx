import "../css/Items.css";
import PropTypes from "prop-types";

function ResistanceItem({ iconSrc, altText, label, value }) {
  return (
    <div>
      <li>
        <img src={`./src/images/icons/${iconSrc}-icon.png`} alt={altText} />
        {label} : {value}
      </li>
    </div>
  );
}
ResistanceItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
export default ResistanceItem;
