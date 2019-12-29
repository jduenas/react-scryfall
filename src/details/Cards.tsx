import React from "react";
import { useParams } from "react-router";

const Cards = (props: any) => {
  // const setId = props?.match?.params?.setId;
  const { setId } = useParams();
  if (!setId) {
    return null;
  }

  console.log(setId);
  return <h1 className={props.className}>cards go here: {setId}</h1>;
};

export default Cards;
