import React from "react";
import styled from "styled-components";

export interface SidebarItemProps {
  iconUri: string;
  key: string;
  displayName: string;
  onClicked: (key: string) => void;
  selected: boolean;
}

export interface SelectionProps {
  selected?: boolean;
}

const Container = styled.div<SelectionProps>`
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

const Title = styled.span`
  align-self: center;
`;

const SidebarItem: React.FC<SidebarItemProps> = props => {
  return (
    <Container
      onClick={_ => props.onClicked(props.key)}
      selected={props.selected}
    >
      <Icon src={props.iconUri}></Icon>
      <Title>{props.displayName}</Title>
    </Container>
  );
};

export default SidebarItem;
