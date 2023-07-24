import DefaultLayout from '@/components/DefaultLayout';
import LayoutSeo from '@/components/LayoutSeo';
import Image from 'next/image';
import * as React from 'react';

import banner from "../../../public/images/project-details_session_banner.png"
import post1 from "../../../public/images/project_post1.png"
import post2 from "../../../public/images/project_post2.png"
import post3 from "../../../public/images/project_post3.png"

export interface IProjectDetailsProps {
}

export default function ProjectDetails(props: IProjectDetailsProps) {
    return (
        <LayoutSeo title='Project Details - Solution'>
            <DefaultLayout>
                <div className="header_project_details">
                    <div className="content_header">
                        <div className="content_header_text">
                            <div className="content_header_title">
                                <p className="content_header_title_icon"></p>
                                <p className="content_header_title_p">LT Techs</p>
                            </div>
                            <p className="content_header_content">Financial Investment</p>
                        </div>
                    </div>
                </div>


                <div className="project_details_session">
                    <Image alt='' src={banner} className='project_details_session_img'></Image>
                    <div className="project_details_session1">
                        <div className="project_details_session1_left">
                            <p className="project_details_session1_left_title">Project Details</p>
                            <div className="project_details_session1_left_colum">
                                <div className="project_details_session1_left_title_colum">
                                    <p className="project_details_session1_left_title_colum_head">Client :</p>
                                    <p className="project_details_session1_left_title_colum_context">Katherine Coleman</p>
                                </div>
                                <div className="project_details_session1_left_title_colum">
                                    <p className="project_details_session1_left_title_colum_head">Location :</p>
                                    <p className="project_details_session1_left_title_colum_context">New York United States</p>
                                </div>
                                <div className="project_details_session1_left_title_colum">
                                    <p className="project_details_session1_left_title_colum_head">Project Date :</p>
                                    <p className="project_details_session1_left_title_colum_context">15 September ,2023</p>
                                </div>
                                <div className="project_details_session1_left_title_colum">
                                    <p className="project_details_session1_left_title_colum_head">Website :</p>
                                    <p className="project_details_session1_left_title_colum_context">http://whitecollar.com</p>
                                </div>
                            </div>

                        </div>


                        <div className="project_details_session1_right">
                            <p className="project_details_session1_right_title">Project Information</p>

                            <p className="project_details_session1_right_lorem">Distinctively re-engineer revolutionary meta service  and premium architectures incubate intuitive opportunities and real-time potentialities. Appropriately communicates once one technology after plug-and-play networks.</p>

                            <p className="project_details_session1_right_lorem">Quickly aggregates users and worldwides potentialities progressively plagiarize resource leveling e-commerce through resource leveling cores competencies dramatically mesh low risk high yield alignments before transparent e-tailers.</p>

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

                            <p className="project_details_session1_right_lorem">Compellingly embrace empowered e-business after user friendly intellectual capitals Interactively actualize front-end processes with effectives convergenced Synergistically deliver performanced based methods empowerment whereas distributed expertised efficiently enable enabled sources and cost effective products completely ethical communities.</p>

                            <div className="blog_details_box_content">
                                <p className="blog_details_box_content_p">01. It brings the right people together with all the right information and tools to get work done</p>
                                <p className="blog_details_box_content_p">02. We provide operational efficiency, data security, and flexible scale</p>
                                <p className="blog_details_box_content_p">03. Your best work, together in one package that works seamlessly from your computer</p>
                            </div>

                            <p className="project_details_session1_right_lorem">Compellingly embrace empowered e-business after user friendly intellectual capitals Interactively actualize front-end processes with effectives convergenced Synergistically deliver performanced based methods empowerment whereas distributed expertised efficiently enable enabled sources and cost effective products completely ethical communities.</p>
                        </div>
                    </div>
                </div>


                <div className="project_details_related">
                    <p className="project_details_related_title">Related Projects</p>
                    <div className="project_session_post">
                        <div className="project_session_post_item">
                            <Image alt='' src={post1} className='project_session_post_item_img'></Image>
                            <div className="project_session_post_item_content">
                                <div className="project_session_post_item_content_left">
                                    <p className="project_session_post_item_title">Financial Investment</p>
                                    <div className="project_session_post_item_content_left_calender">
                                        <p className="project_session_post_item_content_left_calender_icon"><i className='bx bx-calendar'></i></p>
                                        <p className="project_session_post_item_content_left_calender_context">Sep 2022</p>
                                    </div>
                                </div>
                                <div className="project_session_post_item_content_right">
                                    <div className="project_session_post_item_content_right_boxicon"><i className='bx bx-chevron-right'></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="project_session_post_item">
                            <Image alt='' src={post2} className='project_session_post_item_img'></Image>
                            <div className="project_session_post_item_content">
                                <div className="project_session_post_item_content_left">
                                    <p className="project_session_post_item_title">Financial Investment</p>
                                    <div className="project_session_post_item_content_left_calender">
                                        <p className="project_session_post_item_content_left_calender_icon"><i className='bx bx-calendar'></i></p>
                                        <p className="project_session_post_item_content_left_calender_context">Sep 2022</p>
                                    </div>
                                </div>
                                <div className="project_session_post_item_content_right">
                                    <div className="project_session_post_item_content_right_boxicon"><i className='bx bx-chevron-right'></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="project_session_post_item">
                            <Image alt='' src={post3} className='project_session_post_item_img'></Image>
                            <div className="project_session_post_item_content">
                                <div className="project_session_post_item_content_left">
                                    <p className="project_session_post_item_title">Financial Investment</p>
                                    <div className="project_session_post_item_content_left_calender">
                                        <p className="project_session_post_item_content_left_calender_icon"><i className='bx bx-calendar'></i></p>
                                        <p className="project_session_post_item_content_left_calender_context">Sep 2022</p>
                                    </div>
                                </div>
                                <div className="project_session_post_item_content_right">
                                    <div className="project_session_post_item_content_right_boxicon"><i className='bx bx-chevron-right'></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </LayoutSeo>
    );
}
