import { Link, useLocation } from 'react-router-dom';
import React, { FC } from 'react';
import styles from './logo.module.css';
import classNames from 'classnames';

interface LogoProps {
  dark?: boolean;
}

export const Logo: FC<LogoProps> = ({ dark }) => {
  const linkStyle = dark ? classNames(styles.link, styles.Dark) : styles.link;
  const { pathname } = useLocation();
  const isMainPage = pathname === '/';

  const LogoWrapper = ({ children }) => {
    if (isMainPage) {
      return <span className={linkStyle}>{children}</span>;
    }
    return (
      <Link className={linkStyle} to="/">
        {children}
      </Link>
    );
  };

  return (
    <div className="logo">
      <LogoWrapper>
        <span className={classNames(styles.letter, styles.First)}>W</span>
        <span className={classNames(styles.letter, styles.Second)}>T</span>
        <span className={classNames(styles.letter, styles.Third)}>W</span>
      </LogoWrapper>
    </div>
  );
};
