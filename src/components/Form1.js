import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Form = () => {
  const [] = useState();

  return (
    <FormContainer>
      <FormFlex>
        <FormPair>
          <FormLable>:סוג הגג</FormLable>
          <input />
        </FormPair>

        <FormPair>
          <FormLable>:כיוון הגג</FormLable>
          <input />
        </FormPair>

        <FormPair>
          <FormLable>:שטח הגג (במ"ר)</FormLable>
          <input type="number" />
        </FormPair>
      </FormFlex>
      <button>חשב</button>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 50%;
  height: 25vh;
  margin: 2rem;

  border-radius: 1rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  float: right;

  input {
    direction: rtl;
    outline: none;
  }
  button {
    font-size: 1.2rem;
    border: none;
    padding: 0.5rem 2rem;
    margin: 0 0 2rem 1rem;
    cursor: pointer;
    border-radius: 0.3rem;
    background: #ff7676;
    color: white;
  }
`;

const FormFlex = styled.div`
  display: flex;
  flex-direction: column;

  margin: 1rem;
  padding: 1rem;
`;
const FormPair = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  margin-bottom: 1rem;
`;
const FormLable = styled.label`
  font-size: 1.2rem;
  padding-left: 0.4rem;
`;
