import React from "react";

export default function Footer() {
  return (
    <div className="h-8 bg-white sticky bottom-0 w-screen hidden z-10 lg:flex justify-between px-2 self-center shadow-inner shadow-slate-300">
      <div className="self-center">
        <span className="text-[#4682B4] font-semibold text-sm mr-4">Health Saathi </span>
        <span className="text-xs font-mono">Copyright © 2024</span>
      </div>
      <div className="text-xs font-mono self-center">
        <span className="mx-1 hover:underline hover:underline-offset-2">About</span>
        <span className="mx-1 hover:underline hover:underline-offset-2">Terms of Use</span>
        <span className="mx-1 hover:underline hover:underline-offset-2">Privacy Policy</span>
        <span className="mx-1 hover:underline hover:underline-offset-2">Cookie Policy</span>
        <span className="mx-1 hover:underline hover:underline-offset-2">Copyright Policy</span>
        <span className="mx-1 hover:underline hover:underline-offset-2">Brand Policy</span>
        <span className="mx-1 hover:underline hover:underline-offset-2">Visitor Controls</span>
      </div>
    </div>
  );
}
