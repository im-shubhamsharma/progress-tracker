import React from "react";
import styled, {keyframes} from "styled-components";

const progressAnimation = keyframes`
   0% {
      width: 0;
   }
   100% {
      width : ${({ value }) => value * 10 + "%" || 0};
   }
`;


const StyledProgressBar = styled.div`
  width: ${({ value }) => value * 10 + "%" || 0};
  height: 50px;
  background-color: ${({ value }) =>
    value >= 8
      ? "#BAFFC9"
      : value >= 6
      ? "#FFFFBA"
      : value >= 4
      ? "#FFDFBA"
      : "#FFB3BA"};
  animation: ${progressAnimation} 1.5s ease-in;
`;

function ProgressBar({ value }) {
  return (
    <div style={{width: "250px"}}>
      <StyledProgressBar value={value}></StyledProgressBar>
    </div>
  )
}

export default ProgressBar;
