
import * as actionTypes from '../constants/actionTypes';
import * as messages from '../constants/messages';
import '../api/mealBidAPI';
import axios from 'axios';


const fetchMealBidInputSuccess = (data) => {
    return {
        type: actionTypes.FETCH_MEAL_BID_INPUT_SUCCESS,
        payload: data
    }
}


const errorOccured = (error) => {
    return {
        type: actionTypes.ERROR_OCCURED,
        payload: error
    }
}


export const selectJourney = (journey) => async (dispatch, getState) => {

    var journeys = getState().meal.journeys
    dispatch({
        type: actionTypes.SELECT_JOURNEY_SUCCESS,
        payload: journeys.find(x => x.key === journey)
    })
}


export const backToJourneyPage = (journey) => async (dispatch, getState) => {

    dispatch({
        type: actionTypes.BACK_JOURNEY_PAGE_SUCCESS,
        payload: journey
    })
}


export const resetError = () => async (dispatch, getState) => {

    dispatch({
        type: actionTypes.RESET_ERROR,
    })
}


export const submitMeals = (journey) => async (dispatch, getState) => {

    if (journey && !journey.meals.find(x => x.amount !== 0)) {
        dispatch({
            type: actionTypes.CURRENT_JOURNEY_MEALS_NOT_COMPLETE,
            payload: journey
        })
    }
    else {
        var journeyWithoutMeals = false;
        var journeys = getState().meal.journeys
        journeys.forEach((item) => {
            if (!item.meals.find(x => x.amount !== 0)) {
                journeyWithoutMeals = true;
            }
        })

        if (journeyWithoutMeals) {
            dispatch({
                type: actionTypes.ALL_JOURNEY_MEALS_NOT_COMPLETE,
                payload: journey
            })
        }
        else {
            dispatch({
                type: actionTypes.JOURNEY_MEALS_SELECTION_SUCCESS,
                payload: journey
            })
        }
    }
}


export const fetchMealInput = () => async (dispatch, getState) => {

    try {

        const response = await axios.get('/api/v1/mealbid')

        if (response.status === 200 && response.data.status === 'OK') {
            return dispatch(fetchMealBidInputSuccess(response.data.data))
        }

        dispatch(errorOccured({ status: 'ERROR', message: messages.API_FETCH_ERROR }))

    }
    catch (e) {
        dispatch(errorOccured({ status: 'ERROR', message: e.message }))
    }
}
