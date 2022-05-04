import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  useEffect(()=>{
    fetch(" http://localhost:6001/listings")
    .then(r=>r.json())
    .then(setListings)
  }, [])

  const deleteListing = (id) => {
    const updatedListing = [...listings].filter(listing => listing.id !== id)
    setListings(updatedListing)
  }

  const searchItems = (item) => {
    const searchedItems = [...listings].filter(listing => {
      return listing.description.toLowerCase().includes(item.toLowerCase())
    })
    const result = item !== ''? searchedItems : listings 
    setListings(result)
  }
  

  return (
    <div className="app">
      <Header searchItems={searchItems} />
      <ListingsContainer listings={listings} onDeleteListing={deleteListing} />
    </div>
  );
}

export default App;
