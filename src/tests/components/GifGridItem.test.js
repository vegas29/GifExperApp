import React from 'react';
import {shallow} from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en GifExpert',()=>{

    const title = 'Title X';
    const url = 'http://localhost:3000/imagen.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)
    test('Debe de mostrar el render del componente GifGridItem', ()=>{

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de tener un párrafo con el title', ()=>{

        const h3 = wrapper.find('h3');
        expect(h3.text().trim()).toBe(title);
    })

    test('Debe de tener la imagen igual al url y alt de los props', ()=>{
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Debe de tener animate__fadeIn', ()=>{
        const div = wrapper.find('div');
        const className = div.prop('className')
        expect(className.includes('animate__fadeIn')).toBe(true);

    })
})