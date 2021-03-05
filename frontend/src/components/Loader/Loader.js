import React from 'react';
import LoaderComponent from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderComponent
      type="TailSpin"
      color="rgba(0, 0, 0, 0.5)"
      height="5rem"
      width="5rem"
    />
  );
};
