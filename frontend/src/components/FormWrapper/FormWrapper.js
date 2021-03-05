import React from 'react';
import styles from './FormWrapper.module.scss';
import { FormWrapperShapes } from '../../Shapes/Shapes';

export const FormWrapper = ({ children }) => {
  return (
    <div className={styles.formWrapper}>
      <h6 className={styles.heading}>Submit review</h6>
      {children}
    </div>
  );
};

FormWrapper.propTypes = FormWrapperShapes;
