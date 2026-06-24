// Return Pokemon generation code snippet
 <ul>
      {data.pokemon_species.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
