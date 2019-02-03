

import React from 'react';
import { Header } from '../index';
import { shallow, mount } from 'enzyme'

describe('HEADER COMPONENT', () => {

  
    var wrapper, props;

    beforeEach(() => {
        props = {
            message: 'test'
        };
        wrapper = mount(
            <Header {...props}/>
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find('HeaderWrapper').length).toBe(1)
    });

    test('renders props correctly', () => {
        expect(wrapper.prop('message')).toBe(props.message)
    });

    // test('snapchat correctly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

})
