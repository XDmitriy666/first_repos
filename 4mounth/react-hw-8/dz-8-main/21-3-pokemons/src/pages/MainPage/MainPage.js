import React, { useEffect, useState } from "react";
import {Button} from '@mui/material'
import {fetchPokemonsS, fetchPokemons} from '../../api/fetchPokemons';
import Pagination from '../../components/Pagination/Pagination'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
const MainPage = () =>  {
  const [ pokemonList, setPokemonList ] = useState([]);
  const [ offset, setOffset ] = useState(10);
  const [page, setPage ] = useState(1);
  const [ pageCount, setPageCount ] = useState(0);

    const limit = 10;
    useEffect(() => {
      fetchPokemons(limit, offset)
      .then((data)=> {
        setPokemonList(data.results);
        setPageCount(Math.ceil(data.count / 10))
      });
    }, [offset])


const handleChangePage = (type) => {
  if(type === 'next') {
    setOffset(prev => prev += 10)
    setPage(prev => prev += 1);
  }
  else {
    if(offset <= 10) return 
    setOffset(prev => prev - 10)
  }
}

  const sortVes = () => {
    fetchPokemonsS(10,20, 'weight').then(s => setPokemonList(s))
  }

  const sortAttach = () => {
    fetchPokemonsS(10,20,'attach').then(a => setPokemonList(a))
  }


  return (
    <div className="mainPage">
      <div className="container">
        <Button color='secondary' onClick={sortVes}>По весу</Button>
        <Button onClick={sortAttach}>sort atack</Button>
      <div className="pokemonList">
        {pokemonList.map((pokemon, k) => <PokemonCard
        key={k}
        pokemon={pokemon} />)}
        </div> 
      </div>
      <Pagination 
      pageCount={pageCount}
      changeOffset={handleChangePage}
      page={page}
      />
    </div>
  );
}

export default MainPage;