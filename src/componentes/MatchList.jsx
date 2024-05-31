import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MatchCard from './MatchCard';

export const MatchList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get('https://www.globaltennisnetwork.com/component/api?apiCall=getTournamentDetails&format=raw&devKey=YOUR-DEV-KEY')
      .then(response => {
        setMatches(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los datos:", error);
      });
  }, []);

  return (
    <div className="match-list">
      {matches.map(match => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
}


