import React from 'react';
import { JourneyPage } from '../JourneyPage';
import { MealPage } from '../MealPage';
import { ResultPage } from '../ResultPage';
import { ErrorPage } from '../ErrorPage';
import {ContainerWrapper} from './style';

export const App = () => {
    return (
        <ContainerWrapper>
               <JourneyPage/>
               <MealPage/>
               <ResultPage/>
               <ErrorPage/>
        </ContainerWrapper>
    );
}

export default App;

