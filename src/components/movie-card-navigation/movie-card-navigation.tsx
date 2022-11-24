import { NavLink } from 'react-router-dom';
import styles from './movie-card-navigation.module.css';
import classNames from 'classnames';
import { FC } from 'react';

interface MovieCardNavigationProps {
  id: number;
}

export const MovieCardNavigation: FC<MovieCardNavigationProps> = ({ id }) => {
  type NavLinkFunc = (isActive: boolean) => string;

  const checkActiveTab: NavLinkFunc = (isActive) => {
    return isActive
      ? classNames(styles.navigationLink, styles.Active)
      : styles.navigationLink;
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationItem}>
          <NavLink
            to=""
            end
            className={({ isActive }) => checkActiveTab(isActive)}
          >
            Overview
          </NavLink>
        </li>

        <li className={styles.navigationItem}>
          <NavLink
            to="details"
            className={({ isActive }) => checkActiveTab(isActive)}
          >
            Details
          </NavLink>
        </li>

        <li className={styles.navigationItem}>
          <NavLink
            to="reviews"
            className={({ isActive }) => checkActiveTab(isActive)}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
