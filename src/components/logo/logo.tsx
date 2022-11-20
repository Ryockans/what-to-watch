import { Link } from 'react-router-dom';
import React, { FC } from 'react';
import styles from './logo.module.css';
import classNames from 'classnames';

interface LogoProps {
  dark?: boolean;
}

export const Logo: FC<LogoProps> = ({ dark }) => {
  const linkStyle = dark ? classNames(styles.link, styles.Dark) : styles.link;

  return (
    <div className="logo">
      <Link className={linkStyle} to="/">
        <span className={classNames(styles.letter, styles.First)}>W</span>
        <span className={classNames(styles.letter, styles.Second)}>T</span>
        <span className={classNames(styles.letter, styles.Third)}>W</span>
      </Link>
    </div>
  );
};
