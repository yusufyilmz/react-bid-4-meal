

import React from 'react';
import { Card, Col, Badge } from 'react-bootstrap'
import { CardWrapper, ButtonWrapper, RightSpanWrapper, LeftSpanWrapper, CardTextWrapper, CardBodyWrapper } from './style';

const Plane = () => {
    return <i className="fas fa-plane fa-2x"></i>
}

function dateToYMD(str) {
    var date = new Date(str);
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}

function dateToHour(str) {
    var date = new Date(str);
    return date.toLocaleString('en-US', { hour: 'numeric', hour12: true })
}


export const JourneyCard = ({ journey, selectJourney, shine }) => {
    return (
        <Col md={6} >
            <CardWrapper shine={shine} >
                <Card.Body>
                    <Card.Title>
                        <Badge variant="secondary">
                            Flight
                            </Badge>
                        <RightSpanWrapper>
                            <Badge variant="secondary">
                                {journey.flight}
                            </Badge>
                        </RightSpanWrapper>
                    </Card.Title>
                    <CardTextWrapper >
                        <LeftSpanWrapper>
                            {journey.departure}
                        </LeftSpanWrapper>
                        <Plane />
                        <RightSpanWrapper>
                            {journey.arrival}
                        </RightSpanWrapper>
                    </CardTextWrapper>
                    <CardBodyWrapper>
                        <LeftSpanWrapper>
                            <Card.Text>{dateToYMD(journey.departureDate)}</Card.Text>
                            <Card.Text>{dateToHour(journey.departureDate)}</Card.Text>
                        </LeftSpanWrapper>
                        <RightSpanWrapper>
                            <Card.Text>{dateToYMD(journey.arrivalDate)}</Card.Text>
                            <Card.Text>{dateToHour(journey.arrivalDate)}</Card.Text>
                        </RightSpanWrapper>
                    </CardBodyWrapper>
                    <ButtonWrapper
                        onClick={() => selectJourney(journey.key)}
                        variant="primary">Select Flight
                    </ButtonWrapper>
                </Card.Body>
            </CardWrapper>
        </Col>
    );
}





