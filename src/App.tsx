import React from "react";
import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import styled from "styled-components";
import "./assets/fonts/OpenSans-Regular.ttf";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cards from "./details/Cards";

const GridContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 40px 1fr;
  font-family: "Open Sans";
`;

const PositionedHeader = styled(Header)`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
`;

const PositionedSidebar = styled(Sidebar)`
  grid-row: 2 / 3;
`;

const PositionedContent = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GridContainer>
        <PositionedHeader></PositionedHeader>
        <PositionedSidebar></PositionedSidebar>
        <PositionedContent>
          <Switch>
            <Route path="/set/:setId" component={Cards}></Route>
          </Switch>
        </PositionedContent>
      </GridContainer>
    </BrowserRouter>
  );
};

export default App;
