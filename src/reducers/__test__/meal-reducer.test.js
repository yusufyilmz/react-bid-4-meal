import mealReducer from '../../reducers/meal-reducer';
import * as actionTypes from '../../constants/actionTypes';
import * as messages from '../../constants/messages';
import input from '../../api/input.json';

describe('REDUCERS', () => {

    let initialState;

    beforeEach(() => {
        initialState = {
            passengers: [],
            journeys: [],
            selectedJourney: null,
            selection: null,
            error: false,
            errorMessage: '',
        }

    });

    describe('INITIAL_STATE', () => {
        test('is correct', () => {
            const action = { type: 'dummy_action' };
            expect(mealReducer(undefined, action)).toEqual(initialState);
        });
    });


    describe('FETCH_MEAL_BID_INPUT_SUCCESS', () => {
        test('returns correct state', () => {
            var payload = input;
            const action = { type: actionTypes.FETCH_MEAL_BID_INPUT_SUCCESS, payload };
            expect(mealReducer(undefined, action)).toEqual({
                ...initialState,
                passengers: payload.booking.passengers,
                journeys: payload.booking.journeys.map((journey) => {
                    return {
                        ...journey,
                        meals: payload.options.map((option) => { return { ...option, amount: 0 } })
                    }
                }),
            });
        });
    });

    describe('SELECT_JOURNEY_SUCCESS', () => {
        test('returns correct state', () => {
            var payload = { testData: 'test' }
            const action = { type: actionTypes.SELECT_JOURNEY_SUCCESS, payload };
            expect(mealReducer(undefined, action)).toEqual({ ...initialState, selectedJourney: payload });

        });
    });


    describe('BACK_JOURNEY_PAGE_SUCCESS', () => {
        test('returns correct state', () => {
            const action = { type: actionTypes.BACK_JOURNEY_PAGE_SUCCESS };
            expect(mealReducer(undefined, action)).toEqual({ ...initialState, selectedJourney: null });
        });
    });


    describe('CURRENT_JOURNEY_MEALS_NOT_COMPLETE', () => {
        test('returns correct state', () => {

            const action = { type: actionTypes.CURRENT_JOURNEY_MEALS_NOT_COMPLETE };
            expect(mealReducer(undefined, action)).toEqual({
                ...initialState,
                error: true,
                errorMessage: messages.CURRENT_JOURNEY_MEALS_NOT_COMPLETE_MESSAGE,
            });

        });
    });

    describe('ALL_JOURNEY_MEALS_NOT_COMPLETE', () => {
        test('returns correct state', () => {
            const action = { type: actionTypes.ALL_JOURNEY_MEALS_NOT_COMPLETE };
            expect(mealReducer(undefined, action)).toEqual({
                ...initialState,
                error: true,
                errorMessage: messages.ALL_JOURNEY_MEALS_NOT_COMPLETE_MESSAGE,
            });

        });
    });



    
})