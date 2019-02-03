

import React from 'react';
import { JourneyCard } from '../index';
import { shallow, mount } from 'enzyme'
import input from '../../../api/input.json';
import { Badge } from 'react-bootstrap'

describe('JOURNEY CARD COMPONENT', () => {

    var wrapper, props;

    beforeEach(() => {
        props = {
            journey: input.booking.journeys[0],
            selectJourney: jest.fn(),
            shine: "false"
        };

        wrapper = mount(
            <JourneyCard {...props}/>
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find('CardWrapper').length).toBe(1)
    });


    test('renders element correctly', () => {
        expect(wrapper.find('ButtonWrapper').length).toBe(1)
    });

    test('renders element correctly', () => {
        expect(wrapper.find('LeftSpanWrapper').length).toBe(2)
    });

    test('renders element correctly', () => {
        expect(wrapper.find('RightSpanWrapper').length).toBe(3)
    });

    test('renders element correctly', () => {
        expect(wrapper.find(Badge).length).toBe(2)
    });


    test('renders props correctly', () => {
        expect(wrapper.find('CardWrapper').at(0).prop('shine')).toBe(props.shine)
    });


    test('renders text correctly', () => {
        expect(wrapper.find('RightSpanWrapper').at(0).text()).toBe(props.journey.flight)
    });


    test('renders text correctly', () => {
        expect(wrapper.find('LeftSpanWrapper').at(0).text()).toBe(props.journey.departure)
    });


    test('renders text correctly', () => {
        expect(wrapper.find('LeftSpanWrapper').at(0).text()).toBe(props.journey.departure)
    });

    test('renders onclick correctly', () => {
        wrapper.find('ButtonWrapper').simulate('click');
        expect(props.selectJourney.mock.calls.length).toEqual(1);
    });


    // test('snapchat correctly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

})
