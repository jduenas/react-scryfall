import React from "react";
import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import styled from "styled-components";
import "./assets/fonts/OpenSans-Regular.ttf";

const FlexContainer = styled.div`
  display: flex;
  margin-top: 40px;
  font-family: \"Open Sans\";
`;

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <FlexContainer>
        <Sidebar></Sidebar>
      </FlexContainer>
    </React.Fragment>
  );
};

export default App;
