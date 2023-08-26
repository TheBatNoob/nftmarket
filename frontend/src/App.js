import React, { useState, useEffect } from "react";
import "./App.css"; // Import your CSS file for styling
import { ethers } from "ethers";

// Import your contract ABI from the JSON file
import markcontract from "./contracts/Marketplace.json";

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [contract, setContract] = useState(null);

  const abi = markcontract.abi;
  const contractAddress = "0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9"; // Replace with your contract address

  // Function to connect the wallet
  const connectWallet = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        // Request access to the user's Ethereum accounts
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setCurrentAccount(accounts[0]);
        console.log("Found an account:", accounts[0]);

        // Create an instance of the Marketplace contract
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const marketplaceContract = new ethers.Contract(contractAddress, abi, provider);
        setContract(marketplaceContract);
      } catch (err) {
        console.error(err);
      }
    } else {
      // MetaMask not installed
      console.log("Please install MetaMask");
    }
  };

  // Function to list an NFT for sale
  async function listNFTForSale() {
    try {
      const nftContract = "0xYourNFTContractAddress"; // Replace with your NFT contract address
      const tokenId = 123; // Replace with the NFT token ID you want to list for sale
      const price = ethers.utils.parseEther("0.1"); // Replace with the price in ether (e.g., 0.1 ETH)

      await contract.listNFTForSale(nftContract, tokenId, price);
    } catch (error) {
      console.error(error);
    }
  }

  // Function to purchase an NFT
  async function purchaseNFT() {
    try {
      const listingId = 1; // Replace with the ID of the NFT listing you want to purchase
      const price = ethers.utils.parseEther("0.1"); // Replace with the price in ether (e.g., 0.1 ETH)

      await contract.purchaseNFT(listingId, { value: price });
    } catch (error) {
      console.error(error);
    }
  }

  // Function to get NFTs owned by the current wallet
  async function getOwnedNFTs() {
    try {
      const owner = currentAccount; // Use the current account as the owner address

      const ownedNFTs = await contract.getOwnedNFTs(owner);
      console.log("Owned NFTs:", ownedNFTs);
    } catch (error) {
      console.error(error);
    }
  }

  // Call connectWallet when the component mounts
  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Marketplace DApp</h1>
      {currentAccount ? (
        <div className="wallet-connected">
          <h4>Wallet connected:</h4>
          <p>{currentAccount}</p>
          <button className="action-button" onClick={listNFTForSale}>
            List NFT for Sale
          </button>
          <button className="action-button" onClick={purchaseNFT}>
            Purchase NFT
          </button>
          <button className="action-button" onClick={getOwnedNFTs}>
            Get owned NFT
          </button>
        </div>
      ) : (
        <button className="connect-button" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default App;
