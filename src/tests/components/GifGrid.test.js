/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Probando el componente GifGrid', () => {

    const category = 'Eren';

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } />);
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));
        // screen.debug();
    });

    test('Debe de mostrar items cuando se cargan las imgs mediante useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Eren',
                url: 'https://localhost/eren.jpg'
            },
            {
                id: 'CDA',
                title: 'Armin',
                url: 'https://localhost/armin.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } />);
        screen.debug();
        expect( screen.getAllByRole('img').length).toBe(2);
    });
});