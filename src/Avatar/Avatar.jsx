import React from 'react';

export function Avatar({ src, alt }) {
  return (
    <button className="avatar-btn">
      <img
        className="avatar"
        src={src}
        alt={alt}
      />
    </button>
  );
}

/*
renders on App.jsx
import './App.css';
import { Avatar } from './Avatar';
import { Greetings } from './Greetings';

const data = [
  {
    id: '001',
    src: 'https://sandpack-bundler.vercel.app/img/avatars/001.png',
    alt: 'person with curly hair and a black T-shirt',
  },
  {
    id: '002',
    src: 'https://sandpack-bundler.vercel.app/img/avatars/002.png',
    alt: 'person with curly hair and a red T-shirt',
  },
  {
    id: '003',
    src: 'https://sandpack-bundler.vercel.app/img/avatars/003.png',
    alt: 'person with curly hair and a blue T-shirt',
  },
  {
    id: '004',
    src: 'https://sandpack-bundler.vercel.app/img/avatars/004.png',
    alt: 'person with curly hair and a green T-shirt',
  },
  {
    id: '005',
    src: 'https://sandpack-bundler.vercel.app/img/avatars/005.png',
    alt: 'person with curly hair and a yellow T-shirt',
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greetings themeColor='red'>Cancel</Greetings>
        <Greetings themeColor='blue'>Confirm</Greetings>
      </header>
      <main>
        <div>
          {data.map(({id, src, alt}) => {
            return (
              <Avatar key={id} src={src} alt={alt} />
            );
          }
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

*/