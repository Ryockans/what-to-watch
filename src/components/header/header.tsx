import React, { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/slices/auth/selectors';
import Logo from '../logo';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/slices/auth/actions';
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store/store';
import Breadcrumbs from '../breadcrumbs';
import styles from './header.module.css';
import { movieSelector } from '../../store/slices/movie/selectors';

interface HeaderProps {
  children?: ReactNode;
  breadcrumbs?: boolean;
}

export const Header: FC<HeaderProps> = ({ children, breadcrumbs }) => {
  const { movieInfo: movie } = useSelector(movieSelector);
  const userInfo = useSelector(userSelector);
  const avatarTemplateUrl = 'https://www.svgrepo.com/show/26473/avatar.svg';
  const imageSrc = userInfo ? userInfo.avatar_url : avatarTemplateUrl;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const buttonText = userInfo ? 'Sign Out' : 'Sign In';

  const authHandler = () => {
    if (userInfo) {
      dispatch(signOut()).then(() => navigate(0));
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <header className={styles.header}>
      <Logo />

      <h1 className={styles.title}>{children}</h1>

      {breadcrumbs && (
        <Breadcrumbs>
          <Link className={styles.link} to={`/films/${movie.id}`}>
            {movie.name}
          </Link>
          <span className={styles.link}>Add review</span>
        </Breadcrumbs>
      )}

      <ul className={styles.userBlock}>
        <li className={styles.userBlockItem}>
          <div className={styles.avatar}>
            <img src={imageSrc} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className={styles.userBlockItem}>
          <button className={styles.userBlockButton} onClick={authHandler}>
            {buttonText}
          </button>
        </li>
      </ul>
    </header>
  );
};
