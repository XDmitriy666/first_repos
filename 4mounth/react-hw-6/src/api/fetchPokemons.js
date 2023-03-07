import axios from "axios"

const baseURL = 'https://pokeapi.co/api/v2/'

export const fetchPokemons = async(setList) => {
    try {
        const { data } = await axios.get(baseURL + 'pokemon/')
        setList(data.results)
    }catch(e) {

    }
}