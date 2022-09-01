import styled from "styled-components";
import Section from "./components/Section";
import "./App.css"

const Title = styled.h1`
  color: #b19cd9;
`;

const days = [
  {
    day: "M",
    progress: 10,
  },
  {
    day: "T",
    progress: 9,
  },
  {
    day: "W",
    progress: 7,
  },
  {
    day: "T",
    progress: 6,
  },
  {
    day: "F",
    progress: 5,
  },
  {
    day: "S",
    progress: 4,
  },
  {
    day: "S",
    progress: 2,
  },
];
const daysElem = days.map(day => <Section data={day}></Section>)

function App() {
  return (
    <>
      <Title>Progress Tracker</Title>
      {daysElem}
    </>
  );
}

export default App;
