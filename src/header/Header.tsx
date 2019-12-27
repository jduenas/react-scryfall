import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

const HeaderContainer = styled.div`
  height: 40px;
  background: #004b8b;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  padding-right: 15px;
  justify-content: space-between;
`;

const Title = styled.span`
  display: inline-block;
  color: white;
  align-self: center;
  margin-left: 15px;
  font-weight: bold;
`;

const StyledProfile = styled(Profile)`
  background: red;
  align-self: center;
`;

const Header = (props: any) => {
  return (
    <HeaderContainer>
      <Title>Scryfall</Title>
      <StyledProfile
        name="John Smith"
        pictureUri="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ></StyledProfile>
    </HeaderContainer>
  );
};

export default Header;
