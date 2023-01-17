import Head from 'next/head';
import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import TopNav from '../TopNav';
import Waves from '../Waves';

type Props = {
  data: any;
  children: JSX.Element;
};
const FrontLayout = ({ data, children }: Props) => {
  const { title, description } = data;
  return (
    <>
      <Head>
        <title>{title || 'Site Title'}</title>
        <meta
          name='description'
          content={description || 'This is site description'}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <TopNav />
        <Header />
        <Hero />
        <Waves />
        {children}
      </main>
    </>
  );
};

export default FrontLayout;
