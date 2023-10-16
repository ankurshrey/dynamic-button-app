import React from 'react';
import Button from './Button'; // Import your Button component
import buttonConfig from './buttonConfig.json';

function App() {
  return (
    <div className="App">
      <Button config={buttonConfig} />
    </div>
  );
}

export default App;
