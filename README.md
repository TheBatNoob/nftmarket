NFT Marketplace Project
Project Description
This project is an NFT (Non-Fungible Token) marketplace, built on the Ethereum blockchain, where users can list their NFTs for sale and purchase NFTs listed by other users. The project consists of a Solidity smart contract, a React frontend application, and uses various technologies to enable these features.

Smart Contract Features
The Solidity smart contract, deployed on the Ethereum blockchain, serves as the backbone of the NFT marketplace. It includes the following features:

NFT Listing: Users can list their NFTs for sale on the marketplace. This operation records details like the NFT's owner, contract address, token ID, and the desired sale price in Ether.

NFT Purchase: Buyers can purchase NFTs listed for sale by sending the required Ether to the contract. Upon successful purchase, the NFT ownership is transferred to the buyer, and the seller receives the Ether.

NFT Ownership Tracking: The contract maintains a record of NFTs owned by each wallet address. This information is crucial for users to see which NFTs they have listed and for buyers to verify their purchases.

Technologies Used
The project employs various technologies to bring the NFT marketplace to life:

Solidity: The smart contract is written in Solidity, Ethereum's programming language for creating smart contracts. It defines the rules and functionality of the NFT marketplace.

Hardhat: Hardhat is used for both development and testing of the smart contract. It provides a development environment, testing framework, and task runner for Ethereum projects.

React: The frontend of the NFT marketplace is built using React, a popular JavaScript library for building user interfaces. React allows for the creation of a responsive and dynamic user interface that interacts with the Ethereum blockchain.

Ethers.js: Ethers.js is used to interact with the Ethereum blockchain from the React frontend. It facilitates sending transactions, querying contract data, and connecting to Ethereum wallets like MetaMask.

MetaMask: MetaMask is a widely used Ethereum wallet browser extension. It's integrated into the project to enable users to connect their wallets, sign transactions, and interact with the NFT marketplace.

Web3.js: Web3.js is another Ethereum library used for interacting with Ethereum nodes and the blockchain. While Ethers.js is primarily used, Web3.js is still essential for some specific functionalities.

How It Works
Connecting Wallets: Users can connect their Ethereum wallets (e.g., MetaMask) to the NFT marketplace by clicking the "Connect Wallet" button. This is done through the eth_requestAccounts method provided by the MetaMask extension.

Listing NFTs: After connecting their wallets, users can list their NFTs for sale by providing the necessary details, including the NFT's contract address, token ID, and sale price. The listNFTForSale function in the smart contract handles this.

Purchasing NFTs: Other users can browse the listed NFTs and purchase them by clicking the "Purchase NFT" button. The purchase is executed by calling the purchaseNFT function in the smart contract, transferring ownership, and Ether.

Ownership Tracking: The smart contract tracks NFT ownership, ensuring that only the rightful owner can list an NFT for sale, and that the buyer receives ownership upon purchase.

Overall, this project combines blockchain technology (Ethereum and Solidity) with modern web development (React, Ethers.js, and MetaMask) to create a decentralized NFT marketplace where users can securely trade NFTs.

