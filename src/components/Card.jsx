import React from "react";
import "../App.css"; // ✅ correct path

function Card({ item, handleSelectedCards, toggled, stopflip }) {
  const handleClick = () => {
    if (!stopflip) {
      handleSelectedCards(item);
    }
  };

  return (
    <div className="card">
      <div className={toggled ? "flipped" : ""}>
        <img className="front" src={item.img} alt={item.name} />
        <img
          className="back"
          src="https://tse2.mm.bing.net/th/id/OIP.MzvjZuko4SBNJggVfkHF1wHaFb?w=1300&h=953&rs=1&pid=ImgDetMain&o=7&rm=3" 
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}

export default Card;
