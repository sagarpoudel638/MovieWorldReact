import React from "react";
import Card from "./Card";

export default function Result({movieList}) {
  return (
    <>
      {movieList.map((item, index) => {
        return <Card key={index} movie={item} />;
      })}
     
    </>
  );
}
