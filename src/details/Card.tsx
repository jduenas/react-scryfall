import React from "react";
import { ScryfallCard } from "../models/ScryfallCard";
import styled from "styled-components";

export interface CardProps {
  card: ScryfallCard;
}

const StyledCard = styled.img`
  width: 245px;
  height: 341px;
  display: inline-block;
`;

const Card = (props: CardProps) => {
  const image = props.card?.image_uris?.normal;
  return <StyledCard src={image}></StyledCard>;
};

export default Card;
