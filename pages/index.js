import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a Front-end Developer specialized in React</p>
        <p>
          Checkout what I've been upto from my{' '}
          <a href="https://github.com/reun100e">GitHub</a>.
        </p>
      </section>
    </Layout>
  );
}