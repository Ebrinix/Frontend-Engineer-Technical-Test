import React, { useState } from "react";

function Hero() {
  return (
    <div className="hero-1">
      <div className="round-box position-1"></div>
      <div className="round-box position-2"></div>
      <div className="round-box position-3"></div>
      <div className="round-box position-4"></div>
      <div className="round-box position-9"></div>
      <div className="round-box position-10"></div>
      <div className="round-box position-5"></div>
      <div className="absolute-img position-6">
        <img src="/nft1.jpeg" alt="..." className="nft-img" />
      </div>
      <div className="absolute-img position-7">
        <img src="/nft11.jpeg" alt="..." className="nft-img opacity" />
      </div>
      <div className="absolute-img position-8">
        <img src="/nft6.jpeg" alt="..." className="nft-img" />
      </div>
      <div className="hero-container">
        <div className="hero-flex">
          <div className="hero-flex-column margin-auto">
            <h1 className="hero-1-main-text">
              Discover, collect, and
              <br /> sell extradinary NFTs
            </h1>
          </div>
          <div className="hero-flex-column margin-auto">
            <h1 className="hero-1-sub-text paddin-top-2">
              TestNFT is the world's first and largest NFT marketplace
            </h1>
          </div>
          <div className="hero-flex-column margin-auto paddin-top-4 paddin-bottom-4">
            <button className="button hero-button-color">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
