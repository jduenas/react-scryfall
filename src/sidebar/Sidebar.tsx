import React, { useEffect, useState, useContext } from "react";
import AppContext from "../AppContext";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import ScryfallSet from "../models/ScryfallSet";

const neutralBgPrimary = "#f3f2f1";
const Container = styled.div`
  background: ${neutralBgPrimary};
  padding-top: 20px;
  height: 100vh;
  overflow-y: auto;
`;

interface SidebarState {
  items: ReadonlyArray<ScryfallSet>;
  selectedItem: string;
}

const Sidebar: React.FC = (props: any) => {
  const [sets, setMtgSets] = useState({
    items: [],
    selectedItem: ""
  } as SidebarState);

  const selectItem = (item: string) => {
    console.log(`Selected: ${item}`);
    setMtgSets({ items: [...sets.items], selectedItem: item });
  };

  const context = useContext(AppContext);
  const url = context.baseUrl;

  useEffect(
    () => {
      console.log(`Downloading sets...`);
      fetch(`${url}/sets`)
        .then(result => result.json())
        .then(result =>
          setMtgSets({ items: [...result.data], selectedItem: "" })
        )
        .catch(err => {
          console.log(`Error fetching sets`, err);
        });
    },
    // eslint-disable-next-line
    []
  );

  const sidebarItems = sets.items.map(set => {
    return (
      <SidebarItem
        selected={sets.selectedItem === set.name}
        onClicked={event => selectItem(set.name)}
        key={set.name}
        displayName={set.name}
        iconUri={set.icon_svg_uri}
      ></SidebarItem>
    );
  });

  return <Container className={props.className}>{sidebarItems}</Container>;
};

export default Sidebar;
