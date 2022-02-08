export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  const paths = data.map((pokemon) => {
    return {
      params: { id: pokemon.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

const Details = ({ pokemon }) => {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <p>{pokemon.email}</p>
      <p>{pokemon.website}</p>
      <p>{pokemon.address.city}</p>
    </div>
  );
};

export default Details;
