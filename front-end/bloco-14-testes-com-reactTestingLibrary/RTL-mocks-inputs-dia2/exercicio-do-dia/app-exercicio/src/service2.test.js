import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';

describe('Testa a funcao fetchAPI retorna o objeto esperado', () => {
    it('Verifica o objeto retornado', async () => {
        // service.fetchAPI.mockRestore();
        const objDog = {
            message: "https://images.dog.ceo/breeds/terrier-patterdale/Patterdale.jpg",
            status: "success"
        }

        global.fetch = jest.fn(async () => ({
            json: async () => objDog,
        }));

        render(<App />);
        const linkImg = await screen.findByAltText(objDog.message);
        console.log(linkImg);
        expect(linkImg).toBeInTheDocument();

    })
});