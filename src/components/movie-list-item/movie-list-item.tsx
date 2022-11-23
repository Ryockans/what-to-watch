import MovieCardWrapper from '../movie-card-wrapper';
import styles from './movie-list-item.module.css';

interface MovieListItemProps {
  id: number;
  name: string;
  previewImage: string;
  previewVideoLink: string;
}

export const MovieListItem = (props: MovieListItemProps) => {
  return (
    <MovieCardWrapper
      id={props.id}
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
        <span className={styles.movieCardLink}>{props.name}</span>
      </h3>
    </MovieCardWrapper>
  );
};
