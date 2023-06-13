import React from 'react';
import '../styles/TextBox.css'

function TextBlock({ header, bulletPoints }) {
  return (
    <div>
      <h2>{header}</h2>
      <ul>
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default TextBlock;