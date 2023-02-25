import React from 'react';

export const Filter = ({ value, onChange }) => (
  <div>
    <label>
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);
