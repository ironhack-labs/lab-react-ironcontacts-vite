import React from "react";

function ContactCard(props) {
  const { contact, clickToDelete } = props;
  const roundedPopularity = contact.popularity.toFixed(2);

  return (
    <div className="ContactCard">
      <div className="photo">
        <img src={contact.pictureUrl} alt="loading picture" className="image" />
      </div>

      <div className="info">
        <h3>{contact.name}</h3>
        <p>Popular: {roundedPopularity}</p>
        {contact.wonOscar && <p> 🏆 </p>}
        {contact.wonEmmy && <p> 🌟 </p>}
        <button
          onClick={() => clickToDelete(contact.id)}
          className="btn-delete"
        >
          Delete 🗑
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
