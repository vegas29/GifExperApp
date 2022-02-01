import React from 'react';
import {shallow} from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Probando el componente GifGrid', () =>{
    const category = 'hola mundo';
    test('Debe renderizar el componente correctamente', ()=>{
        useFetchGifs.mockReturnValue({
            data: [],
            loading:true
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', ()=>{

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiercosa/hola.jpg',
            title: 'Cualquier cosa'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false); 
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
        

    })
})