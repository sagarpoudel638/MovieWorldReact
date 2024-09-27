import React from "react";
import Card from "./Card";

export default function Result({movieObj}) {
  return (
    <>
      {movieObj.map((item, index) => {
        return <Card key={index} movie={item} cardType="Search"/>;
      })}
     
    </>
  );
}
