import React from 'react';
import styles from './Form.module.scss';
import { FormShapes } from '../../Shapes/Shapes';

export const Form = ({ handleSubmit, children }) => {
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

Form.propTypes = FormShapes;
