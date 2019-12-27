import React from "react";
import { action } from "@storybook/addon-actions";
import SidebarItem from "../sidebar/SidebarItem";

export default {
  title: "SetItem"
};

export const defaultState = () => (
  <SidebarItem
    iconUri="https://img.scryfall.com/sets/thb.svg?1577077200"
    displayName="Ice Age"
    selected={false}
    onClicked={action("sidebar-item-clicked")}
  ></SidebarItem>
);

export const selectedState = () => (
  <SidebarItem
    iconUri="https://img.scryfall.com/sets/thb.svg?1577077200"
    displayName="Ice Age"
    selected={true}
    onClicked={event => action(event)}
  ></SidebarItem>
);
