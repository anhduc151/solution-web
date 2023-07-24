import * as React from 'react';

export interface IEmptyLayoutProps {
    children: React.ReactNode;
}

export default function EmptyLayout({ children }: IEmptyLayoutProps) {
    return (
        <main>
            {children}
        </main>
    );
}
