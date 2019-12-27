import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export interface SidebarItemProps {
  iconUri: string;
  key: string;
  displayName: string;
  onClicked: (key: string) => void;
  selected: boolean;
}

export interface SelectionStyle {
  selected?: boolean;
}

const Container = styled.div<SelectionStyle>`
  display: flex;
  height: 40px;
  padding-left: 15px;
  background: ${props => (props.selected ? "#a9c1d6" : null)};
  ${props => (props.selected ? null : `:hover { background-color: #edebe9; }`)}
`;

const Icon = styled.img`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  padding-top: 2px;
  align-self: center;
`;

const Title = styled.span<SelectionStyle>`
  align-self: center;
  font-size: 12px;
  font-weight: ${props => (props.selected ? "bold" : "normal")};
`;

const StyledLink = styled(Link)<SelectionStyle>`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${props => (props.selected ? "#032d63" : "black")};
    font-weight: ${props => (props.selected ? "bold" : "normal")};
  }
`;

const SidebarItem: React.FC<SidebarItemProps> = props => {
  return (
    <StyledLink to={`/set/${props.displayName}`} selected={props.selected}>
      <Container
        onClick={_ => props.onClicked(props.key)}
        selected={props.selected}
      >
        <Icon src={props.iconUri}></Icon>
        <Title>{props.displayName}</Title>
      </Container>
    </StyledLink>
  );
};

export default SidebarItem;
