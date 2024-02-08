import "../css/Items.css";

// eslint-disable-next-line react/prop-types
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
export default ResistanceItem;
