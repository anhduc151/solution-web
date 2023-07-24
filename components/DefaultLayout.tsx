import * as React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export interface IDefaultLayoutProps {
    children: React.ReactNode;
}



export default function DefaultLayout({ children }: IDefaultLayoutProps) {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
