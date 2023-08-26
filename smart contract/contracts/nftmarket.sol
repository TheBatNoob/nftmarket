// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the ERC721 interface for NFTs
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Marketplace {
    // Struct to represent a listing
    struct Listing {
        address seller;
        address nftContract;
        uint256 tokenId;
        uint256 price;
        bool isSold;
    }

    // Mapping from listing ID to Listing
    mapping(uint256 => Listing) public listings;

    // Current listing ID
    uint256 public listingId;

    // Mapping to track NFT ownership
    mapping(address => uint256[]) public ownedNFTs;

    // Events
    event NFTListed(uint256 indexed listingId, address indexed seller, address indexed nftContract, uint256 tokenId, uint256 price);
    event NFTSold(uint256 indexed listingId, address indexed buyer, uint256 price);

    // Function to list an NFT for sale
    function listNFTForSale(address _nftContract, uint256 _tokenId, uint256 _price) external {
        require(_price > 0, "Price must be greater than zero");
        require(IERC721(_nftContract).ownerOf(_tokenId) == msg.sender, "You don't own this NFT");
        
        listingId++;
        listings[listingId] = Listing({
            seller: msg.sender,
            nftContract: _nftContract,
            tokenId: _tokenId,
            price: _price,
            isSold: false
        });
        
        ownedNFTs[msg.sender].push(listingId);
        emit NFTListed(listingId, msg.sender, _nftContract, _tokenId, _price);
    }

    // Function to purchase an NFT
    function purchaseNFT(uint256 _listingId) external payable {
        Listing storage listing = listings[_listingId];
        require(!listing.isSold, "NFT is already sold");
        require(msg.value >= listing.price, "Insufficient funds sent");

        listing.isSold = true;
        IERC721(listing.nftContract).transferFrom(listing.seller, msg.sender, listing.tokenId);

        // Transfer the funds to the seller
        payable(listing.seller).transfer(msg.value);

        emit NFTSold(_listingId, msg.sender, msg.value);
    }

    // Function to view NFTs owned by a wallet
    function getOwnedNFTs(address _owner) external view returns (uint256[] memory) {
        return ownedNFTs[_owner];
    }
}
