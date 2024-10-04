import React from 'react'
import Card from './Card'
import Search from './Search'

export default function MovieList({movieObj}) {
  return (
    <div>
      {movieObj.map((item, index) => {
        return <Card key={index} movie={item} cardType="Search"/>;
      })}
    </div>
  )
}
