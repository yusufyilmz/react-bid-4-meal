

import React from 'react';
import { App } from '../index';
import { shallow, mount } from 'enzyme'
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import { JourneyPage } from '../../JourneyPage';
import { MealPage } from '../../MealPage';
import { ResultPage } from '../../ResultPage';
import { ErrorPage } from '../../ErrorPage';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]

describe('APP COMPONENT', () => {

    const mockStore = configureMockStore(middlewares);
    const store = mockStore({
        meal: {
            passengers: [],
            journeys: [],
            selectedJourney: null,
            selection: null,
            error: false,
            errorMessage: '',
        }
    });

    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find(JourneyPage).length).toBe(1)
    });

    test('renders element correctly', () => {
        expect(wrapper.find(MealPage).length).toBe(1)
    });

    test('renders element correctly', () => {
        expect(wrapper.find(ResultPage).length).toBe(1)
    });

    test('renders element correctly', () => {
        expect(wrapper.find(ErrorPage).length).toBe(1)
    });

    // test('snapchat correctly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

})
