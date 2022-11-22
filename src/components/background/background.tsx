import React, { FC } from 'react';
import styles from './background.module.css';

interface BackgroundProps {
  name: string;
  src: string;
}

export const Background: FC<BackgroundProps> = (props) => {
  return (
    <div className={styles.background}>
      <img src={props.src} alt={props.name} />
    </div>
  );
};
