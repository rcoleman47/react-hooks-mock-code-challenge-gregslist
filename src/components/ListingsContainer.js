import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({listings, onDeleteListing}) {


  return (
    <main>
      <ul className="cards">
        {listings.map(listing=> <ListingCard onDeleteListing={onDeleteListing} key={listing.id} {...listing} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
