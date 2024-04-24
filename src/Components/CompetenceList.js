import React, { useState } from 'react';
import SkillCard from './Competents';

function CompetenceList() {
  const [competences, setCompetences] = useState([
    { id: 1, title: 'Laravel', description: 'Умение работать с фреймворком Laravel', level: 51 },
    { id: 2, title: 'Django', description: 'Умение работать с фреймворком Django', level: 30 },
    { id: 3, title: 'C#', description: 'Знание языка C#', level: 40 },
    { id: 4, title: 'БД', description: 'Работа с базой данных во фреймворке Laravel', level: 70 }
  ]);

  const [showHighLevel, setShowHighLevel] = useState(false);
  const [showLowLevel, setShowLowLevel] = useState(false);

  const handleHighLevelClick = () => {
    setShowHighLevel(true);
    setShowLowLevel(false);
  };

  const handleLowLevelClick = () => {
    setShowHighLevel(false);
    setShowLowLevel(true);
  };

  const handleShowAllClick = () => {
    setShowHighLevel(false);
    setShowLowLevel(false);
  };

  return (
    <div>
      <div className='button_skills'>
        {(!showHighLevel && !showLowLevel) && (
          <button style={{ width: '200px' }} onClick={handleHighLevelClick}>
            Показать компетенции с уровнем изучения {'>50%'}
          </button>
        )}
        {(!showHighLevel && !showLowLevel) && (
          <button style={{ width: '200px' }} onClick={handleLowLevelClick}>
            Показать компетенции с уровнем изучения {'<50%'}
          </button>
        )}
        {(showHighLevel || showLowLevel) && (
          <button style={{ width: '200px' }} onClick={handleShowAllClick}>
            Показать все компетенции
          </button>
        )}
      </div>
      <div className="skills-section">
        {showHighLevel && (
          competences.filter(competence => competence.level > 50).map(competence => (
            <SkillCard
              key={competence.id}
              title={competence.title}
              description={competence.description}
              level={competence.level}
            />
          ))
        )}
        {showLowLevel && (
          competences.filter(competence => competence.level < 50).map(competence => (
            <SkillCard
              key={competence.id}
              title={competence.title}
              description={competence.description}
              level={competence.level}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CompetenceList;
