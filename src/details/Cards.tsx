import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { ScryfallCard } from "../models/ScryfallCard";
import Card from "./Card";

const Cards = (props: any) => {
  const { setId } = useParams();
  const [state, setCardState] = useState({
    cards: [] as ReadonlyArray<ScryfallCard>,
    loading: true
  });

  useEffect(() => {
    const query = `e:${setId}`;
    setCardState({
      cards: [...state.cards],
      loading: true
    });

    fetch(
      `https://api.scryfall.com/cards/search?order=set&q=${query}&unique=prints`
    )
      .then(result => result.json())
      .then<ReadonlyArray<ScryfallCard>>(result => {
        setCardState({
          cards: [...result.data],
          loading: false
        });
        return result.data;
      })
      .catch(err => {
        console.log(`Unable to fetch cards`, err);
        setCardState({
          cards: [],
          loading: false
        });
      });
  }, [setId]);

  const CardContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 15px;
    overflow-y: auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(245px, 245px));
    grid-template-rows: repeat(auto-fit, minmax(341px, 341px));
    justify-content: center;
  `;

  const cards = state.cards.map(card => {
    return <Card key={card.id} card={card}></Card>;
  });

  return <CardContainer>{cards}</CardContainer>;
};

export default Cards;
