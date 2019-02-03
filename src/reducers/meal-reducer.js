
import * as actionTypes from '../constants/actionTypes';
import * as messages from '../constants/messages';

const initialState = {
    passengers: [],
    journeys: [],
    selectedJourney: null,
    selection: null,
    error: false,
    errorMessage: '',
}

export default function (state = initialState, action) {

    switch (action.type) {
        case actionTypes.FETCH_MEAL_BID_INPUT_SUCCESS:
            return {
                ...state,
                passengers: action.payload.booking.passengers,
                journeys: action.payload.booking.journeys.map((journey) => {
                    return {
                        ...journey,
                        meals: action.payload.options.map((option) => { return { ...option, amount: 0 } })
                    }
                }),
                selectedJourney: null
            }
        case actionTypes.SELECT_JOURNEY_SUCCESS:
            return {
                ...state,
                selectedJourney: action.payload
            }

        case actionTypes.BACK_JOURNEY_PAGE_SUCCESS:
            return {
                ...state,
                selectedJourney: null,
            }
        case actionTypes.CURRENT_JOURNEY_MEALS_NOT_COMPLETE:
            return {
                ...state,
                error: true,
                errorMessage: messages.CURRENT_JOURNEY_MEALS_NOT_COMPLETE_MESSAGE,
            }
        case actionTypes.ALL_JOURNEY_MEALS_NOT_COMPLETE:
            return {
                ...state,
                selectedJourney: null,
                error: true,
                errorMessage: messages.ALL_JOURNEY_MEALS_NOT_COMPLETE_MESSAGE,
            }
        case actionTypes.JOURNEY_MEALS_SELECTION_SUCCESS:

            var selectedJourneyMeals = []
            state.journeys.forEach(journey => {
                var selectedMeals = journey.meals.filter(x => x.amount !== 0);
                selectedMeals.forEach(meal => {
                    selectedJourneyMeals.push({
                        journeyKey: journey.key,
                        amount: meal.amount,
                        currency: meal.currency,
                        mealId: meal.mealId
                    })
                })
            })
            return {
                ...state,
                selectedJourney: null,
                selection: {
                    selection: selectedJourneyMeals
                }
            }
        case actionTypes.RESET_ERROR:
            return {
                ...state,
                error: false,
                errorMessage: '',
            }
        default:
            return state;
    }

}