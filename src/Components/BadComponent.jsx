import React, { useState } from 'react';

const BadComponent = () => {
  //const a = useState(false);

  //const b = true;

  const clik = () => {
    console.log('clicked');
  };

  return (
    <div style={{ color: 'red', margin: '10px' }}>
      {[1, 2, 3].map((item) => (
        <div>{item}</div> // missing key
      ))}

      <button onClick={clik}>Click</button>
    </div>
  );
};

export default BadComponent;
