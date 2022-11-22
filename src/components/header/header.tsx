import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/slices/auth/selectors';
import Logo from '../logo';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/slices/auth/actions';
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store/store';
import { pageSelector } from '../../store/slices/page/selectors';
import { setPage } from '../../store/slices/page/slice';
import Breadcrumbs from '../breadcrumbs';
import styles from './header.module.css';
import { movieSelector } from '../../store/slices/movie/selectors';

export const Header = () => {
  const { movieInfo: movie } = useSelector(movieSelector);
  const userInfo = useSelector(userSelector);
  const avatarTemplateUrl = 'https://www.svgrepo.com/show/26473/avatar.svg';
  const imageSrc = userInfo ? userInfo.avatar_url : avatarTemplateUrl;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const buttonText = userInfo ? 'Sign Out' : 'Sign In';
  const currentPage = useSelector(pageSelector);
  let headerText: string | null;

  switch (currentPage) {
    case 'sign-in':
      headerText = 'Sign In';
      break;
    case 'my-list':
      headerText = 'My List';
      break;
    default:
      headerText = null;
      break;
  }

  return (
    <header className={styles.header}>
      <Logo />

      <h1 className={styles.title}>{headerText}</h1>

      {currentPage === 'add-review' && (
        <Breadcrumbs>
          <Link to={`/films/${movie.id}/review`}>{movie.name}</Link>
          <span>Add review</span>
        </Breadcrumbs>
      )}

      <ul className={styles.userBlock}>
        <li className={styles.userBlockItem}>
          <div className={styles.avatar}>
            <img src={imageSrc} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className={styles.userBlockItem}>
          <button
            className={styles.userBlockButton}
            onClick={() => {
              if (userInfo) {
                dispatch(signOut());
              } else {
                dispatch(setPage('sign-in'));
                navigate('/sign-in');
              }
            }}
          >
            {buttonText}
          </button>
        </li>
      </ul>
    </header>
  );
};
