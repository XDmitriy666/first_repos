


export const sortItem = (pokemonList = [], type) => {
    switch(type) {
        case 'weight':
             return pokemonList.sort((a,b) => b.weight - a.weight);
        case 'attach':
            return pokemonList.sort((a,b) => b.stats[0].base_stat - a.stats[0].base_stat)
        case "speed":
            return pokemonList.sort((a, b) => b.stats[5].base_stat - a.stats[5].base_stat);
        default:
         return pokemonList;
    }
}
