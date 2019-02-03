import * as actionTypes from '../../constants/actionTypes';
import * as actions from '..';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import moxios from 'moxios';
import * as messages from '../../constants/messages';

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);

describe('ACTIONS', () => {

    let store, item;


    beforeEach(function () {
        store = mockStore({})
        item = {}
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });


    test('FETCH MEAL INPUT ACTION SUCCESS', () => {

        var response = {
            status: 'OK',
            data: [
                {
                    id: 1,
                }
            ]
        };

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response
            });
        });

        const expectedActions = [
            {
                type: actionTypes.FETCH_MEAL_BID_INPUT_SUCCESS, payload: response.data
            },
        ];

        return store.dispatch(actions.fetchMealInput()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    })

    test('FETCH MEAL INPUT ACTION 400 ERROR', () => {

        var response = { "message": "Request failed with status code 400", "status": "ERROR" };
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 400
            });
        });

        const expectedActions = [
            {
                type: actionTypes.ERROR_OCCURED, payload: response
            },
        ];

        return store.dispatch(actions.fetchMealInput()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    })

    test('FETCH MEAL INPUT ACTION API ERROR', () => {

        var response = {
            status: 'ERROR',
            message: messages.API_FETCH_ERROR
        };

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response
            });
        });

        const expectedActions = [
            {
                type: actionTypes.ERROR_OCCURED, payload: response
            },
        ];

        return store.dispatch(actions.fetchMealInput()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })

    test('RESET ERROR ACTION', () => {
        const expectedActions = [{
            type: actionTypes.RESET_ERROR
        }]

        return store.dispatch(actions.resetError()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });


    test('SUBMIT MEALS ACTION ERROR', () => {

        item = {
            meals: []
        }
        const expectedActions = [{
            type: actionTypes.CURRENT_JOURNEY_MEALS_NOT_COMPLETE, payload: item
        }]

        return store.dispatch(actions.submitMeals(item)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });


    test('SUBMIT MEALS ACTION ERROR', () => {

        store = mockStore({meal : {
            journeys: [
                {
                    meals:[
                        {
                            amount: 4
                        }
                    ]
                }
            ]
        }})

      
        const expectedActions = [{
            type: actionTypes.JOURNEY_MEALS_SELECTION_SUCCESS
        }]

        return store.dispatch(actions.submitMeals()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

})