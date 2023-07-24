import DefaultLayout from '@/components/DefaultLayout';
import LayoutSeo from '@/components/LayoutSeo';
import * as React from 'react';
import Image from "next/image";


import people1 from "../../public/images/team_people1.png"
import people2 from "../../public/images/team_people2.png"
import people3 from "../../public/images/team_people3.png"
import people4 from "../../public/images/team_people4.png"
import people5 from "../../public/images/team_people5.png"
import people6 from "../../public/images/team_people6.png"

import ss2img from "../../public/images/team_session2_img.png"
import ellipse from "../../public/images/ellipse_team.png"

export interface ITeamProps {
}

export default function Team(props: ITeamProps) {
    return (
        <LayoutSeo title='Team - Solution'>
            <DefaultLayout>
                <div className="header_team">
                    <div className="content_header">
                        <div className="content_header_text">
                            <div className="content_header_title">
                                <p className="content_header_title_icon"></p>
                                <p className="content_header_title_p">Our Team</p>
                            </div>
                            <p className="content_header_content">Meet Our Experts</p>
                        </div>
                    </div>
                </div>

                <div className="team_session1">
                    <div className="team_session1_box">
                        <div className="team_session1_box_social">
                            <div className="team_session1_box_social_facebook"><i className='bx bxl-facebook-circle'></i></div>
                            <div className="team_session1_box_social_instagram"><i className='bx bxl-instagram' ></i></div>
                            <div className="team_session1_box_social_twitter"><i className='bx bxl-twitter' ></i></div>
                        </div>
                        <Image src={people1} alt="" className="team_sessicon_people" />
                        <div className="info_box">
                            <div className="info_content">
                                <p className="info_name">Nattasha Kelvin</p>
                                <p className="info_posititon">Managing Director</p>
                            </div>
                        </div>
                    </div>
                    <div className="team_session1_box">
                        <div className="team_session1_box_social">
                            <div className="team_session1_box_social_facebook"><i className='bx bxl-facebook-circle'></i></div>
                            <div className="team_session1_box_social_instagram"><i className='bx bxl-instagram' ></i></div>
                            <div className="team_session1_box_social_twitter"><i className='bx bxl-twitter' ></i></div>
                        </div>
                        <Image src={people2} alt="" className="team_sessicon_people" />
                        <div className="info_box">
                            <div className="info_content">
                                <p className="info_name">David Simpson</p>
                                <p className="info_posititon">Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="team_session1_box">
                        <div className="team_session1_box_social">
                            <div className="team_session1_box_social_facebook"><i className='bx bxl-facebook-circle'></i></div>
                            <div className="team_session1_box_social_instagram"><i className='bx bxl-instagram' ></i></div>
                            <div className="team_session1_box_social_twitter"><i className='bx bxl-twitter' ></i></div>
                        </div>
                        <Image src={people3} alt="" className="team_sessicon_people" />
                        <div className="info_box">
                            <div className="info_content">
                                <p className="info_name">Madeleine Grant</p>
                                <p className="info_posititon">Marketing Specialist</p>
                            </div>
                        </div>
                    </div>
                    <div className="team_session1_box">
                        <div className="team_session1_box_social">
                            <div className="team_session1_box_social_facebook"><i className='bx bxl-facebook-circle'></i></div>
                            <div className="team_session1_box_social_instagram"><i className='bx bxl-instagram' ></i></div>
                            <div className="team_session1_box_social_twitter"><i className='bx bxl-twitter' ></i></div>
                        </div>
                        <Image src={people4} alt="" className="team_sessicon_people" />
                        <div className="info_box">
                            <div className="info_content">
                                <p className="info_name">Jonathan Coleman</p>
                                <p className="info_posititon">Managing Director</p>
                            </div>
                        </div>
                    </div>
                    <div className="team_session1_box">
                        <div className="team_session1_box_social">
                            <div className="team_session1_box_social_facebook"><i className='bx bxl-facebook-circle'></i></div>
                            <div className="team_session1_box_social_instagram"><i className='bx bxl-instagram' ></i></div>
                            <div className="team_session1_box_social_twitter"><i className='bx bxl-twitter' ></i></div>
                        </div>
                        <Image src={people5} alt="" className="team_sessicon_people" />
                        <div className="info_box">
                            <div className="info_content">
                                <p className="info_name">Wanda Forsyth</p>
                                <p className="info_posititon">Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="team_session1_box">
                        <div className="team_session1_box_social">
                            <div className="team_session1_box_social_facebook"><i className='bx bxl-facebook-circle'></i></div>
                            <div className="team_session1_box_social_instagram"><i className='bx bxl-instagram' ></i></div>
                            <div className="team_session1_box_social_twitter"><i className='bx bxl-twitter' ></i></div>
                        </div>
                        <Image src={people6} alt="" className="team_sessicon_people" />
                        <div className="info_box">
                            <div className="info_content">
                                <p className="info_name">Austin	Randall</p>
                                <p className="info_posititon">Managing Director</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team_session2">
                    <div className="ss2_content_left">

                        <div className="ss2_content_left_title">
                            <p className="ss2_content_left_title_icon"></p>
                            <p className="ss2_content_left_title_p">Dedicated Team</p>
                        </div>

                        <div className="ss2_content_left_title1">
                            <p className="ss2_content_left_title_title">Professional Individuals</p>
                            <p className="ss2_content_left_title_lorem">Leverage agile frameworks to provided  a synopsis for high overviews thinking overall proposition. </p>
                        </div>

                        <div className="ss2_content_left_title2">
                            <div className="ss2_content_left_title2_left">
                                <Image alt='' src={ellipse} className='ss2_content_left_title2_left_img'></Image>
                            </div>
                            <div className="ss2_content_left_title2_right">
                                <p className="ss2_content_left_title2_right_number">75%</p>
                                <p className="ss2_content_left_title2_right_title">Income Statement</p>
                                <p className="ss2_content_left_title2_right_lorem">Leverage agile frameworks to provide a robust proposition. </p>
                            </div>
                        </div>
                    </div>
                    <div className="ss2_content_right">
                        <Image src={ss2img} alt='' className='ss2_content_right_img'></Image>
                    </div>
                </div>
            </DefaultLayout>
        </LayoutSeo>
    );
}
