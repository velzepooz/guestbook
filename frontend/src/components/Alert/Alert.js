import React from 'react';
import {
  transitions,
  positions,
  Provider as AlertProvider,
  types,
} from 'react-alert';
import AlertMUITemplate from 'react-alert-template-mui';
import { AlertShapes } from '../../Shapes/Shapes';

const options = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: '30px',
  transition: transitions.SCALE,
  type: types.ERROR,
};

export const Alert = ({ children }) => {
  return (
    <AlertProvider template={AlertMUITemplate} {...options}>
      {children}
    </AlertProvider>
  );
};

Alert.propTypes = AlertShapes;
