import { useState } from 'react';
import './App.css';

function App() {
  const [backgroundRGB, setBackgroundRGB] = useState<string>('');
  const [foregroundRGB, setForegroundRGB] = useState('');

  const handleBlur = () => {
    setBackgroundRGB('');
    setForegroundRGB('');
  };

  return (
    <>
      <label>
        Background RGB:{' '}
        <input
          onBlur={handleBlur}
          onChange={(e) => setBackgroundRGB(e.target.value)}
          placeholder="rgb(255,255,255)"
          type="text"
          value={backgroundRGB}
        />
      </label>
      <label>
        Foreground RGB:{' '}
        <input
          onBlur={handleBlur}
          onChange={(e) => setForegroundRGB(e.target.value)}
          placeholder="rgb(0,0,0)"
          type="text"
          value={foregroundRGB}
        />
      </label>
      <small>RGB Color Example: rgb(255,255,255)</small>
    </>
  );
}

export default App;
