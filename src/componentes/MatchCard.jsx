import React from 'react';

const MatchCard = ({ match }) => {
  return (
    <div className="match-card">
      <h2>{match.player1} vs {match.player2}</h2>
      <p>Fecha: {new Date(match.date).toLocaleDateString()}</p>
      <p>Hora: {new Date(match.date).toLocaleTimeString()}</p>
    </div>
  );
}

export default MatchCard;
