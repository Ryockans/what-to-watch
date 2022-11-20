import { FC, ReactElement, useState } from 'react';
import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';

interface MovieCardWrapperProps {
  previewLink: string;
  className: string;
  children: ReactElement[];
  previewDelay?: number;
}

export const MovieCardWrapper: FC<MovieCardWrapperProps> = ({
  previewLink,
  children,
  className,
  previewDelay = 1000,
}) => {
  const [isPreviewing, setIsPreviewing] = useState(false);

  const Preview = () => {
    return (
      <video autoPlay muted>
        <source src={previewLink} />
      </video>
    );
  };

  let previewTimeout: TimeoutId;

  const MouseOverHandler = () => {
    previewTimeout = setTimeout(() => setIsPreviewing(true), previewDelay);
  };

  const MouseLeaveHandler = () => {
    clearTimeout(previewTimeout);
    setTimeout(() => setIsPreviewing(false));
  };

  const content = isPreviewing ? <Preview /> : children;

  return (
    <article
      className={className}
      onMouseOver={MouseOverHandler}
      onMouseOut={MouseLeaveHandler}
    >
      {content}
    </article>
  );
};
