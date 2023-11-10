// FilmCard Component
import React from 'react';

function FilmCard({ title, description, posterURL, rating }) {
  return (
    <div className="film-card">
      <img src={posterURL} alt={`${title} Affiche`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Note : {rating}</p>
    </div>
  );
}

export default FilmCard;
