import { FC, ReactElement } from 'react';
import styles from './breadcrumbs.module.css';

interface BreadcrumbsProps {
  children: ReactElement[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ children }) => {
  return (
    <nav className={styles.breadcrumbs}>
      <ul className={styles.list}>
        {children.map((link, index) => {
          return (
            <li key={index} className={styles.item}>
              {link}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
