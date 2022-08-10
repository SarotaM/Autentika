import React from 'react';
import Head from 'next/head';

import { IPageHeadProps } from './PageHead.types';

const PageHead = ({ title, description }: IPageHeadProps) => (
  <Head>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default PageHead;
