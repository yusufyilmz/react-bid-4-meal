

import React from 'react';
import { Popup } from '../index';
import { shallow, mount } from 'enzyme'

describe('POPUP COMPONENT', () => {

    var wrapper, props;

    beforeEach(() => {
        props = {
            show: true,
            message: 'test',
        };

        wrapper = mount(
            <Popup {...props}/>
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find('PopupWrapper').length).toBe(1)
    });

    test('renders element correctly', () => {
        expect(wrapper.find('PopupTextWrapper').length).toBe(1)
    });


    test('renders props correctly', () => {
        expect(wrapper.find('PopupTextWrapper').prop('show')).toBe(props.show)
    });

    test('renders text correctly', () => {
        expect(wrapper.find('PopupTextWrapper').text()).toBe(props.message)
    });


    // test('snapchat correctly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

})
