/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en el componente AddCategory', ()=>{
    test('Debe de cambiar el valor de la caja de texto', () => {
        render( <AddCategory onNewCategory={ () => {}}/> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Eren' } } );
        expect( input.value ).toBe('Eren');
        // screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Eren';
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        // screen.debug();

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        // expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    // test('No debe de llamar el setCategories si el input está vacío', () => {

    //     const setCategories = jest.fn();
    //     render( <AddCategory setCategories={ setCategories }/> );

    //     const form = screen.getByRole('form');
    //     fireEvent.submit( form );

    //     expect( setCategories ).toHaveBeenCalled(0);
    //     expect( setCategories ).not.toHaveBeenCalled();
    // });
});