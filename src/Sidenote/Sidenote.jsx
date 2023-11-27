import styles from './Sidenote.module.css';

function Sidenote({ type, title, children }) {
  return (
    <aside className={`${styles.wrapper} ${styles[type]}`}>
      <h3 className={styles.title}>{title}</h3>
      <p>{children}</p>
    </aside>
  );
}

export default Sidenote;

/*
renders in app.js

import React from 'react';
import Sidenote from './Sidenote/Sidenote';

function App() {
  return (
    <>
      <Sidenote type="notice" title="This is a notice">
        Hello World
      </Sidenote>
      <Sidenote type="success" title="This is success!">
        Yay!
      </Sidenote>
      <Sidenote type="warning" title="This is a warning">
        Be careful!
      </Sidenote>
      <Sidenote type="error" title="This is an error">
        Oh no!
      </Sidenote>
    </>
  );
}

export default App;
  
*/