import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>Trainers</h1>
      <p>Please select the desired colour or size below:</p>
      <img src="https://all.media.alexbooster.com/img/sneaker-orange.jpg" width="400" alt="Trainer"/>
      <div>Size:
        <select>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>

      </div>
      <div>Colour:
        <select>
          <option>Aquamarine</option>
          <option>Blue</option>
          <option>Orange</option>
          <option>Purple</option>
          <option>Red</option>
        </select>

      </div>

    </div>
  );
}

export default App;
