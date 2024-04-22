import React, { useState } from 'react';
import SkillCard from './Competents';

function CompetenceList() {
  // Здесь вы можете добавить свой массив компетенций
  const [competences, setCompetences] = useState([
    { id: 1, title: 'Название компетенции 1', description: 'Описание компетенции 1', level: 70 },
    { id: 2, title: 'Название компетенции 2', description: 'Описание компетенции 2', level: 30 },
    // Добавьте остальные компетенции по аналогии
  ]);

  const filterCompetences = (condition) => {
    return competences.filter(competence => condition(competence.level));
  };

  return (
    <div className="skills-section">
      {competences.map(competence => (
        <SkillCard
          key={competence.id}
          title={competence.title}
          description={competence.description}
          level={competence.level}
        />
      ))}
    </div>
  );
}

export default CompetenceList;