"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Services() {
  const router = useRouter();

  const handleClick = () => {
    console.log("click to go Home");
    router.push("/");
  };

  return (
    <div>
      <h1>Services</h1>
      <button onClick={handleClick}>click to Home</button>
    </div>
  );
}

export default Services;
