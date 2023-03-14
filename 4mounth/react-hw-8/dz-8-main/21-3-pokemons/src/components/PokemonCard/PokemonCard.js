import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const PokemonCard = ({ pokemon }) => {
  const [ image, setImage ] = useState('');
  useEffect(() => {
    axios.get(pokemon.url).then((data) => {
      console.log(data, 'respoonse ');
      setImage(data.data.sprites.other.dream_world.front_default)
    })
  }, [ pokemon.url ]);
  return (
    <React.Fragment>
      <Link style={{textDecoration: 'none'}} to={`/pokemon/${pokemon.name}`}>
      <div className='pokemonCard'>
      {pokemon.name}
       <img  src={image} alt='pokemon imgages' />
    </div>
      </Link>
    </React.Fragment>
  )
}

export default PokemonCard