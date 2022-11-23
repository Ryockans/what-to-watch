import React, { FC, useCallback, useState } from 'react';
import styles from './filter-list.module.css';
import classNames from 'classnames';

interface FilterListProps {
  filters: string[];
  onFilterClick: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterList: FC<FilterListProps> = (props) => {
  const [activeFilter, setActiveFilter] = useState(0);

  const createFilters = useCallback(
    (filter: string, index: number) => {
      if (index > 8) return;
      const filterClass =
        index + 1 === activeFilter
          ? classNames(styles.filterItem, styles.Active)
          : styles.filterItem;
      return (
        <li key={100 + index} className={filterClass}>
          <button
            className={styles.filterLink}
            onClick={() => {
              props.onFilterClick(filter);
              setActiveFilter(index + 1);
            }}
          >
            {filter}
          </button>
        </li>
      );
    },
    [activeFilter],
  );

  const firstFilterClass =
    activeFilter === 0
      ? classNames(styles.filterItem, styles.Active)
      : styles.filterItem;

  return (
    <ul className={styles.filterList}>
      <li key={100} className={firstFilterClass}>
        <button
          className={styles.filterLink}
          onClick={() => {
            props.onFilterClick('All genres');
            setActiveFilter(0);
          }}
        >
          All genres
        </button>
      </li>
      {props.filters.map(createFilters)}
    </ul>
  );
};
