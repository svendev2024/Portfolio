import Image from "next/image";
import "./component.css"
import React from "react";

export default function Skill(props) {
  return (
    <div className="skill-list text-2xl p-4 rounded-md border-2 border-amber-300 ">{props.skill}</div>
  );
}
