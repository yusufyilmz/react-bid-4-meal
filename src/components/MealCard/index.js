

import React from 'react';
import { Col, ListGroup } from 'react-bootstrap'
import { CardWrapper, CardBodyWrapper, ListGroupItemWrapper, CardTitleWrapper, ButtonWrapper, InputGroupTextWrapper } from './style';
import { Popup } from '../Popup';
import { MAX_BID_EXCEEDED, MIN_BID_EXCEEDED } from '../../constants/messages';


const Minus = () =>{
    return <i className="fas fa-minus-circle fa-2x"></i>
}

const Plus = () =>{
    return <i className="fas fa-plus-circle fa-2x"></i>
}

const ButtonGroup = ({ changeBid, meal, maxBidReached, minBidReached }) => {
    return <ListGroupItemWrapper >
        <ButtonWrapper
            onClick={() => changeBid(meal, 'decrease')}>
            <Minus />
            <Popup show={minBidReached} message={MIN_BID_EXCEEDED}/>
        </ButtonWrapper>
        <InputGroupTextWrapper>
            {meal.amount} {meal.currency}
        </InputGroupTextWrapper>
        <ButtonWrapper
            onClick={() => changeBid(meal, 'increase')}>
            <Plus />
            <Popup show={maxBidReached} message={MAX_BID_EXCEEDED}/>
        </ButtonWrapper>
    </ListGroupItemWrapper >
}


const MealGroup = ({ meal }) => {

    return meal.ingredients.map(ingredient =>
        <ListGroup.Item key={ingredient}>
            {ingredient}
        </ListGroup.Item>)
}



export const MealCard = ({ meal, changeBid, maxBidReached, minBidReached }) => {
    return (
        <Col md={6}>
            <CardWrapper shine={meal.amount  !== 0 ? "true" : "false"}>
                <CardBodyWrapper>
                    <CardTitleWrapper>
                        {meal.desc}
                    </CardTitleWrapper>
                </CardBodyWrapper>
                <ListGroup>
                    <MealGroup
                        meal={meal} />
                    <ButtonGroup
                        maxBidReached={maxBidReached}
                        minBidReached={minBidReached}
                        changeBid={changeBid}
                        meal={meal} />
                </ListGroup>
            </CardWrapper>
        </Col>

    );
}

