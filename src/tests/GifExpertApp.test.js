/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import GifExpertApp from "../GifExpertApp";

describe('Prueba sobre el componente <GifExpertApp />', () => {
    test('Deberia coincidir el snapshot', () => {
        const { container} = render( <GifExpertApp/> );
        expect( container ).toMatchSnapshot();

        screen.debug();
    });

    test('Debe contener el texto GifExpertApp', () => {
        render( <GifExpertApp/> );
        
        const h1 = screen.getByRole('heading', { level: 1 });
        expect( h1 ).toBeTruthy();
    });
});