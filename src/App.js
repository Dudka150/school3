import React, { useState } from 'react';
import './App.css';
import SkillCard from './Competents';
import CompetenceList from './CompetenceList';

function App() {
  const [showCompetences, setShowCompetences] = useState(false);

  const toggleCompetences = () => {
    setShowCompetences(!showCompetences);
  };

  return (
    <div className="App">
      <div className='Komp'>Компетенции</div>
      <button onClick={toggleCompetences}>
        {showCompetences ? 'Убрать компетенции' : 'Показать компетенции'}
      </button>
      {showCompetences && <CompetenceList />}
    </div>
  );
}

export default App;