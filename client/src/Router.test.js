import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

it('should render fine', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router />, div);
})
