import React from "react";
import legalizeClassName from "./legalizeClassName";

export default function KeyButton(props) {
  let child = props.children;
  let onKeyClick = props.onKeyClick;

  return (
    <button className={legalizeClassName(child)} value={child} onClick={onKeyClick}>
      {child}
    </button>
  );
}
