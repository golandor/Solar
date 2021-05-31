import React from "react";
import styled from "styled-components";

const Results = ({ ss, yearIncome }) => {
  //   const [] = useState();

  return (
    <ResultsContainer>
      <label>הכנסה שנתית:</label>
      <label>{yearIncome} ש"ח</label>

      <label>גודל מערכת:</label>
      <label>{ss} קילו ואט</label>
    </ResultsContainer>
  );
};

export default Results;

const ResultsContainer = styled.div`
  height: 50%;
  width: 50%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  border-radius: 1rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);

  row-gap: 15px;
  direction: rtl;
  margin: 1rem;
  padding: 1rem;

  input {
    height: 1.7rem;
    width: 70%;
  }
  button {
    text-align: center;
    font-size: 1.2rem;
    border: none;
    padding: 0.5rem 2rem;
    margin: 0 auto;
    /* margin: 2rem 1rem; */
    cursor: pointer;
    border-radius: 0.3rem;
    background: #ff7676;
    color: white;
  }
  label {
    font-weight: bold;
    text-align: center;
  }

  @media only screen and (min-width: 1200px) {
    /* width: 80%; */
  }
`;
