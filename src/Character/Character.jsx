/*
Bastions and Basilisks Bug
You're building an in-browser role-playing game, Bastions and Basilisks, but you've hit a snag! The wrong values are being shown to the user when their character levels up.

Your mission is to fix the bug.

Acceptance Criteria:

When the “Level up” button is clicked, the alert that pops up should show the updated values for strength/dexterity/intelligence.
For example, when clicking the button for the first time, “strength” should be displayed as 7, not 6.
*/

import React, { useState } from 'react'
import './styles.css'

function Character() {
    const [strength, setStrength] = useState(6);
    const [dexterity, setDexterity] = useState(9);
    const [intelligence, setIntelligence] = useState(15);

    function triggerLevelUp() {
      const nextStrength = strength + 1;
      const nextDexterity = dexterity + 2;
      const nextIntelligence = intelligence + 3;

      // now we set initilizer functions to the value of const variables
      setStrength(nextStrength);
      setDexterity(nextDexterity);
      setIntelligence(nextIntelligence);

        window.alert(`
            Congratulations! Your hero now has the following stats:
            Strength: ${strength}
            Dexterity: ${dexterity}
            Intelligence: ${intelligence}
        `);
    }

  return (
    <div className="wrapper">
      <img
        alt="8-bit wizard character"
        src="https://sandpack-bundler.vercel.app/img/mage-sprite.gif"
      />
      <button 
        onClick={triggerLevelUp}
      >
        Level Up
      </button>
    </div>
  )
}

export default Character