import React from 'react';
import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Prueba sobre el componente <GifExpertApp />', ()=>{
    test('Debe renderizar el componente', ()=>{
        const wrapper = shallow(<GifExpertApp/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar una lista de categorias', ()=>{
        const categories = ['One Punch', 'SNK'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
})