import React from 'react';
import styles from './FormButton.module.scss';
import { FormButtonShapes } from '../../Shapes/Shapes';

export const FormButton = ({ text }) => {
  return (
    <button className={styles.button} type="submit">{text}</button>
  );
};

FormButton.propTypes = FormButtonShapes;
