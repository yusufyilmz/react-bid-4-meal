

import React from 'react';
import { MealCard } from '../index';
import { shallow, mount } from 'enzyme'
import input from '../../../api/input.json';
import { Col, ListGroup } from 'react-bootstrap'

describe('MEAL CARD COMPONENT', () => {

    var wrapper, props;

    beforeEach(() => {
        props = {
            meal: input.options[0],
            maxBidReached: false,
            minBidReached: false,
            changeBid: jest.fn(),
        };

        wrapper = mount(
            <MealCard {...props} />
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find('CardWrapper').length).toBe(1)
    });


    test('renders element correctly', () => {
        expect(wrapper.find('CardBodyWrapper').length).toBe(1)
    });

    test('renders element correctly', () => {
        expect(wrapper.find(ListGroup.Item).length).toBe(props.meal.ingredients.length +1)
    });


    test('renders props correctly', () => {
        expect(wrapper.find('CardWrapper').at(0).prop('shine')).toBe("true")
    });


    test('renders text correctly', () => {
        expect(wrapper.find('CardWrapper').at(0).text()).toContain(props.meal.desc)
    });

    test('renders onclick correctly', () => {
        wrapper.find('ButtonWrapper').at(0).simulate('click');
        expect(props.changeBid.mock.calls.length).toEqual(1);
    });

    // test('snapchat correctly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

})
