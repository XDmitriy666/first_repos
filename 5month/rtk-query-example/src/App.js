import { useGetPokemonsQuery } from "./store";

function App ( ) {
    const {data = [], isLoading, isError} = useGetPokemonsQuery()

    if(isLoading) return <h1>...Loading...</h1>
    if(isError) return <h1>---Error---</h1>

    return (
        <div className="App">
            <ul>
                {data.results.map((pokemon, key) =>
                <li key={key}> {pokemon.name} </li>
                )}
            </ul>
        </div>
    );
}

export default App;