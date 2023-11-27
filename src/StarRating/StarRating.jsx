import React from 'react';
import { range } from 'lodash';
import './styles.css';

function StarRating({ rating }) {
  /*
    Here's the markup for a single star:
    
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
    
    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */
  
    return (
      <div className="star-wrapper">
        {range(rating).map((num) => (
          <img
            key={num}
            alt=""
            className="gold-star"
            src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
          />
        ))}
        {/* another way using modern built-in array methods */}
        {/* {Array(rating).fill().map((_, index) => (
        <img
          key={index}
          alt=""
          className="gold-star"
          src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
        />
      ))} */}
      </div>
    );
  }
  
  export default StarRating;

/*
renders in app.js

import React from 'react';
import StarRating from './StarRating/StarRating';

function App() {
  return (
    <>
      <section>
        <h2>Winter's Orbit</h2>
        <p>
          Rating: 5 / 5
        </p>
        <StarRating rating={5} />
      </section>
      <section>
        <h2>Dial D for Deadman</h2>
        <p>
          Rating: 4 / 5
        </p>
        <StarRating rating={4} />
      </section>
      <section>
        <h2>Words And Things</h2>
        <p>
          Rating: 0 / 5
        </p>
        <StarRating rating={0} />
      </section>
      <section>
        <h2>The Galaxy, And The Ground Within</h2>
        <p>
          Rating: 5 / 5
        </p>
        <StarRating rating={5} />
      </section>
    </>
  );
}

export default App;
*/