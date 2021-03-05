import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import classnames from 'classnames';
import { useAlert } from 'react-alert';
import styles from './AddReviewPage.module.scss';
import { MainSection } from '../../components/MainSection/MainSection';
import { PageHeading } from '../../components/PageHeading/PageHeading';
import { FormWrapper } from '../../components/FormWrapper/FormWrapper';
import { Form } from '../../components/Form/Form';
import { FormField } from '../../components/FormField/FormField';
import { FormTextarea } from '../../components/FormTextarea/FormTextarea';
import { FormButton } from '../../components/FormButton/FormButton';
import { inputs } from './inputs';
import { prepareFormData, isValidFormData } from './helpers';
import { addReview } from '../../api/addReview';

export const AddReviewPage = () => {
  const alert = useAlert();
  const [isError, setError] = useState(false);
  const history = useHistory();

  const resetError = useCallback(() => {
    setError(false);
  }, []);

  const handleFormSubmit = useCallback(async(event) => {
    event.preventDefault();
    const form = event.target;
    const preparedFormData = prepareFormData(form);

    if (isValidFormData(preparedFormData)) {
      const isAdded = await addReview(preparedFormData);

      if (isAdded) {
        alert.show('Review added');

        form.reset();

        setTimeout(() => {
          history.push('/');
        }, 3100);
      } else {
        alert.show('Error. Try again!');
      }
    } else {
      setError(true);
    }
  }, [alert, history]);

  return (
    <MainSection>
      <PageHeading title="Add Review" />
      <FormWrapper>
        <Form handleSubmit={handleFormSubmit}>
          <div className={styles.inputsGroup}>
            <FormField
              attributes={inputs.name}
              onFocus={resetError}
            />
            <FormField
              attributes={inputs.title}
              error={isError}
              onFocus={resetError}
            />
          </div>
          <FormTextarea
            attributes={inputs.message}
            error={isError}
            onFocus={resetError}
          />
          <div className={styles.formControl}>
            <FormButton text="Submit" />
            <span
              className={classnames(
                styles.formErrorMessage,
                {
                  [styles.formErrorMessageShow]: isError,
                },
              )
              }
            >
              Please, fill all required field
            </span>
          </div>
        </Form>
      </FormWrapper>
    </MainSection>
  );
};
