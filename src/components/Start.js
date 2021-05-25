import React from 'react'
import styled, { css } from 'styled-components/macro'
import Button from './Button';

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 0em;
`;


const Start = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <Intro>
            <h1>Take the quiz.</h1>
            <h3>Before times out!</h3>
            <h4>All The Best!</h4>
            <Button onClick={startQuiz} css={btnCSS}>Begin</Button>
        </Intro>
    )
}

export default Start
