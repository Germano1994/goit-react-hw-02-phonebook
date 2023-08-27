import React from 'react';

const Filter = ({ value, onChangeFilter }) => (
  <div>
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChangeFilter} />
    </label>
  </div>
);

export default Filter;
