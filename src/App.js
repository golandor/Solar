import React, { useState, useEffect } from "react";

import styled from "styled-components";

import GlobalStyles from "./components/GlobalStyles";

import Form from "./components/Form";
import Results from "./components/Results";
import Graph from "./components/Graph";

import { drs, ps, monthEfficiency, weekDays } from "./data";

function App() {
  const [roofType, setRoofType] = useState("");
  const [roofDirection, setRoofDirection] = useState("");
  const [roofSize, setRoofSize] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  const [buttonEnable, setButtonEnable] = useState(false);

  const [monthIncome, setMonthIncome] = useState([]);
  const [yearIncome, setYearIncome] = useState(0);

  const [ss, setSs] = useState(0);
  const [poe, setPoe] = useState(0);

  const handleRoofTypeChanged = (e) => {
    let roofTypeValue = e.target.value;
    setRoofType(roofTypeValue);
    if (roofTypeValue === "1") {
      setRoofDirection("1");
    }
  };
  const handleRoofDirectionChanged = (e) => {
    let roofDirectionValue = e.target.value;
    setRoofDirection(roofDirectionValue);
  };

  const handleRoofSizeChanged = (e) => {
    let roofSizeValue = e.target.value;
    setRoofSize(roofSizeValue);
  };

  const handleCalcClicked = () => {
    if (!buttonEnable) {
      setErrorMsg("יש למלא את כל השדות");
    } else {
      setErrorMsg("");
      let aop = amountOfPanels();
      let ss = systemSize(aop);
      calcPOE(ss);
    }
  };

  const amountOfPanels = () => {
    let aop = Math.ceil((roofType * roofSize) / drs);
    return aop;
  };

  const systemSize = (aop) => {
    let ss = roundDown((aop * ps) / 1000);
    setSs(ss);
    return ss;
  };

  const roundDown = (number) => {
    if (number % 10 === 0) {
      return number;
    }
    return Math.ceil((number - 10) / 10) * 10;
  };

  const calcPOE = (ss) => {
    let poe;
    if (ss < 100) {
      poe = (15 * 48) / ss + (ss - 15) * (41 / ss);
    } else {
      poe = (15 * 48) / ss + (85 * 41) / ss + (ss - 100) * (19.81 / ss);
    }
    setPoe(poe);
    return poe;
  };

  const calcMonthlyIncome = (month, ss, poe) => {
    let ef =
      (poe *
        ss *
        monthEfficiency[month].efficiency *
        monthEfficiency[month].hoursPerDay *
        roofDirection) /
      1000;
    return ef;
  };

  useEffect(() => {
    if (poe > 0) {
      let monthIncomeArray = [];

      let yearIncome = 0;
      for (let month = 1; month <= 12; month++) {
        let monthIncomeres = calcMonthlyIncome(month, ss, poe);
        monthIncomeArray.push({
          name: weekDays[month - 1],
          Income: Number(Number.parseFloat(monthIncomeres).toFixed(2)),
        });
        yearIncome += Math.round((monthIncomeres * 100) / 100);
      }
      setMonthIncome(monthIncomeArray);
      setYearIncome(yearIncome);
    }
  }, [poe]);

  useEffect(() => {
    if (roofType !== "0" && roofDirection !== "0" && Number(roofSize) > 0) {
      setButtonEnable(true);
      setErrorMsg("");
    } else {
      setButtonEnable(false);
    }
  }, [roofType, roofDirection, roofSize]);

  return (
    <div className="App">
      <GlobalStyles />
      <h1>מחשבון סולארי</h1>
      <MainContainer>
        <RowContainer>
          <Form
            roofType={roofType}
            setRoofType={setRoofType}
            handleRoofTypeChanged={handleRoofTypeChanged}
            roofDirection={roofDirection}
            setRoofDirection={setRoofDirection}
            handleRoofDirectionChanged={handleRoofDirectionChanged}
            roofSize={roofSize}
            setRoofSize={setRoofSize}
            handleRoofSizeChanged={handleRoofSizeChanged}
            // buttonEnable={buttonEnable}
            handleCalcClicked={handleCalcClicked}
            errorMsg={errorMsg}
          />
          <Results ss={ss} yearIncome={yearIncome} />
        </RowContainer>

        <RowContainer>
          <Graph monthIncome={monthIncome} />
        </RowContainer>
      </MainContainer>
    </div>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;

  padding: 0.8rem;
  /* margin: 0.8rem; */
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
  align-items: center;

  height: 45vh;
  width: 100vw;
  /* margin: 1rem; */
  padding: 0.8rem;

  @media only screen and (max-width: 450px) {
    /* height: 80vh; */
  }
`;
