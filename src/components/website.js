import Image from "next/image";
import Link from "next/link";
import "./component.css"
import Link from "next/link";

export default function Website(props) {
  return (
    <Link className="skill-list text-2xl p-4 rounded-md border-2 border-amber-300 ">{props.skill}</Link>
  );
}
