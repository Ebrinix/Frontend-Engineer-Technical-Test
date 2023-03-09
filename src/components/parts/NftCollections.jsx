import React, { useState, useEffect } from "react";
import NFTs from "../../mock/nfts";
import openSea from "../../mock/opensea";

function NftCollections() {
  const [nfts, setNFTs] = useState(NFTs);
  const [openSeadata, setOpenSea] = useState(openSea);
  const [modalState, setModalState] = useState(false);
  const [nftData, setNftData] = useState({});
  //   console.log(openSea);

  const buyNft = (data) => {
    console.log(data);
    setModalState(true);
    setNftData(data);
  };

  const closeNftModal = () => {
    setModalState(false);
  };

  return (
    <div>
      <div className="relative-position">
        <div className="gradiant-sub-hero"></div>
        <div className="collection-container">
          <div className="flex-grid">
            {openSeadata.map((data) => {
              var assetImgs = data.assets;
              return (
                <div
                  key={"key_" + data.slug}
                  id={data.slug}
                  className="item"
                  onClick={() => {
                    buyNft(data);
                  }}
                >
                  <div className="main-card">
                    <div className="card-img relative-position">
                      <div className="card-img-badge">
                        <div className="relative-position">
                          {assetImgs.slice(1, 4).map((data) => (
                            <img
                              src={data.image_url}
                              alt={data.id}
                              key={data.id}
                              className="card-badge-images"
                            />
                          ))}
                        </div>
                      </div>
                      <img
                        src={data.assets[0].image_url}
                        alt="..."
                        className="nft-img"
                      />
                    </div>
                    <div className="card-body">
                      <div className="card-body-text">
                        <span>{data.assets[0].name}</span>
                        <span className="float-right">
                          {data.assets[0].asset_contract.symbol}
                        </span>
                        <p>Created by: {data.assets[0].collection.name}</p>
                      </div>
                      <div className="price">
                        <p className="nft-price d-inline">NFT Version</p>
                        <div className="d-inline float-right">
                          <span>
                            {data.assets[0].asset_contract.nft_version != null
                              ? "v" + data.assets[0].asset_contract.nft_version
                              : "N/A"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {modalState === true ? (
        <div className="modal-overlay">
          <div className="nft-preview">NFT Preview</div>
          <div className="modal-body">
            <div className="row-flex">
              <div className="modal-img">
                <img
                  src={nftData.assets[0].image_url}
                  alt="..."
                  className="nft-img"
                />
              </div>
              <div className="modal-desc">
                <div className="card-body">
                  <div className="card-body-text">
                    <span>{nftData.assets[0].name}</span>
                    <span className="float-right">
                      {nftData.assets[0].asset_contract.symbol}
                    </span>
                    <p className="paddin-top-2">
                      Created by: {nftData.assets[0].collection.name}
                    </p>
                  </div>
                  <div className="price paddin-top-2">
                    <p className="nft-price d-inline">NFT Version</p>
                    <div className="d-inline float-right">
                      <span>
                        {nftData.assets[0].asset_contract.nft_version != null
                          ? "v" + nftData.assets[0].asset_contract.nft_version
                          : "N/A"}
                      </span>
                    </div>
                  </div>
                  <div className="main-description">
                    <div className="description-header">
                      <h2>Description</h2>
                    </div>
                    <div className="description-content">
                      <p>{nftData.assets[0].asset_contract.description}</p>
                    </div>
                  </div>
                  <div className="paddin-top-2">
                    <a
                      href={nftData.permalink}
                      className="button hero-button-color block"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <h1>{nftData.id}</h1> */}
          </div>
          <div className="close-modal" onClick={closeNftModal}>
            Close
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default NftCollections;
