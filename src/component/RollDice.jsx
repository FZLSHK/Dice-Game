
import styled from "styled-components"

const RollDice = ({currentDice,roleDice}) => {


  return (
  <DiceContainer>
      
<div className="Dice" onClick={roleDice}>
    <img src={`/Images/Dice/dice_${currentDice}.png`} alt="dice 1"/>
</div>
<p>click on dice on roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div `
display:flex;
justify-content: center;
margin-top: 48px;
align-items: center;
flex-direction: column;
.dice{
    cursor: pointer;
}

p{
    font-size: 24px;
}

`;
