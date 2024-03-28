"use client";
import React, { useState } from "react";

export default function Header(props) {
  
  return (
    <main className="flex flex-row items-center justify-between h-20 p-4 w-full">
      <div>Seven</div>
      <div className="flex flex-row justify-between">
        <button className="py-4 px-8 bg-[green]">Login</button>
        <button className="py-4 px-8">Register</button>
      </div>
    </main>
  );
}
