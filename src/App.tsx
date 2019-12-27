import React from "react";
import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import styled from "styled-components";
import "./assets/fonts/OpenSans-Regular.ttf";
import { BrowserRouter, Route } from "react-router-dom";
import Cards from "./details/Cards";

const FlexContainer = styled.div`
  display: flex;
  margin-top: 40px;
  font-family: "Open Sans";
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <FlexContainer>
        <Sidebar></Sidebar>
        <Route path="/set/:setId" component={Cards}></Route>
      </FlexContainer>
    </BrowserRouter>
  );
};

export default App;
