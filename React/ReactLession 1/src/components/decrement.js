import React from "react";
import { useState } from "react";
function Decrement(props) {
  return (
    <div className="btn-box" onclick={props.Decrement}>
      +
    </div>
  );
}

export default Decrement;
