// Filtre Component
import React from 'react';

function Filtre({ onTitleChange, onRatingChange }) {
  return (
    <div className="filtre">
      <input
        type="text"
        placeholder="Filtrer par titre"
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filtrer par note"
        onChange={(e) => onRatingChange(e.target.value)}
      />
    </div>
  );
}

export default Filtre;