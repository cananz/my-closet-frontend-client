import React from 'react';
import ClothingCard from '../components/clothingCard'

const ClothingContainer = props => {

  return (

      <section id="content" className="grid-container">
        {props.items.map(item => <ClothingCard key={item.id} item={item} />)}


      </section>

  )
}

export default ClothingContainer;
