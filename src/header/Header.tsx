import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #004b8b;
  display: flex;
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
    <HeaderContainer className={props.className}>
      <Title>Scryfall</Title>
      <StyledProfile
        name="John Smith"
        pictureUri="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ></StyledProfile>
    </HeaderContainer>
  );
};

export default Header;
