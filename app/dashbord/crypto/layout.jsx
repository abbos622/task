// layouts/MainLayout.js
import React from "react";
import Link from "next/link";
// import "./Dashboard.css"

const GiantsLayout = ({ children }) => {
  return (
    <div className="gi">
      <div>
        <h1>CRYPTO LIST</h1>
        <ul className="dashboard-men">
          <li>
            <Link href={"/dashbord/crypto/giants"}>Giants</Link>
          </li>
          <li>
            <Link href={"/dashbord/crypto/altcoins"}>ALTcoins</Link>
          </li>
            <main>{children}</main>
        </ul>
      </div>
    </div>
  );
};

export default GiantsLayout;
