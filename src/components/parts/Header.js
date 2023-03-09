import React, { useState } from "react";

function Header() {
  return (
    <div className="main-header">
      <div className="header-container">
        <div className="header-flex">
          <img src="/non-fungible-token.png" alt="..." className="header-img" />
          <h3 className="header-icon-text">NFTs</h3>
          <h3 className="header-links left-margin-auto">Drops</h3>
          <h3 className="header-links">Stats</h3>
          <h3 className="header-links">Resources</h3>
          {/* <h3 className="header-icon-text">NFTs</h3> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
