

import React from 'react';
import { ErrorPage } from '../index';
import { shallow, mount } from 'enzyme'
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import ModalBox from '../../ModalBox';
import ErrorContainer from '../../../containers/errorContainer';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]

describe('ERROR PAGE COMPONENT', () => {

    const mockStore = configureMockStore(middlewares);
    const state = {
        meal: {
            passengers: [],
            journeys: [],
            selectedJourney: null,
            selection: null,
            error: true,
            errorMessage: 'message',
        }
    }
    const store = mockStore(state);

    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <ErrorPage />
            </Provider>
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find(ModalBox).length).toBe(1)
    });

    test('renders element correctly', () => {
        expect(wrapper.find(ErrorContainer).length).toBe(1)
    });

    test('renders props correctly', () => {
        expect(wrapper.find(ModalBox).props()['show']).toBeTruthy()
    });

    test('renders props correctly', () => {
        expect(wrapper.find(ModalBox).props()['message']).toBe(state.meal.errorMessage)
    });


    // test('snapchat correctly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

})
