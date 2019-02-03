import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMealInput, selectJourney, backToJourneyPage, submitMeals, resetError } from '../actions';

class MealBidContainer extends Component {

    state = {
        selectedJourney: null,
        maxBidReached: null
    }

    componentDidMount() {
        this.props.fetchMealInput();
    }

    onSelectJournery = (journey) => {
        this.props.selectJourney(journey);
    }

    submitMeals = () => {
        this.props.submitMeals(this.state.selectedJourney);
    }

    backToJourneyPage = () => {
        this.props.backToJourneyPage(this.state.selectedJourney);
    }

    changeBid = (selectedMeal, type) => {
        var selectedjourney = this.state.selectedJourney
        var meal = selectedjourney.meals.find(x => x.mealId === selectedMeal.mealId);

        if (type === 'increase') {
            if (meal.amount < meal.priceRange.max) {
                meal.amount += meal.priceRange.jump;
                this.setState({ selectedjourney, minBidReachedId: null })
            }
            else {
                this.setState({ maxBidReachedId: meal.mealId})
            }
        }
        else if (type === 'decrease') {
            if (meal.amount > meal.priceRange.min) {
                meal.amount -= meal.priceRange.jump;
                this.setState({ selectedjourney, maxBidReachedId: null })
            }
            else {
                this.setState({ minBidReachedId: meal.mealId})
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedJourney !== this.props.selectedJourney) {
            this.setState({ selectedJourney: this.props.selectedJourney })
        }
    }

    getStateAndHelpers() {
        return {
            journeys: this.props.journeys,
            selectJourney: this.onSelectJournery,
            selectedJourney: this.state.selectedJourney,
            changeBid: this.changeBid,
            backToJourneyPage: this.backToJourneyPage,
            submitMeals: this.submitMeals,
            selection: this.props.selection,
            maxBidReachedId: this.state.maxBidReachedId,
            minBidReachedId: this.state.minBidReachedId
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        passengers: state.meal.passengers,
        journeys: state.meal.journeys,
        meals: state.meal.meals,
        selectedJourney: state.meal.selectedJourney,
        selection: state.meal.selection

    }
}

export default connect(mapStateToProps,
    {
        fetchMealInput,
        selectJourney,
        backToJourneyPage,
        submitMeals
    })(MealBidContainer);