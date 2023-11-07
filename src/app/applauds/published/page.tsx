"use client";
import React, { useEffect } from "react";

const Published = () => {
  useEffect(() => {
    // Set a meta refresh tag to trigger a redirect after half a second
    const metaRefresh = document.createElement("meta");
    metaRefresh.setAttribute("http-equiv", "refresh");
    metaRefresh.setAttribute("content", "0; url=" + document.referrer);
    document.head.appendChild(metaRefresh);

    // Remove the meta refresh tag after half a second to prevent infinite redirects
    setTimeout(() => {
      document.head.removeChild(metaRefresh);
    }, 500);
  }, []);

  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <h2>Applaud published!</h2>
    </main>
  );
};

export default Published;
