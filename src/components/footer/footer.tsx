import Logo from '../logo';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Logo dark />

      <div className={styles.copyright}>
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};
