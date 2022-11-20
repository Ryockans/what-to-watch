import MovieCardWrapper from '../movie-card-wrapper';
import styles from './movie-list-item.module.css';
import { Link } from 'react-router-dom';

interface MovieListItemProps {
  id: number;
  name: string;
  previewImage: string;
  previewVideoLink: string;
}

export const MovieListItem = (props: MovieListItemProps) => {
  return (
    <MovieCardWrapper
      className={styles.movieCard}
      previewLink={props.previewVideoLink}
    >
      <div className={styles.movieCardImage}>
        <img
          src={props.previewImage}
          alt={props.name}
          width="280"
          height="175"
        />
      </div>
      <h3 className={styles.movieCardTitle}>
        <Link className={styles.movieCardLink} to={`/films/${props.id}`}>
          {props.name}
        </Link>
      </h3>
    </MovieCardWrapper>
  );
};
