import Head from 'next/head';

import Layout from '../../components/Layout/layout';

import styles from '../../styles/Home.module.css';

const FirstPost = () => {
  return (
    <Layout firstPost>
      <Head>
        <title>That post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>What a wondefull page!</h1>
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eaque
          sed, laboriosam ab consequuntur quisquam quaerat dolor rem omnis et
          doloribus quo in aperiam, culpa quam maxime reprehenderit aliquam
          labore.
        </section>
      </main>
    </Layout>
  );
};

export default FirstPost;
