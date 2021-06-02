import React from "react";
import styled from "styled-components";

const Form = ({
  roofType,
  handleRoofTypeChanged,
  roofDirection,
  handleRoofDirectionChanged,
  roofSize,
  handleRoofSizeChanged,
  //   buttonEnable,
  handleCalcClicked,
  errorMsg,
}) => {
  return (
    <FormContainer>
      <label>סוג הגג:</label>
      <select value={roofType} onChange={handleRoofTypeChanged}>
        <option value="0" style={{ display: "none" }}></option>
        <option value="1">בטון שטוח</option>
        <option value="0.7">רעפים</option>
        <option value="0.9">משולב</option>
      </select>

      <label>כיוון הגג:</label>
      <select
        value={roofDirection}
        onChange={handleRoofDirectionChanged}
        disabled={roofType === "1" ? true : null}
      >
        <option value="0" style={{ display: "none" }}></option>
        <option value="1">דרום</option>
        <option value="0.92">דרום מזרח</option>
        <option value="0.9">דרום מערב</option>
        <option value="0.82">מזרח</option>
        <option value="0.78">מערב</option>
      </select>

      <label>שטח הגג (במ"ר):</label>
      <input value={roofSize} onChange={handleRoofSizeChanged} type="number" />

      <p className="errorMsg">{errorMsg}</p>
      <button onClick={handleCalcClicked}>חשב</button>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  row-gap: 15px;

  border-radius: 1rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  height: 95%;
  width: 50%;
  direction: rtl;
  margin: 1rem;
  padding: 1rem;

  input,
  select {
    height: 1.7rem;
    width: 70%;
    border: none;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  }

  button {
    text-align: center;
    font-size: 1.2rem;
    border: none;
    padding: 0.5rem 2rem;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 0.3rem;
    background: #ff7676;
    color: white;
  }
  .btnDisabled {
    visibility: hidden;
  }
  label {
    font-weight: bold;
  }

  .errorMsg {
    color: red;
    font-weight: bold;
    font-size: 1.1rem;
  }

  @media only screen and (min-width: 1200px) {
    /* width: 80%; */
  }
`;
