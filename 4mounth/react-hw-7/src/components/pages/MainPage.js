import React from 'react'
import { useEffect, useState } from "react";
import { fetchPokemons } from './../../api/fetchPokemons';
import List from './../List/List';
import Pagination from './../Pagination/Pagination';


const MainPage = () => {
  const [theme, setTheme] = useState('dark')
  const [pokemonList, setPokimonList] = useState([])
  // const [pageCount, setPageCount] = useState(0)
  const [offset, setOffset] = useState(1)
  const [page, setPage] = useState(1)

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  const limit = 12;
  useEffect(() => {
    fetchPokemons(limit, offset).then((data) => {
      setPokimonList(data.results)
      // setPageCount(Math.ceil(data.count / 10))
    })
  }, [offset])


  const handleChangePage = (type) => {
    if (type === 'next') {
      setOffset(prev => prev += 10)
      setPage(prev => prev += 1);
    } else {
      if (offset <= 10) return
      setOffset(prev => prev - 10)
      setPage(prev => prev -= 1)
    }
  }
  // const handlePageClick = (selectedPage) => {
  //   setPage(selectedPage)
  // }
  // const lastIndex = offset * page
  // const fisrtIndex = lastIndex - offset
  // const currentPost = pokemonList.slice(fisrtIndex, lastIndex)


  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme} className="button"> Change theme </button>

      <List pokemonList={pokemonList} />

      <Pagination
      // pageCount={pageCount}
      changeOffset={handleChangePage}
      // setOffset={setOffset}
      // totalPosts={pokemonList.length}
      // offset={offset}
      page={page}
   
      />

    </div>
  )
}

export default MainPage