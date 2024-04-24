import React from 'react';
import '../App.css';

function SkillCard({ title, description, level }) {
  return (
    <div className="skill-card">
      <div className="skill-title">{title}</div>
      <div className="skill-description">{description}</div>
      <div className="skill-level">Level: {level}%</div>
    </div>
  );
}

export default SkillCard;