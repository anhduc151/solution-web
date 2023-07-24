import * as React from 'react';
import { Button, Result } from 'antd';
import LayoutSeo from '@/components/LayoutSeo';
import { useRouter } from 'next/router';
import EmplyLayout from '@/components/EmptyLayout';

export interface IPage404Props {
}

export default function Page404(props: IPage404Props) {
    const router = useRouter()
    return (
        <LayoutSeo title='404 Page - Solution'>
            <EmplyLayout>
                <div className="container_404">
                    <Result
                        status="404"
                        title="404"
                        subTitle="Oops! Page not found!"
                        extra={<Button type="primary" onClick={(e) => router.back()}>Back</Button>}
                    />
                </div>
            </EmplyLayout>
        </LayoutSeo>
    );
}
