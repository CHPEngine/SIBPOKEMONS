import { SyntheticEvent } from 'react';
import defaultImage from '@assets/img/default_profile.webp';

export const setDefaultImage = (e: SyntheticEvent<HTMLImageElement, Event>): void => {
  const target = e.target as HTMLImageElement;
  target.src = defaultImage;
};
