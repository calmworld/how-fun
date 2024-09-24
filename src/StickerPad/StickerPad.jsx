import React from 'react';

import styles from './StickerPad.module.css';
import { getSticker } from './Stickers.data';


function StickerPad() {
  const [stickers, setStickers] = React.useState([]);
  console.log(stickers);

  return (
    <button
      type="button"
      className={styles.wrapper}
      onClick={(event) => {
        const stickerData = getSticker();
        const newSticker = {
          ...stickerData,
          x: event.clientX,
          y: event.clientY,
          // Generate the random number on click, not during render!
          // id: Math.random(),
          // Come up with a unique value for this sticker.
          id: crypto.randomUUID(),
        };

        const nextStickers = [...stickers, newSticker];
        setStickers(nextStickers);
      }}
    >
      {stickers.map((sticker) => (
        <img
          // Use that previously-created unique value
          // for the key:
          key={sticker.id}
          className={styles.sticker}
          src={sticker.src}
          alt={sticker.alt}
          style={{
            left: sticker.x,
            top: sticker.y,
            width: sticker.width,
            height: sticker.height,
          }}
        />
      ))}
    </button>
  );
}

export default StickerPad;