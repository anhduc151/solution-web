import LayoutSeo from '@/components/LayoutSeo';
import * as React from 'react';
import { Tabs, Collapse } from 'antd';
import DefaultLayout from '@/components/DefaultLayout';


export interface IFAQPageProps {
}


export default function FAQPage(props: IFAQPageProps) {

    const text = "Objectively innovated empowered manufactured products where as parallel holisticly predominat extensible testing procedures reliable supply chains dramatically engage top-line web services vis-a-vis cutting-edge deliverables."
    const items = [
        {
            key: '1',
            label: 'How does our pricing works ?',
            children: text,
        },
        {
            key: '2',
            label: 'How does our pricing works ?',
            children: text,
        },
        {
            key: '3',
            label: 'Do You Offer Volume Or Loyalty Discounts?',
            children: text,
        },
        {
            key: '4',
            label: 'What Types Of Companies Do You Work With?',
            children: text,
        },
    ];

    const faq = [
        {
            label: "Main Questions",
            key: "1",
            children: <Collapse items={items} accordion defaultActiveKey={['1']} />
        },
        {
            label: "Common Queries",
            key: "2",
            children: <Collapse items={items} accordion defaultActiveKey={['2']} />
        },
        {
            label: "General Questions",
            key: "3",
            children: <Collapse items={items} accordion defaultActiveKey={['3']} />
        },
        {
            label: "Legal information",
            key: "4",
            children: <Collapse items={items} accordion defaultActiveKey={['4']} />
        },
    ]
    return (
        <LayoutSeo title='FAQ - Solution'>
            <DefaultLayout>
                <div className="header_faq">
                    <div className="content_header">
                        <div className="content_header_text">
                            <div className="content_header_title">
                                <p className="content_header_title_icon"></p>
                                <p className="content_header_title_p">Quick Solution</p>
                            </div>
                            <p className="content_header_content">Frequently Asked Questions</p>
                        </div>
                    </div>
                </div>

                <div className="content_faq">
                    <div className="faq_categori_title">Categories</div>
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition="left"
                        items={faq.map((data) => {
                            return {
                                key: data.key,
                                label: data.label,
                                children: data.children,
                            };
                        })}
                    />
                </div>
            </DefaultLayout>
        </LayoutSeo>
    );
}
