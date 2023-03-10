import axios from "axios"

const baseUrl = 'https://pokeapi.co/api/v2/'

export const fetchPokemons = async(limit, offset) => {
    try {
        const { data } = await axios.get(baseUrl + `pokemon/?limit=${limit}&offset=${offset}`)
        return data
    } catch (error) {
        console.log('error');
    }
}
