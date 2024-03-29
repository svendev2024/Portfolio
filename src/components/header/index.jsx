"use client";
import React, { useState } from "react";

import './header.css'
export default function Header(props) {
  
  return (
    <main className="flex flex-row items-center justify-between h-20 p-4 w-full">
      <div className="ml-12 text-2xl">Seven</div>
      <div className="flex flex-row justify-between gap-12">
        <button className="py-4 px-8 bg-[#bebfbe] rounded auth">Login</button>
        <button className="py-4 px-8 bg-[#bebfbe] rounded auth">Register</button>
      </div>
    </main>
  );
}
