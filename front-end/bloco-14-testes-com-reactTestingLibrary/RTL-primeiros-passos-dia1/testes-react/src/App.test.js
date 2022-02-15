import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se existe um input do tipo email na tela', () => {
  render(<App />);
  const labelEmail = screen.getByLabelText('Email');
  expect(labelEmail).toBeInTheDocument();
  expect(labelEmail).toHaveProperty('type', 'email');
});

test('Verifica se existe um botao de enviar e um de voltar na tela', () => {
  render(<App />);
  const buttonSend = screen.getByTestId('button-send');
  const buttonBack = screen.getByTestId('button-back');
  expect(buttonSend).toBeInTheDocument();
  expect(buttonSend).toHaveProperty('type', 'button');
  expect(buttonSend).toHaveValue('Enviar');

  expect(buttonBack).toBeInTheDocument();
  expect(buttonBack).toHaveProperty('type', 'button');
  expect(buttonBack).toHaveValue('Voltar');

})

test('Verifica se existe dois botoes na tela', () => {
  render(<App />);
  const button = screen.getAllByRole('button');
  expect(button).toHaveLength(2);
})
