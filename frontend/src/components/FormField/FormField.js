import React from 'react';
import classnames from 'classnames';
import styles from './FormField.module.scss';
import { FormInputShapes } from '../../Shapes/Shapes';

export const FormField = ({ attributes, onFocus, error = false }) => {
  return (
    <label className={styles.label} htmlFor={attributes.id}>
      {attributes.label}
      <input
        className={classnames(styles.input, { [styles.inputError]: error })}
        id={attributes.id}
        name={attributes.name}
        type={attributes.type}
        minLength={attributes.minLength}
        maxLength={attributes.maxLength}
        pattern={attributes.pattern}
        placeholder={attributes.placeholder}
        required={attributes.isRequired}
        onFocus={onFocus}
      />
    </label>
  );
};

FormField.propTypes = FormInputShapes;
