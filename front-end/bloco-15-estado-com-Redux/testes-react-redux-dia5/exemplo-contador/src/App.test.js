import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);

  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.getByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />);

    const button = screen.getByRole('button', { name: /clique aqui/i });
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  test('check the value of innital state', () => {
    renderWithRedux(<App />, { initialState: { counter: 5 }});

    expect(screen.getByText('4')).toBeInTheDocument();
  });
});