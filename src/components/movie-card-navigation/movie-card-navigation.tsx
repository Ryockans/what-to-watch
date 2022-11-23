import { Link, useLocation } from 'react-router-dom';
import styles from './movie-card-navigation.module.css';
import classNames from 'classnames';
import { FC } from 'react';

interface MovieCardNavigationProps {
  id: number;
}

export const MovieCardNavigation: FC<MovieCardNavigationProps> = ({ id }) => {
  const location = useLocation();

  const checkActiveTab = (path) => {
    return location.pathname === path
      ? classNames(styles.navigationItem, styles.Active)
      : styles.navigationItem;
  };

  const overviewClass = checkActiveTab(`/films/${id}`);
  const detailsClass = checkActiveTab(`/films/${id}/details`);
  const reviewsClass = checkActiveTab(`/films/${id}/reviews`);

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={overviewClass}>
          <Link to="" className={styles.navigationLink}>
            Overview
          </Link>
        </li>

        <li className={detailsClass}>
          <Link to="details" className={styles.navigationLink}>
            Details
          </Link>
        </li>

        <li className={reviewsClass}>
          <Link to="reviews" className={styles.navigationLink}>
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
};
