import styles from './page-content.module.css';
import { FC, ReactElement } from 'react';

interface PageContentProps {
  children: ReactElement[];
}

export const PageContent: FC<PageContentProps> = ({ children }) => {
  return (
    <div className={styles.content}>
      <section className={styles.catalog}>{children.slice(0, -1)}</section>
      {children[children.length - 1]}
    </div>
  );
};
