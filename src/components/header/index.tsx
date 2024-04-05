"use client";
import React, { useState } from "react";

import './header.css'

interface HeaderProps {
  
}

export default function Header(props: HeaderProps) {
  
  return (
    <main className="flex flex-row items-center justify-between h-20 p-8 w-full bg-[black] border-b-4">
      <div className="ml-12 text-2xl text-[white]">Seven</div>
      <div className="flex flex-row justify-between gap-12">
        <button className="py-4 px-8 bg-[#bebfbe] rounded auth">Login</button>
        <button className="py-4 px-8 bg-[#bebfbe] rounded auth">Register</button>
      </div>
    </main>
  );
}
