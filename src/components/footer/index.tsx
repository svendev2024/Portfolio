"use client";
import React, { useState } from "react";

import './footer.css'

export default function Footer() {
  
  return (
    <main className="flex flex-row justify-between p-16 w-full bg-[black] border-t-4">
      <div className="w-1/2 flex flex-col">
        <div className="flex flex-row">
          <div className="text-white w-1/3">Disocrd:</div>
          <div className="text-white w-1/3">kenjiimai</div>
        </div>
        <div className="flex flex-row">
          <div className="text-white w-1/3">Gmail:</div>
          <div className="text-white w-1/3">kenjiimai123@gmail.com</div>
        </div>
        <div className="flex flex-row">
          <div className="text-white w-1/3">Github:</div>
          <div className="text-white w-1/3">https://github.com/svendev2024</div>
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-4">
        <h3 className="text-white">Contact me</h3>
        <textarea rows={5} className="p-2"></textarea>
      </div>
  
    </main>
  );
}
