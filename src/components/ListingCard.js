import React, {useState, useEffect} from "react";

function ListingCard({description, image, location, id, onDeleteListing}) {
  const [like, setLikes]=useState(false)
  const [listingID, setListingID] = useState()
  

  useEffect(()=>{
    fetch(`http://localhost:6001/listings/${listingID}`,{
      method: 'DELETE',})
    .then(r=>r.json())
  },[listingID])

  const handleDelete = () =>{
    setListingID(id)
    onDeleteListing(id)
  }

  const handleLikeClick = () => {
    setLikes(like => !like)
  }  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {like ? (
          <button onClick={handleLikeClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLikeClick}  className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
