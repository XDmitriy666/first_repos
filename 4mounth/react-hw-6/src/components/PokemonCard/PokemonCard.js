import React, {useEffect} from 'react'

const PokemonCard = ({list}) => {
  return (
    <div className='pokemon_card'>
      <h1>{list.name}</h1>
    </div>

  )
}

export default PokemonCard

