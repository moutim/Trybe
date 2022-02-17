import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
const service = require('./service');

describe('Testa a funcao fetchAPI retorna o objeto esperado', () => {
    it('Verifica o objeto retornado', async () => {
        service.fetchAPI.mockRestore();
        const objDog = {
            message: "https://images.dog.ceo/breeds/terrier-patterdale/Patterdale.jpg",
            status: "success"
        }

        global.service.fetchAPI = jest.fn(async () => ({
            json: async () => objDog,
        }));

        render(<App />);
        const linkImg = await screen.findByAltText(objDog.message);
        expect(linkImg).toBeInTheDocument();

    })
});