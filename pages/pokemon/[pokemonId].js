export async function getServerSideProps(context) {
  const { pokemonId } = context.params;

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  const json = await response.json();

  return { props: { pokemon: json } };
}

export default function PokemonDetails(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.pokemon.name}</h1>
      <img src={props.pokemon.sprites.back_default} alt="pokemon" />
    </div>
  );
}
