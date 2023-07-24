import * as React from 'react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

export interface ILayoutSeoProps {
    title: string;
    children: React.ReactNode;
}

export default function LayoutSeo({ title, children }: ILayoutSeoProps) {
    return (
        <>
            <DefaultSeo
                title={title}
                description="WhiteCollar is a Singapore-based company – a game studio specializing in designing and producing mobile games - founded in 2018."
            />
            <Head>
                <title>Solution</title>
                <link rel="" href="/images/favicon.ico" />
            </Head>
            {children}
        </>
    );
}
