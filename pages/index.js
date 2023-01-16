import Head from 'next/head';
import styles from '../styles/Home.module.css';
import utilsStyles from '../styles/utils.module.css';

import Link from 'next/link';
import Layout from '../components/Layout/layout';

import data from '../data/posts.json';

export async function getStaticProps() {
  const posts = data;

  return {
    props: {
      posts
    }
  };
}

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>That blog</title>
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">my blog !</a>
        </h1>

        <section>
          <ul>
            {posts &&
              posts.map(({ id, title, content }) => (
                <li key={id} className={utilsStyles.headingMd}>
                  <Link href={`/posts/${id}`}>
                    <h2>{title}</h2>
                  </Link>
                  <p>{content}</p>
                </li>
              ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
}
