import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select Any number</p>
            <p>Click On Dice Image</p>
            <p>After click on dice if selected number is equal to dice number you will get same point as dice {" "}</p>
            <p>If you get wrong gues then 2 point will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
background-color:#FBF1F1;
padding: 20px;
margin-top: 40px;
border-radius: 10px;

h2{
    font-size: 24px;
   
}
.text{
    margin-top: 24px;
}
`;
