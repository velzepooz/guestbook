import PropTypes, { shape } from 'prop-types';

export const ReviewHeadingShapes = {
  title: PropTypes.string.isRequired,
};

export const ReviewBodyShapes = {
  text: PropTypes.string.isRequired,
};

export const ReviewInfoShapes = {
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export const ReviewShapes = {
  review: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
};

export const ReviewsShapes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewShapes)).isRequired,
};

export const PageHeadingShapes = {
  title: PropTypes.string.isRequired,
};

export const NavigationLinkShapes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isExact: PropTypes.bool.isRequired,
};

export const NavigationShapes = {
  link: PropTypes.arrayOf({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isExact: PropTypes.string.isRequired,
  }),
};

export const MainSectionShapes = {
  children: PropTypes.node,
};

export const HeaderShapes = {
  children: PropTypes.node,
};

export const FormWrapperShapes = {
  children: PropTypes.node,
};

const inputAttributesShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  minLength: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

const textareaAttributesShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
};

export const FormTextareaShapes = {
  attributes: shape(textareaAttributesShape),
  error: PropTypes.bool.isRequired,
  onFocus: PropTypes.func.isRequired,
};

export const FormInputShapes = {
  attributes: shape(inputAttributesShape),
  error: PropTypes.bool,
  onFocus: PropTypes.func.isRequired,
};

export const FormButtonShapes = {
  text: PropTypes.string.isRequired,
};

export const FormShapes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export const AlertShapes = {
  children: PropTypes.node.isRequired,
};
