import styled, {keyframes} from "styled-components";
import ProgressBar from "./ProgressBar";

const StyledSection = styled.div`
  background-color: #ffffff;
  border: solid 3px grey;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #ff6961;
`;

const WeekdayTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  border-right: solid 3px lightgrey;
`;

const WeekendTitle = styled(WeekdayTitle)`
  color: green;
  background-color: grey;
`;

const Section = (props) => {
  const {day, progress} = props.data;
  return (
    <>
      <StyledSection>
        {day === "S" ? (
          <WeekendTitle>{day}</WeekendTitle>
        ) : (
          <WeekdayTitle>{day}</WeekdayTitle>
        )}
        <ProgressBar value={progress} />
      </StyledSection>
    </>
  );
};

export default Section;
