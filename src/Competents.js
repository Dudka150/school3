import React from 'react';
import './App.css';

function SkillCard({ title }) {
  return (
    <div className="skill-card">
      <div className="skill-title">{title}</div>
    </div>
  );
}

export default SkillCard;