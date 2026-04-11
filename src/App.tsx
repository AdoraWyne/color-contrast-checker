import { useState } from "react";
import { getLuminanceValue } from "./utils/getLuminanceValue";
import { getContrastRatio } from "./utils/getContrastRatio";
import { WCAGTest } from "./utils/WCAGTest";
import { WCAG_ROWS_PRESENTATION } from "./utils/WCAGRowsConfig";
import { hexToRgb } from "./utils/hexToRgb";

function App() {
  const [backgroundHex, setBackgroundHex] = useState<string>("#FFFFFF");
  const [foregroundHex, setForegroundHex] = useState("#000000");

  const backgroundLuminanceValue = getLuminanceValue(hexToRgb(backgroundHex));
  const foregroundLuminanceValue = getLuminanceValue(hexToRgb(foregroundHex));
  const contrastRatio = getContrastRatio(
    backgroundLuminanceValue,
    foregroundLuminanceValue,
  );
  const WCAGResult = WCAGTest(contrastRatio);

  return (
    <>
      <h1>Color Contrast Checker</h1>

      <div>
        <hr />
      </div>

      <div>
        <h2>Color Input</h2>
        <div>
          <label>
            Background Color:{" "}
            <input
              onChange={(e) => setBackgroundHex(e.target.value)}
              type="color"
              value={backgroundHex}
            />
          </label>
        </div>
        <div>
          <label>
            Foreground Color:{" "}
            <input
              onChange={(e) => setForegroundHex(e.target.value)}
              type="color"
              value={foregroundHex}
            />
          </label>
        </div>
      </div>

      <div>
        <hr />
      </div>

      <div>
        <h2>Contrast Ratio</h2>
        <p>Contrast Ratio: {contrastRatio}</p>
      </div>

      <div>
        <hr />
      </div>

      <div>
        <h2>WCAG 2.0 Test</h2>
        <table>
          <thead>
            <tr>
              <th>WCAG 2.0</th>
              <th>Preview</th>
              <th>Min. contrast</th>
              <th>Passes</th>
            </tr>
          </thead>
          <tbody>
            {WCAGResult.map((row) => {
              const presentation = WCAG_ROWS_PRESENTATION[row.level];
              return (
                <tr key={row.level}>
                  <td>{row.level}</td>
                  <td
                    style={{
                      ...presentation.previewStyle,
                      backgroundColor: backgroundHex,
                      color: foregroundHex,
                    }}
                  >
                    {presentation.previewText}
                  </td>
                  <td>{row.minContrast}:1</td>
                  <td>{row.passes ? "Yes" : "No"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
