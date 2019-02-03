import React, { Fragment } from 'react';
import MealBidContainer from '../../containers/mealBidContainer';
import { JourneyCard } from '../JourneyCard';
import { Row } from 'react-bootstrap'
import { Header } from '../Header';
import { ButtonWrapper, DivWrapper } from './style';

export const JourneyPage = () => {
    return (
        <MealBidContainer>
            {
                (props) => (
                    <Fragment>
                        {!props.selectedJourney && !props.selection &&
                            <Fragment>
                                <Header message="Please select your flight" />
                                <DivWrapper>
                                    <ButtonWrapper
                                        onClick={props.submitMeals}
                                        variant="primary">
                                        Submit
                                    </ButtonWrapper>
                                </DivWrapper>
                                <Row>
                                    {props.journeys.map((item) =>
                                        <JourneyCard
                                            shine={item.meals.find(x => x.amount !== 0) ? "false": "true"}
                                            key={item.key}
                                            journey={item}
                                            selectJourney={props.selectJourney} />
                                    )}
                                </Row>
                            </Fragment>
                        }
                    </Fragment>
                )
            }
        </MealBidContainer>
    );
}

