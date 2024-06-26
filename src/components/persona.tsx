import { PersonaConfig } from "@/config";
import Image from "next/image";
import React from "react";

export default function Persona() {
    const persona: Persona = PersonaConfig;
    return (
      <div className="main-panel flex w-full h-96">
        <div className="flex flex-col introduce-header">
          <h1 className="main-name">{persona.Name}</h1>
          <h1 className="main-header">{persona.Tagline}</h1>
        </div>
        <Image
          src={persona.Photo}
          alt="Example Image"
          width={400}
          height={100}
          className="my-photo"
        />
      </div>
    );
}
