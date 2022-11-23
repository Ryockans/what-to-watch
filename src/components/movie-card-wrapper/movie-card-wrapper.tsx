import { FC, ReactElement, useState } from 'react';
import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';
import { useNavigate } from 'react-router-dom';

interface MovieCardWrapperProps {
  id: number;
  previewLink: string;
  className: string;
  children: ReactElement[];
  previewDelay?: number;
}

export const MovieCardWrapper: FC<MovieCardWrapperProps> = ({
  id,
  previewLink,
  children,
  className,
  previewDelay = 1000,
}) => {
  const [isPreviewing, setIsPreviewing] = useState(false);
  const navigate = useNavigate();

  const Preview = () => {
    return (
      <video autoPlay muted>
        <source src={previewLink} />
      </video>
    );
  };

  let previewTimeout: TimeoutId;

  const mouseOverHandler = () => {
    previewTimeout = setTimeout(() => setIsPreviewing(true), previewDelay);
  };

  const mouseLeaveHandler = () => {
    clearTimeout(previewTimeout);
    setTimeout(() => setIsPreviewing(false));
  };

  const clickHandler = () => {
    navigate(`/films/${id}`);
    navigate(0);
  };

  const content = isPreviewing ? <Preview /> : children;

  return (
    <article
      className={className}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseLeaveHandler}
      onClick={clickHandler}
    >
      {content}
    </article>
  );
};
