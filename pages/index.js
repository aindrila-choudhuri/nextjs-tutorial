import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon List</title>
        <meta name="keywords" content="pokemons" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Irure consequat id occaecat tempor incididunt laboris aliquip Lorem voluptate est ipsum aliqua culpa dolore.
          Consectetur anim fugiat esse consectetur dolor veniam. Do nisi occaecat ipsum laborum veniam. Veniam
          exercitation amet eu officia amet est. Amet fugiat tempor voluptate aute officia velit do nulla cupidatat
          commodo quis Lorem culpa reprehenderit. Commodo est non aute sunt sit.
        </p>
        <p className={styles.text}>
          Fugiat et occaecat sunt mollit adipisicing magna et consequat dolore quis. Amet eu eu quis exercitation
          officia quis consequat eu cillum eiusmod consequat eiusmod labore deserunt. Sint elit do pariatur
          reprehenderit pariatur quis non est enim. Qui nulla ex laborum voluptate reprehenderit aliqua ex excepteur
          culpa fugiat ullamco laboris. Aliqua reprehenderit ea cupidatat non sunt aliquip non voluptate ea est nostrud.
        </p>
        <Link href="/pokemons">
          <a className={styles.btn}>See Pokemon Listing</a>
        </Link>
      </div>
    </>
  );
}
