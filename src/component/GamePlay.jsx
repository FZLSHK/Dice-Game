import React, { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { Button } from "../Styled/Button";
import { OutlineButton } from "../Styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [currentDice, setCurrentDice] = useState(1);
    const [error,setError] = useState(" ");
    const [showRules,setShowRules] = useState(false);


    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const roleDice = () => {
        if(!selectedNumber){
            setError("Please select a number to roll dice");
            return;
        }
     
        const randomNumber = generateRandomNumber(1, 6);
        setCurrentDice(randomNumber);
      
        if (selectedNumber === randomNumber) {
            setScore(prev => prev + randomNumber);
        } else {
            setScore(prev => prev - 2);
        }

        setSelectedNumber(undefined)
    };
     
   const resetScore = () => {
    setScore(0);
   }

    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore score={score} />
                <NumberSelector
                 error = {error}
                 setError={setError}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                />
            </div>
            <RollDice currentDice={currentDice} roleDice={roleDice} />
             <div className="btns">
                <OutlineButton onClick={resetScore}>Reset</OutlineButton>
                <Button 
                onClick={()=>setShowRules((prev) =>!prev)}>{showRules ? "Hide" : "Show"} Rules</Button>

             </div>
             {showRules && <Rules/>}
        </MainContainer>
    );
};

export default GamePlay;

const MainContainer = styled.main`
    padding: 70px;

    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .btns{
        margin-top: 40px;
        gap: 10px;
        flex-direction: column;
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;


    }
`;
