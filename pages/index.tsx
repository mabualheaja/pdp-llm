import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Welcome to my Next.js app!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to my Next.js App</h1>

        {/* Link to Product Details Page */}
        <Link href="/product-details">
          <a>View Product Details</a>
        </Link>
      </main>

      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
};

export default Home;
