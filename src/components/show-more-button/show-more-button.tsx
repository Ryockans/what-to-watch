import React, { FC } from 'react';
import styles from './show-more-button.module.css';

interface ShowMoreButtonProps {
  onClick: () => void;
}

export const ShowMoreButton: FC<ShowMoreButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      Show more
    </button>
  );
};
