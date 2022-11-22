import React, { FC } from 'react';
import styles from './filter-list.module.css';

interface FilterListProps {
  filters: string[];
  onFilterClick: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterList: FC<FilterListProps> = (props) => {
  return (
    <ul className={styles.filterList}>
      <li key={100} className={styles.filterItem}>
        <button
          className={styles.filterLink}
          onClick={() => props.onFilterClick('All genres')}
        >
          All genres
        </button>
      </li>
      {props.filters.map((filter, index) => {
        if (index > 8) return;
        return (
          <li key={100 + index} className={styles.filterItem}>
            <button
              className={styles.filterLink}
              onClick={() => props.onFilterClick(filter)}
            >
              {filter}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
