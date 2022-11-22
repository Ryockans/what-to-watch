import React, { FC, Fragment, useEffect, useState } from 'react';
import Promo from '../promo';
import { PageContent } from '../page-content/page-content';
import { FilterList } from '../filter-list/filter-list';
import MovieList from '../movie-list';
import Footer from '../footer';
import { useDispatch, useSelector } from 'react-redux';
import { movieListSelector } from '../../store/slices/movie-list/selectors';
import { movieSelector } from '../../store/slices/movie/selectors';
import { getAllMovies } from '../../store/slices/movie-list/actions';
import { AppDispatch } from '../../store/store';
import { getPromo } from '../../store/slices/movie/actions';
import ShowMoreButton from '../show-more-button';
import { MovieInfo } from '../../types/models';

export const MainPage: FC = () => {
  const { movies } = useSelector(movieListSelector);
  const { movieInfo: promoMovie } = useSelector(movieSelector);
  const [displayedMovies, setDisplayedMovies] = useState<MovieInfo[]>([]);
  const [filter, setFilter] = useState('All genres');
  const [itemQuantity, setItemQuantity] = useState(8);
  const filterList = Array.from(new Set(movies.map((item) => item.genre)));

  function showMore() {
    setItemQuantity((quantity) => quantity + 8);
  }

  const maxItems =
    filter === 'All genres'
      ? movies.length
      : movies.filter((item) => item.genre === filter).length;

  const showMoreEnable = itemQuantity < maxItems;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllMovies());
    dispatch(getPromo());
  }, [dispatch]);

  useEffect(() => {
    if (filter !== 'All genres') {
      setDisplayedMovies(
        movies.filter((item) => item.genre === filter).slice(0, itemQuantity),
      );
    } else {
      setDisplayedMovies(movies.slice(0, itemQuantity));
    }
  }, [filter, itemQuantity]);

  useEffect(() => {
    setItemQuantity(8);
  }, [filter]);

  return (
    <Fragment>
      {promoMovie && <Promo movie={promoMovie} />}
      <PageContent>
        <FilterList filters={filterList} onFilterClick={setFilter} />
        <MovieList movieList={displayedMovies} />
        {showMoreEnable && <ShowMoreButton onClick={showMore} />}
        <Footer />
      </PageContent>
    </Fragment>
  );
};
