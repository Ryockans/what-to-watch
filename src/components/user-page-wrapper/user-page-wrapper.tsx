import { FC, ReactElement } from 'react';
import styles from './user-page-wrapper.module.css';

interface UserPageWrapperProps {
  children: ReactElement | ReactElement[];
}

export const UserPageWrapper: FC<UserPageWrapperProps> = ({ children }) => {
  return <div className={styles.wrap}>{children}</div>;
};
