import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import { getPokemon } from '../../api/fetchPokemons';
const PokemonInfo = () => {
  const [ pokemon, setPokemon ] = useState();
  const { id } = useParams();
  const navi = useNavigate()

  useEffect(() => {
    getPokemon(id).then((data => setPokemon(data)));
  }, [ id ])
  console.log(pokemon);
  return (
    <div>
      <img src={pokemon?.sprites.other.dream_world.front_default}  alt='fd' />
      <h5>{pokemon?.weight}: grams</h5>
      <h4>{pokemon?.height}: sm</h4>
        <h5>{pokemon?.stats[0].base_stat}: Atach</h5>
        <button onClick={() => navi(-1)}>back</button>
    </div>
  )
}

export default PokemonInfo


/// rafce;