import Head from 'next/head';

import data from '../../data/posts.json';

import Layout from '../../components/Layout/layout';

import styles from '../../styles/Home.module.css';

export async function getStaticPaths() {
  const posts = data;
  const paths = posts.map((post) => ({
    params: {
      id: post.id
    }
  }));

  console.log(paths);

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const filtered = data?.filter((post) => post.id === params.id);
  const post = filtered[0];

  console.log(post);

  return {
    props: {
      post
    }
  };
}

const Post = ({ post }) => {
  console.log('post from stat', post);
  return (
    <Layout post>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>{post.title}</h1>
        <section>{post.content}</section>
      </main>
    </Layout>
  );
};

export default Post;
