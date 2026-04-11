import { useState } from "react";
import "./App.css";
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
        <div style={{ display: "flex", gap: "1rem" }}>
          <label>
            Background Color:{" "}
            <input
              onChange={(e) => setBackgroundHex(e.target.value)}
              type="color"
              value={backgroundHex}
            />
          </label>
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
        <table className="wcag-table">
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
                  <td className={row.passes ? "pass" : "fail"}>
                    {row.passes ? "Yes" : "No"}
                  </td>
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
