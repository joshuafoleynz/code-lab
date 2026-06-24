// Return Pokemon generation code snippet
return (
  <>
    <h1>{data.name}</h1>

    <ul>
      {data.pokemon_species.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  </>
)
