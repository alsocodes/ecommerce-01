import React from 'react';
import styles from './Waves.module.css';

const Waves = () => {
  return (
    <div className='relative h-32'>
      <div className={`${styles.waveWrapper} ${styles.waveAnimation}`}>
        <div className={`${styles.waveWrapperInner} ${styles.bgTop}`}>
          <div
            className={`${styles.wave} ${styles.waveTop}`}
            style={{
              backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-top.png')`,
            }}
          ></div>
        </div>
        <div className={`${styles.waveWrapperInner} ${styles.bgMiddle}`}>
          <div
            className={`${styles.wave} ${styles.waveMiddle}`}
            style={{
              backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-mid.png')`,
            }}
          ></div>
        </div>
        <div className={`${styles.waveWrapperInner} ${styles.bgBottom}`}>
          <div
            className={`${styles.wave} ${styles.waveBottom}`}
            style={{
              backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-bot.png')`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Waves;
