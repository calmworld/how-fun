import React from 'react';

export function CartTable({ items }) {
  return (
    <table className="shopping-cart">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({id, imageSrc, imageAlt, title, price}) => (
          <tr key={id} className="cart-row">
            <td>
              <img
                className="product-thumb"
                src={imageSrc}
                alt={imageAlt}
              />
            </td>
            <td>{title}</td>
            <td>{price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/*
renders on App.jsx

import './App.css';
import {CartTable} from './CartTable';

const items = [
  {
    id: 'hk123',
    imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-coffee-machine.jpg',
    imageAlt: 'A pink drip coffee machine with the “Hello Kitty” logo',
    title: '“Hello Kitty” Coffee Machine',
    price: '89.99',
    inStock: true,
  },
  {
    id: 'co999',
    imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-can-opener.jpg',
    imageAlt: 'A black can opener',
    title: 'Safety Can Opener',
    price: '19.95',
    inStock: false,
  },
  {
    id: 'cnl333',
    imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-night-light.png',
    imageAlt: 'A kid-friendly nightlight sculpted to look like a dog astronaut',
    title: 'Astro-pup Night Light',
    price: '130.00',
    inStock: true,
  },
  {
    id: 'scb777',
    imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-backpack.jpg',
    imageAlt: 'A pink backpack with a unicorn illustration',
    title: 'Magical Unicorn Backpack',
    price: '74.98',
    inStock: true,
  },
];

const inStock = items.filter((item) => item.inStock);
const soldOut = items.filter((item) => !item.inStock);


function App() {
  return (
    <>
      <h2>Shopping cart</h2>
      <CartTable items={inStock} />
      <div className="actions">
        <button>Continue checkout</button>
      </div>

      <h2>Sold out</h2>
      <CartTable items={soldOut} />
    </>
  );
}

export default App;
*/