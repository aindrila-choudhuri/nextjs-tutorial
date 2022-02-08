import styles from '../../styles/Pokemons.module.css';
import Link from 'next/link';

// this function is provided by next, it is used for fetching data
// this function never runs in a browser, only at the build time
// so don't write any code in here which you expect to run in the browser
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      pokemons: data,
    },
  };
};

const Pokemons = ({ pokemons }) => {
  return (
    <div>
      <h1>All Pokemons</h1>
      {pokemons.map((pokemon) => (
        <Link href={`/pokemons/${pokemon.id}`} key={pokemon.id}>
          <a className={styles.single}>
            <h3>{pokemon.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Pokemons;
