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
          type="text"
          value={backgroundRGB}
          onChange={(e) => setBackgroundRGB(e.target.value)}
          onBlur={handleBlur}
        />
      </label>
      <label>
        Foreground RGB:{' '}
        <input
          type="text"
          value={foregroundRGB}
          onChange={(e) => setForegroundRGB(e.target.value)}
          onBlur={handleBlur}
        />
      </label>
    </>
  );
}

export default App;
