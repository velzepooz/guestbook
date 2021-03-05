import React from 'react';
import classnames from 'classnames';
import styles from './FormTextarea.module.scss';
import { FormTextareaShapes } from '../../Shapes/Shapes';

export const FormTextarea = ({ attributes, error, onFocus }) => {
  return (
    <label htmlFor={attributes.id} className={styles.label}>
      <textarea
        className={classnames(
          styles.textarea,
          { [styles.textareaError]: error },
        )
        }
        id={attributes.id}
        name={attributes.name}
        placeholder={attributes.placeholder}
        rows={attributes.rows}
        cols={attributes.cols}
        required={attributes.isRequired}
        onFocus={onFocus}
      />
    </label>
  );
};

FormTextarea.propTypes = FormTextareaShapes;
