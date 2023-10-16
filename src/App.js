import React from 'react';
import Button from './Button'; // Import your Button component
import Input from './Input'; // Import your Input component
import uiConfig from './buttonConfig.json';

function App() {
  return (
    <div className="App">
      {uiConfig.components.map((component, index) => {
        if (component.type === 'button') {
          return <Button key={index} config={component} />;
        } else if (component.type === 'input') {
          return <Input key={index} config={component} />;
        }
        return null;
      })}
    </div>
  );
}

export default App;
