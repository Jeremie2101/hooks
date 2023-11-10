// ListeFilms Component
import React from 'react';
import FilmCard from './FilmCard';

function ListeFilms({ films }) {
  return (
    <div className="liste-films">
      {films.map((film, index) => (
        <FilmCard key={index} {...film} />
      ))}
    </div>
  );
}

export default ListeFilms;