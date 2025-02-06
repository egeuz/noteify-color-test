"use client"
import { useState } from 'react';
import './page.css'

export default function Home() {
  const [hue, setHue] = useState(0)
  return (
    <main>
      <div className="screen-wrapper" style={{ filter: `hue-rotate(${hue}deg)` }}>
        <div id="light-mode">
          <h2>Light Mode</h2>
          <div className="screens">
            <div className="screen home">
              <h3>Home</h3>
              <img src="/home_light.png" alt="home screen, light mode" />
            </div>
            <div className="screen summary">
              <h3>Summary</h3>
              <img src="/summary_light.png" alt="summary screen, light mode" />
            </div>
          </div>
        </div>
        <div id="dark-mode">
          <h2>Dark Mode</h2>
          <div className="screens">
            <div className="screen home">
              <h3>Home</h3>
              <img src="/home_dark.png" alt="home screen, dark mode" />
            </div>
            <div className="screen summary">
              <h3>Summary</h3>
              <img src="/summary_dark.png" alt="summary screen, dark mode" />
            </div>
          </div>
        </div>
      </div>
      <div id="controls">
        <h4>App Hue</h4>
        <input id="hue-slider" type="range" min="0" max="360" step="1" value={hue} onChange={(e) => setHue(e.target.value)} />
        <h4>{hue}</h4>
      </div>
    </main>
  );
}
