import React from "react";
import LayoutSeo from "@/components/LayoutSeo";
import DefaultLayout from "@/components/DefaultLayout";
import Image from "next/image";
import aboutheadings from "../../public/images/about_headings.png";
import abouthistory from "../../public/images/about_history.png";
import abouthisstorybox1 from "../../public/images/about_history_box1.png";
import abouthisstorybox2 from "../../public/images/about_history_box2.png";
import abouthisstorybox3 from "../../public/images/about_history_box3.png";
import homecare from "../../public/images/home_care_left.png";
import homecareright1 from "../../public/images/home_care_right_icon1.png";
import homecareright2 from "../../public/images/home_care_right_icon2.png";
import Link from "next/link";
import aboutworkicons1 from "../../public/images/about_work_icon1.png";
import aboutworkicons2 from "../../public/images/about_work_icon2.png";
import aboutworkicons3 from "../../public/images/about_work_icon3.png";
import aboutpresentationicon1 from "../../public/images/about_presentation_icon1.png";
import aboutpresentationicon2 from "../../public/images/about_presentation_icon2.png";
import aboutpresentationicon3 from "../../public/images/about_presentation_icon3.png";
import aboutpresentationicon4 from "../../public/images/about_presentation_icon4.png";
import aboutbannervideo from "../../public/images/about_video_banner.png"
import people1 from "../../public/images/team_people1.png"
import people2 from "../../public/images/team_people2.png"
import people3 from "../../public/images/team_people3.png"

export default function AboutUs() {
  return (
    <LayoutSeo title="About Us - Solution">
      <DefaultLayout>
        <div className="about_headings">
          <div className="about_headings_left">
            <p className="about_headings_p">
              <i className="bx bxs-rectangle ga"></i> About Us
            </p>

            <h2 className="about_headings_h2">Know About Us</h2>

            <p className="about_headings_p1">
              Collaboratively administrate empowered markets plug and play
              networks dynamically procrastinated
            </p>
          </div>

          <div className="about_headings_right">
            <Image
              src={aboutheadings}
              alt="about headings images"
              className="about_headings_images"
            />
          </div>
        </div>

        <div className="about_history">
          <div className="about_history_left">
            <Image
              src={abouthistory}
              alt="about us images"
              className="about_history_images"
            />
          </div>

          <div className="about_history_right">
            <h2 className="home_history_right_h2">Our history</h2>
            <p className="home_history_right_p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <div className="about_history_years">
              <div className="about_history_years_2018">
                <p className="about_history_years_2018_p">2018</p>
              </div>

              <div className="about_history_years_2018">
                <p className="about_history_years_2018_p">2019</p>
              </div>

              <div className="about_history_years_2018">
                <p className="about_history_years_2018_p">2020</p>
              </div>

              <div className="about_history_years_2018">
                <p className="about_history_years_2018_p">2021</p>
              </div>

              <div className="about_history_years_2018">
                <p className="about_history_years_2018_p">2022</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about_history_infor">
          <div className="about_history_infor_box1">
            <div className="about_history_infor_box">
              <h2 className="about_history_infor_box_h2">web</h2>
              <p className="about_history_infor_box_p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s.
              </p>

              <Image
                src={abouthisstorybox1}
                alt=""
                className="about_history_infor_box_img1"
              />
            </div>

            <div className="about_history_infor_box">
              <h2 className="about_history_infor_box_h2">game</h2>
              <p className="about_history_infor_box_p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s.
              </p>

              <Image
                src={abouthisstorybox2}
                alt=""
                className="about_history_infor_box_img1"
              />
            </div>

            <div className="about_history_infor_box">
              <h2 className="about_history_infor_box_h2">animation</h2>
              <p className="about_history_infor_box_p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s.
              </p>

              <Image
                src={abouthisstorybox3}
                alt=""
                className="about_history_infor_box_img1"
              />
            </div>
          </div>
        </div>

        <div className="home_care">
          <div className="home_care_left">
            <div className="home_care_left_box1">
              <Image
                src={homecare}
                alt="We are Ready To Grow Your Business With Us"
                className="home_care_left_box1_images"
              />

              <h2 className="home_care_left_box1_h2">
                We’re Ready To Grow Your Business With Us
              </h2>

              <p className="home_care_left_box1_p">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. thinking to further the overall value
                proposition.
              </p>

              <h3 className="home_care_left_box1_h3">
                <Link href="/">Get in Touch</Link>
              </h3>
            </div>
          </div>

          <div className="home_care_right">
            <p className="home_care_right_p">
              <i className="bx bxs-rectangle ga"></i> Welcome Whitecollar
            </p>

            <h1 className="home_care_right_h1">
              We Care About Your Business Plan.
            </h1>

            <p className="home_care_right_p1">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.Iterative approaches to corporate strategy foster
              collaborative thinking to further the overal.
            </p>

            <p className="home_care_right_p1">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.Iterative approaches to corporate strategy foster
              collaborative thinking to further the overal.
            </p>

            <p className="home_care_right_p2">
              <i className="bx bxs-check-circle"></i> Components of a Business
              Strategy
            </p>

            <p className="home_care_right_p2">
              <i className="bx bxs-check-circle"></i> Business Consulting
            </p>

            <div className="home_care_right_box">
              <div className="home_care_right_box1">
                <Image
                  src={homecareright1}
                  alt="icons"
                  className="home_care_right_box1_images_icon1"
                />

                <div className="home_care_right_child1">
                  <h3 className="home_care_right_child1_h3">Experience</h3>
                  <p className="home_care_right_child1_p">
                    Leverage frameworks toprovidee werment.
                  </p>
                </div>
              </div>

              <div className="home_care_right_box1">
                <Image
                  src={homecareright2}
                  alt="icons"
                  className="home_care_right_box1_images_icon1"
                />

                <div className="home_care_right_child1">
                  <h3 className="home_care_right_child1_h3">Experience</h3>
                  <p className="home_care_right_child1_p">
                    Leverage frameworks toprovidee werment.
                  </p>
                </div>
              </div>
            </div>

            <button className="home_care_button">More About Us</button>
          </div>
        </div>

        <div className="about_work">
          <p className="about_work_p">
            <i className="bx bxs-rectangle ga"></i> Work Process
          </p>

          <h2 className="about_work_h2">How We Work</h2>

          <div className="about_work_box1">
            <div className="about_work_box">
              <Image
                src={aboutworkicons1}
                alt="icons images"
                className="about_work_box_imgs"
              />
              <h2 className="about_work_box_h2">Make Appointment</h2>
              <p className="about_work_box_p">
                Leverage agile frameworks provide synopsishigh level overviews
                value proposition.
              </p>

              <p className="about_work_box_p1">Testimonials</p>
            </div>

            <div className="about_work_box">
              <Image
                src={aboutworkicons2}
                alt="icons images"
                className="about_work_box_imgs"
              />
              <h2 className="about_work_box_h2">Make Appointment</h2>
              <p className="about_work_box_p">
                Leverage agile frameworks provide synopsishigh level overviews
                value proposition.
              </p>

              <p className="about_work_box_p1">Testimonials</p>
            </div>

            <div className="about_work_box">
              <Image
                src={aboutworkicons3}
                alt="icons images"
                className="about_work_box_imgs"
              />
              <h2 className="about_work_box_h2">Make Appointment</h2>
              <p className="about_work_box_p">
                Leverage agile frameworks provide synopsishigh level overviews
                value proposition.
              </p>

              <p className="about_work_box_p1">Testimonials</p>
            </div>
          </div>
        </div>

        <div className="about_presentation">
          <div className="about_presentation_box1">
            <div className="about_presentation_box">
              <Image
                src={aboutpresentationicon1}
                alt="icon images"
                className="about_presentation_box_images"
              />

              <h2 className="about_presentation_box_h2">10+</h2>
              <p className="about_presentation_box_p">Projects</p>
            </div>

            <div className="about_presentation_box">
              <Image
                src={aboutpresentationicon2}
                alt="icon images"
                className="about_presentation_box_images"
              />

              <h2 className="about_presentation_box_h2">5960</h2>
              <p className="about_presentation_box_p">Partner</p>
            </div>

            <div className="about_presentation_box">
              <Image
                src={aboutpresentationicon3}
                alt="icon images"
                className="about_presentation_box_images"
              />

              <h2 className="about_presentation_box_h2">50k</h2>
              <p className="about_presentation_box_p">File</p>
            </div>

            <div className="about_presentation_box">
              <Image
                src={aboutpresentationicon4}
                alt="icon images"
                className="about_presentation_box_images"
              />

              <h2 className="about_presentation_box_h2">25+</h2>
              <p className="about_presentation_box_p">Peoples</p>
            </div>
          </div>
        </div>

        <div className="about_video">
          <Image alt="" src={aboutbannervideo} className="about_video_video"></Image>
          <div className="overlay"></div>
          <div className="about_video_content">
            <div className="about_video_content_top">
              <p className="about_video_content_top_icon"></p>
              <p className="about_video_content_top_p">Short Video</p>
            </div>
            <p className="about_video_content_title">Our Presentation</p>
            <p className="about_video_content_lorem">Collaboratively administrate channels whereas virtual tailers predominate procedures reliable supply chains.</p>
            <div className="about_video_icon"><i className='bx bx-play-circle'></i></div>
          </div>
        </div>

        <div className="about_team_session">
          <div className="team_session1_top">
            <p className="team_session1_top_icon"></p>
            <p className="team_session1_top_p">Our Team</p>
          </div>
          <p className="about_team_session_title">Meet Our Experts</p>
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
          </div>
        </div>
      </DefaultLayout>
    </LayoutSeo>
  );
}
