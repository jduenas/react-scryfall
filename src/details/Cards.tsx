import React from "react";

const Cards = (props: any) => {
  const setId = props?.match?.params?.setId;
  if (!setId) {
    return null;
  }

  return <h1>cards go here: {setId}</h1>;
};

export default Cards;
