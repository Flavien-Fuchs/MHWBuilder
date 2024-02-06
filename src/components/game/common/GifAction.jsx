import React from "react";

function GifAction({ path }) {
  return (
    <div>
      <img src={path} alt="Votre GIF" />
    </div>
  );
}

export default GifAction;
