import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en GifGridItem',()=>{

    const title = 'Eren';
    const url = 'https://shingeki-no-kyogin/eren.jpg';

    test('Debe de hacer match con el snapshot', () => {
       const { container } = render(<GifGridItem title={ title } url={ url } />);
       expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la iamgen con el URL, el ALT indicado', () => {
        render(<GifGridItem title={ title } url={ url } />);
        // screen.debug();

        // expect(screen.getByRole('img').src).toBe( url )
        // expect(screen.getByRole('img').alt).toBe( title )

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });

    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifGridItem title={ title } url={ url } />);

        expect( screen.getByText(title) ).toBeTruthy();
    });
});