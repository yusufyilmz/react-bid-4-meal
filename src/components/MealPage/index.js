import React, { Fragment } from 'react';
import MealBidContainer from '../../containers/mealBidContainer';
import { MealCard } from '../MealCard';
import ModalBox from '../ModalBox';
import { Row } from 'react-bootstrap'
import { Header } from '../Header';
import { ButtonWrapper, ColWrapper } from './style'


const ButtonGroup = ({ backToJourneyPage, submitMeals }) => {
    return <Row key="buttonRow">
        <ColWrapper md={6} >
            <ButtonWrapper
                onClick={backToJourneyPage}
                variant="primary">
                Back
            </ButtonWrapper>
        </ColWrapper>
        <ColWrapper right="true" md={6}>
            <ButtonWrapper
                onClick={submitMeals}
                right="true"
                variant="primary">
                Submit
            </ButtonWrapper>
        </ColWrapper>
    </Row>
}


export const MealPage = () => {
    return (
        <MealBidContainer>
            {
                (props) => (
                    <Fragment>
                        {props.selectedJourney &&
                            <Fragment>
                                <Header message={`Please bid meals for your ${props.selectedJourney.flight} flight`} />
                                <ButtonGroup
                                    backToJourneyPage={props.backToJourneyPage}
                                    submitMeals={props.submitMeals}
                                />
                                <Row key="mealRow">
                                    {props.selectedJourney.meals.map((item) =>
                                        <MealCard
                                            key={item.mealId}
                                            meal={item}
                                            maxBidReached={props.maxBidReachedId === item.mealId}
                                            minBidReached={props.minBidReachedId === item.mealId}
                                            journey={props.selectedJourney}
                                            changeBid={props.changeBid}
                                        />)}
                                </Row>
                            </Fragment>
                        }
                    </Fragment>
                )
            }
        </MealBidContainer>
    );
}

