"use client";
import React, { useEffect } from "react";

const Sent = () => {
  useEffect(() => {
    (() => {
      setTimeout(() => {
        window.location.href = "/inbox";
      }, 800);
    })();
  }, []);

  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <h2 className="sub-title">Applaud sent!</h2>
    </main>
  );
};

export default Sent;
