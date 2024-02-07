import React, { useState, useRef} from 'react';
import './Valentine.css'; // Ensure you have the corresponding CSS
import catSit from './noImages/catSit.jpg'
import catStare1 from './noImages/catStare1.jpg'
import catStare2 from './noImages/catStare2.jpg'
import catRose from './images/catRose.jpg'
import catCry1 from './noImages/catCry1.jpg'
import catCry2 from './noImages/catCry2.jpg'
import catCry3 from './noImages/catCry3.jpg'
import catSad1 from './noImages/catSad.jpg'
import catSad2 from './noImages/catSad2.jpg'
import dogCry from './noImages/dogCry.jpg'

const cats = [catSit, catStare1, catStare2, catCry1, catCry2, catCry3, catSad1, catSad2, dogCry];

function Valentine() {
  // Use state to trigger re-rendering and to store the "No" button's style
  const noButtonRef = useRef(null);
  const [currentImage, setCurrentImage] = useState('');
  const [noButtonStyle, setNoButtonStyle] = useState({});

  function handleNoHover() {
    if (noButtonRef.current) {
      const buttonRect = noButtonRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
  
      // Define margins as 10% of the viewport dimensions to restrict movement to the central 80%
      const horizontalMargin = viewportWidth * 0.1;
      const verticalMargin = viewportHeight * 0.1;
  
      // Adjusted calculation to keep the button within the central 80% of the screen
      const newPosition = {
        position: 'absolute',
        left: `${Math.max(horizontalMargin, Math.min(viewportWidth - buttonRect.width - horizontalMargin, horizontalMargin + Math.random() * (viewportWidth - buttonRect.width - 2 * horizontalMargin)))}px`,
        top: `${Math.max(verticalMargin, Math.min(viewportHeight - buttonRect.height - verticalMargin, verticalMargin + Math.random() * (viewportHeight - buttonRect.height - 2 * verticalMargin)))}px`,
      };
  
      setNoButtonStyle(newPosition);

      const randCat = cats[Math.floor(Math.random() * cats.length)];
      setCurrentImage(randCat);
    }
  }

  const generateImagePosition = () => {
    const positionOptions = [
      { top: '10%', left: '10%' }, // Top-left corner
      { top: '10%', right: '10%' }, // Top-right corner
      { bottom: '10%', left: '10%' }, // Bottom-left corner
      { bottom: '10%', right: '10%' }, // Bottom-right corner
    ];
    return positionOptions[Math.floor(Math.random() * positionOptions.length)];
  };

  // Random position for the image
  const imagePosition = generateImagePosition();


  const handleYesClick = () => {
    window.location.href = '/Yes-message';
  };

  return (
    <div className="valentine-container">
        <img src={catRose} alt='cat rose'></img>
      <h2>Lauren, will you be my Valentine?😳</h2>
      {currentImage && (
        <img
          src={currentImage}
          alt="Random"
          style={{
            ...imagePosition,
            position: 'absolute',
            maxWidth: '20%', // Limits the size of the image
            maxHeight: '20%',
          }}
        />
      )}
      <div className="buttons" style={{position: 'relative'}}>
        <button className="yesBtn" onClick={handleYesClick}>Yes</button>
        <button className="noBtn" onMouseEnter={handleNoHover} style={noButtonStyle} ref={noButtonRef}>No</button>
    </div>
    </div>
  );
};

export default Valentine;
