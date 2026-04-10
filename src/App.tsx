import { useState } from 'react';
import { getLuminanceValue } from "./utils/getLuminanceValue"
import { getContrastRatio } from "./utils/getContrastRatio"

function App() {
  const [backgroundRGB, setBackgroundRGB] = useState<string>('rgb(255,255,255)');
  const [foregroundRGB, setForegroundRGB] = useState('rgb(0,0,0)');

  const backgroundLuminanceValue = getLuminanceValue(backgroundRGB)
  const foregroundLuminanceValue = getLuminanceValue(foregroundRGB)
  const contrastRatio = getContrastRatio(backgroundLuminanceValue, foregroundLuminanceValue)


  return (
    <>
    <div>
      <div>
      <label>
        Background RGB:{' '}
        <input
          onChange={(e) => setBackgroundRGB(e.target.value)}
          placeholder="rgb(255,255,255)"
          type="text"
          value={backgroundRGB}
        />
      </label>
      </div>
      <div>
      <label>
        Foreground RGB:{' '}
        <input
          onChange={(e) => setForegroundRGB(e.target.value)}
          placeholder="rgb(0,0,0)"
          type="text"
          value={foregroundRGB}
        />
      </label>
      </div>
      <small>RGB Color Example: rgb(255,255,255)</small>
    </div>

    <hr />
    
    <div>
      <p>Contrast Ratio: {(isNaN(backgroundLuminanceValue) || isNaN(foregroundLuminanceValue)) ? "Enter valid RGB values 🐖" : contrastRatio}</p>
    </div>
    
    <hr />
    </>
  );
}

export default App;
