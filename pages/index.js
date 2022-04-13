import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export async function getServerSideProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const { results } = await response.json();

  return {
    props: {
      pokemons: results,
    },
  };
}

export default function Home(props) {
  const [name, setName] = useState("Alex");

  function onInputChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <Header />
      <h3>Hello, {name}!</h3>
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={onInputChange}
      />

      <div>
        <ul>
          {props.pokemons.map((pokemon, index) => (
            <li key={index}>
              {pokemon.name} (<a href={`/pokemon/${index + 1}`}>View More</a>)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
