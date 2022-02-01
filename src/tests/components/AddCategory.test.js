import react from 'react';
import {shallow} from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en el componente AddCategory', ()=>{

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });
    test('Debe de mostrarse correctamente', ()=>{
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', ()=>{
        const input = wrapper.find('input');
        const value = 'hola mundo';
        input.simulate('change', {
            target:{
                value: value
            }
        });

        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de postear la infomración on submit', ()=>{
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect( setCategories ).not.toHaveBeenCalled();
    })

    test('Deben de llamar el setCategories y limpiar la caja de texto', ()=>{
        const value = 'hola mundo';
        wrapper.find('input').simulate('change', { target: {value}});

        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));
        //expect(wrapper.find('input').text()).toBe('');
        expect(wrapper.find('input').prop('value')).toBe('');
    })
})