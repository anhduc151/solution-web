import DefaultLayout from '@/components/DefaultLayout';
import LayoutSeo from '@/components/LayoutSeo';
import Image from 'next/image';
import * as React from 'react';
import banner from "../../../public/images/blog_details_banner.png"
import new1 from "../../../public/images/blog_new1.png"

export interface IBlogDetailsProps {
}

export default function BlogDetails(props: IBlogDetailsProps) {
    return (
        <LayoutSeo title='Blogs Details - Solution'>
            <DefaultLayout>
                <div className="blog_details_container">
                    <Image alt='' src={banner} className='blog_details_banner_img'></Image>
                    <div className="blog_details_content">
                        <p className="blog_details_content_title">
                            Team Identifiers, Benefits, and How to Build One that Works
                        </p>
                        <p className="blog_details_content_lorem">
                            Bring to the table win win survival strategies to ensure proactive domination at the end of the day going forward a new normal that has evolved from generation on the runway heading towards a streamlined cloud solution user generated content in real time will have multiple  touchpoints for offshoring capitalize on low hanging fruit to identify a ballpark values added activity to beta test overrided the digital divided with additional clickthroughs from close the loop on focusing solely on the bottom line.
                        </p>
                        <p className="blog_details_content_title">
                            The Work & Life Style For All
                        </p>
                        <p className="blog_details_content_lorem">
                            Bring to the table win win survival strategies to ensure proactive domination at the end of the day going forward a new normal that has evolved from generation on the runway heading towards a streamlined cloud solution user generated content in real time will have multiple  touchpoints for offshoring capitalize on low hanging fruit to identify a ballpark values added activity to beta test overrided.
                        </p>

                        <div className="blog_details_box_content">
                            <div className="blog_details_box_content_line">
                                <p className="blog_details_box_content_icon"><i className='bx bx-wifi-0'></i></p>
                                <p className="blog_details_box_content_p">Dynamically target high-payoff intellectual capital for customized</p>
                            </div>
                            <div className="blog_details_box_content_line">
                                <p className="blog_details_box_content_icon"><i className='bx bx-wifi-0'></i></p>
                                <p className="blog_details_box_content_p">Interactively procrastinate high-payoff content</p>
                            </div>
                            <div className="blog_details_box_content_line">
                                <p className="blog_details_box_content_icon"><i className='bx bx-wifi-0'></i></p>
                                <p className="blog_details_box_content_p">Credibly reinter mediate backend ideas for cross-platform models</p>
                            </div>
                        </div>

                        <div className="blog_details_box_box">
                            <p className="blog_details_box_box_line"></p>
                            <div className="blog_details_box_box_content">
                                <p className="blog_details_box_box_content_p">
                                    “For the longest time, computers have been associated with work. Mainframes were for the Army, government agencies, and then large companies. Workstations were for engineers and software programmers. PCs were initially for other white-collar jobs.”
                                </p>
                            </div>
                        </div>

                        <p className="blog_details_content_title">
                            The Work & Life Style For All
                        </p>
                        <p className="blog_details_content_lorem">
                            Bring to the table win win survival strategies to ensure proactive domination at the end of the day going forward a new normal that has evolved from generation on the runway heading towards a streamlined cloud solution user generated content.
                        </p>
                        <div className="blog_details_box_content">
                            <p className="blog_details_box_content_p">01. It brings the right people together with all the right information and tools to get work done</p>
                            <p className="blog_details_box_content_p">02. We provide operational efficiency, data security, and flexible scale</p>
                            <p className="blog_details_box_content_p">03. Your best work, together in one package that works seamlessly from your computer</p>
                        </div>

                        <div className="blog_details_content_related">
                            <div className="blog_details_content_related_header">
                                <div className="blog_details_content_related_title">Related News</div>
                                <div className="blog_details_content_related_right">
                                    <button className="blog_details_content_related_button">More news</button>
                                </div>
                            </div>
                            <div className="blog_details_content_related_box">
                                <div className="blog_session_box">
                                    <Image alt='' src={new1} className='blog_session_box_img'></Image>
                                    <p className="blog_session_box_title">A Business Consulting That Can Produce</p>
                                    <p className="blog_session_box_lorem">Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking.</p>
                                    <div className="blog_session_box_button">Read more</div>
                                </div>
                                <div className="blog_session_box">
                                    <Image alt='' src={new1} className='blog_session_box_img'></Image>
                                    <p className="blog_session_box_title">Popular Email Marketing Techniques 2022</p>
                                    <p className="blog_session_box_lorem">Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking.</p>
                                    <div className="blog_session_box_button">Read more</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </LayoutSeo>
    );
}
