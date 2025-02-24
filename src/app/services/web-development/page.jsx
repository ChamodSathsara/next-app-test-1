"use client";
import { usePathname } from "next/navigation";
import React from "react";

function WebDevelopment() {
  const pathName = usePathname();
  const path = pathName.split("/", [3]);
  return (
    <div>
      WebDevelopment
      <h1>path : {path}</h1>
    </div>
  );
}

export default WebDevelopment;
