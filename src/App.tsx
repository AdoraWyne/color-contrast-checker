import { useState } from 'react';
import { getLuminanceValue } from "./utils/getLuminanceValue"
import { getContrastRatio } from "./utils/getContrastRatio"
import { WCAGTest } from "./utils/WCAGTest"

function App() {
  const [backgroundRGB, setBackgroundRGB] = useState<string>('rgb(255,255,255)');
  const [foregroundRGB, setForegroundRGB] = useState('rgb(0,0,0)');

  const backgroundLuminanceValue = getLuminanceValue(backgroundRGB)
  const foregroundLuminanceValue = getLuminanceValue(foregroundRGB)
  const contrastRatio = getContrastRatio(backgroundLuminanceValue, foregroundLuminanceValue)
  const WCAGResult = WCAGTest(contrastRatio)


  return (
    <>
    <h1>Color Contrast Checker</h1>

    <div><hr /></div>

    <div>
      <h2>Color Input</h2>
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

    <div><hr /></div>
    
    <div>
      <h2>Contrast Ratio</h2>
      <p>Contrast Ratio: {(isNaN(backgroundLuminanceValue) || isNaN(foregroundLuminanceValue)) ? "Enter valid RGB values 🐖" : contrastRatio}</p>
    </div>
    
    <div><hr /></div>

    <div>
      <h2>WCAG 2.0 Test</h2>
      <p>Normal Text <small>(under 18pt (24px) regular weight, or under 14pt (18.66px) bold)</small></p>
      <ul>
        <li>AA: {WCAGResult.NormalAA}</li>
        <li>AAA: {WCAGResult.NormalAAA}</li>
      </ul>
      <p>Large Text <small>(18pt+ (24px+) regular weight, or 14pt+ (18.66px+) bold)</small></p>
      <ul>
        <li>AA: {WCAGResult.LargeAA}</li>
        <li>AAA: {WCAGResult.LargeAAA}</li>
      </ul>
    </div>
    </>
  );
}

export default App;
