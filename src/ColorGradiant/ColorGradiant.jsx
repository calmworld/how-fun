import React from 'react'
import './ColorGradiant.css';

function ColorGradiant() {
  const [colors, setColors] = React.useState([
  '#FFD500',
  '#FF0040',
  '#FF0040',
  '#FF0040',
  '#FF0040',
  ]);

  const [
    numOfVisibleColors,
    setNumOfVisibleColors,
  ] = React.useState(2);

  const visibleColors = colors.slice(0, numOfVisibleColors);

  const colorStops = visibleColors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;
  
  const handleAddColor = () => {
    if (numOfVisibleColors >= 5) {
      window.alert('You got more than 5 colors pro!!!');
      return;
    }
    // const nextColor = [...colors];
    // nextColor.push('#FF0000');
    // setColors(nextColor);
    setNumOfVisibleColors(numOfVisibleColors + 1);

    console.log(visibleColors);
  }
  
  const handleRemoveColor = () => {
     if (numOfVisibleColors <= 2) {
      window.alert('You cannoot have less than 2 colors pro!!!');
      return;
    } 
    // const nextColor = [...colors];
    // nextColor.pop();
    // setColors(nextColor);
    setNumOfVisibleColors(numOfVisibleColors - 1);

    console.log(visibleColors);
  }
  
  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={handleRemoveColor}>
          Remove color
        </button>
        <button onClick={handleAddColor}>
          Add color
        </button>
      </div>
      
      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
          />
          
          <div className="colors">
        {visibleColors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>
                Color {index + 1}:
              </label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  value={color}
                  onChange={(event) => {
                    const nextColors = [...colors]
                    nextColors[index] = event.target.value;
                    setColors(nextColors);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ColorGradiant;