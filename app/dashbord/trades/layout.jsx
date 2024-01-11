// layouts/MainLayout.js
import React from "react";
import Link from "next/link";
// import "./Dashboard.css"

const SingleLayout = ({ children }) => {
  return (
    <div className="gi">
        {children}
    </div>
  );
};

export default SingleLayout;
