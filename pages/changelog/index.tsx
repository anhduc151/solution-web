import DefaultLayout from '@/components/DefaultLayout';
import LayoutSeo from '@/components/LayoutSeo';
import * as React from 'react';

export interface IChangeLogProps {
}

export default function ChangeLog(props: IChangeLogProps) {
    return (
        <LayoutSeo title='Change Log  - Solution'>
            <DefaultLayout>
                <div className="change_container">
                    <div className="pass_content_title_small">
                        <p className="pass_content_title_small_dot"></p>
                        <p className="pass_content_title_small_title">Published</p>
                    </div>
                    <p className="pass_content_title_big">Version 1.0</p>
                    <p className="pass_content_title_lorem">Initial Whitcollar Webflow Template Released!</p>
                </div>
            </DefaultLayout>
        </LayoutSeo>
    )
}
