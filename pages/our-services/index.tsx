import DefaultLayout from "@/components/DefaultLayout";
import LayoutSeo from "@/components/LayoutSeo";
import Image from "next/image";
import React from "react";
import ourservicesgame1 from "../../public/images/our_services_headings_img1.png";
import ourservicesgame2 from "../../public/images/our_services_headings_img2.png";
import ourservicesgame3 from "../../public/images/our_services_headings_img3.png";
import ourservicesgame4 from "../../public/images/our_services_headings_img4.png";
import ourservicesgame5 from "../../public/images/our_services_headings_img5.png";
import ourprovideheadingsimgs from "../../public/images/our_provide_headings.png";
import homebrandicons1 from "../../public/images/home_brand_icon1.png";
import homebrandicons2 from "../../public/images/home_brand_icon2.png";
import homebrandicons3 from "../../public/images/home_brand_icon3.png";
import homebrandicons4 from "../../public/images/home_brand_icon4.png";
import homebrandicons5 from "../../public/images/home_brand_icon5.png";
import ourofferdown1 from "../../public/images/our_offer_down1.png";
import ourofferdown2 from "../../public/images/our_offer_down2.png";
import ourofferdown3 from "../../public/images/our_offer_down3.png";
import ourofferdown4 from "../../public/images/our_offer_down4.png";
import ourgrowsimg1 from "../../public/images/home_provide_icon1.png";
import ourgrowsimg2 from "../../public/images/home_provide_icon2.png";
import star1 from "../../public/images/star1.png";
import homeavatar1 from "../../public/images/home_avatar1.png";
import homeavatar2 from "../../public/images/home_avatar2.png";

export interface OurServicesProps {}

export default function OurServices(props: OurServicesProps) {
  return (
    <LayoutSeo title="Solution">
      <DefaultLayout>
        <div className="our_services_headings">
          <div className="our_services_headings_left">
            <p className="our_services_headings_left_p">
              <i className="bx bxs-rectangle ga"></i> Our Services
            </p>

            <h2 className="our_services_headings_left_h2">We’re Offering</h2>

            <p className="our_services_headings_left_p1">
              Collaboratively administrate empowered markets plug and play
              networks dynamically procrastinated
            </p>
          </div>

          <div className="our_services_headings_right">
            <div className="our_services_headings_right_child1">
              <div className="our_services_headings_right_child1_up">
                <Image
                  src={ourservicesgame1}
                  alt="icons games"
                  className="our_services_headings_right_child1_up_images"
                />

                <Image
                  src={ourservicesgame2}
                  alt="icons games"
                  className="our_services_headings_right_child1_up_images"
                />

                <Image
                  src={ourservicesgame3}
                  alt="icons games"
                  className="our_services_headings_right_child1_up_images"
                />
              </div>

              <div className="our_services_headings_right_child1_down">
                <Image
                  src={ourservicesgame4}
                  alt="icons games"
                  className="our_services_headings_right_child1_up_images"
                />
                <Image
                  src={ourservicesgame5}
                  alt="icons games"
                  className="our_services_headings_right_child1_up_images"
                />
              </div>
            </div>

            <div className="our_services_headings_right_child1">
              <h1 className="our_services_headings_right_child1_h1">
                5
                <span className="our_services_headings_right_child1_span">
                  games
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="our_provide">
          <div className="our_provide_headings">
            <Image
              src={ourprovideheadingsimgs}
              alt="provide images"
              className="our_provide_headings_imgs"
            />
          </div>

          <div className="home_brand_content1">
            <p className="honme_brand_conten1_p">
              <i className="bx bxs-rectangle ga"></i> We Are Expertise In
            </p>

            <h1 className="home_brand_content1_h1">
              We Provide Professional Business Solutions.
            </h1>

            <div className="home_brand_box1">
              <div className="home_brand_box1_child1">
                <div className="home_brand_child1_box">
                  <div className="home_brand_child1_box1">
                    <h2 className="home_brand_child1_box_h2">
                      Financial Consultancy
                    </h2>
                    <p className="home_brand_child1_box_p">Read More</p>
                  </div>
                  <Image
                    src={homebrandicons1}
                    alt="images brand icons"
                    className="home_brand_child1_box_icons_images"
                  />
                </div>

                <div className="home_brand_child1_box">
                  <div className="home_brand_child1_box1">
                    <h2 className="home_brand_child1_box_h2">
                      Business Management
                    </h2>
                    <p className="home_brand_child1_box_p">Read More</p>
                  </div>
                  <Image
                    src={homebrandicons2}
                    alt="images brand icons"
                    className="home_brand_child1_box_icons_images"
                  />
                </div>

                <div className="home_brand_child1_box">
                  <div className="home_brand_child1_box1">
                    <h2 className="home_brand_child1_box_h2">
                      Consultants & program
                    </h2>
                    <p className="home_brand_child1_box_p">Read More</p>
                  </div>
                  <Image
                    src={homebrandicons3}
                    alt="images brand icons"
                    className="home_brand_child1_box_icons_images"
                  />
                </div>
              </div>

              <div className="home_brand_box1_child1">
                <div className="home_brand_child1_box">
                  <div className="home_brand_child1_box1">
                    <h2 className="home_brand_child1_box_h2">
                      Company Management
                    </h2>
                    <p className="home_brand_child1_box_p">Read More</p>
                  </div>
                  <Image
                    src={homebrandicons4}
                    alt="images brand icons"
                    className="home_brand_child1_box_icons_images"
                  />
                </div>

                <div className="home_brand_child1_box">
                  <div className="home_brand_child1_box1">
                    <h2 className="home_brand_child1_box_h2">
                      Financial & Insurance jobs
                    </h2>
                    <p className="home_brand_child1_box_p">Read More</p>
                  </div>
                  <Image
                    src={homebrandicons5}
                    alt="images brand icons"
                    className="home_brand_child1_box_icons_images"
                  />
                </div>

                <div className="home_brand_child1_box">
                  <div className="home_brand_child1_box1">
                    <h2 className="home_brand_child1_box_h2">
                      Financial Consultancy
                    </h2>
                    <p className="home_brand_child1_box_p">Read More</p>
                  </div>
                  <Image
                    src={homebrandicons1}
                    alt="images brand icons"
                    className="home_brand_child1_box_icons_images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="our_offer">
          <div className="our_offer_up">
            <div className="our_offer_up_child1">
              <p className="our_offer_up_child1_p">
                <i className="bx bxs-rectangle ga"></i> What we’re offering
              </p>
              <h2 className="our_offer_up_child1_h2">
                Services we’re providing to our customers
              </h2>
            </div>

            <p className="our_offer_up_child1_p1">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with service for state of the art customer service.
            </p>
          </div>

          <div className="our_offer_down">
            <div className="our_offer_box1">
              <div className="our_offer_box">
                <Image
                  src={ourofferdown1}
                  alt="image"
                  className="our_offer_box_down_imgs"
                />
                <h2 className="our_offer_box_down_h2">Product development</h2>
                <p className="our_offer_box_down_p">
                  level overviews proposition.
                </p>
              </div>

              <div className="our_offer_box">
                <Image
                  src={ourofferdown2}
                  alt="image"
                  className="our_offer_box_down_imgs"
                />
                <h2 className="our_offer_box_down_h2">Product development</h2>
                <p className="our_offer_box_down_p">
                  level overviews proposition.
                </p>
              </div>

              <div className="our_offer_box">
                <Image
                  src={ourofferdown3}
                  alt="image"
                  className="our_offer_box_down_imgs"
                />
                <h2 className="our_offer_box_down_h2">Product development</h2>
                <p className="our_offer_box_down_p">
                  level overviews proposition.
                </p>
              </div>

              <div className="our_offer_box">
                <Image
                  src={ourofferdown4}
                  alt="image"
                  className="our_offer_box_down_imgs"
                />
                <h2 className="our_offer_box_down_h2">Product development</h2>
                <p className="our_offer_box_down_p">
                  level overviews proposition.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="our_grows">
          <div className="our_grows_up">
            <p className="our_grows_up_p">
              <i className="bx bxs-rectangle ga"></i> Why Choose Me
            </p>

            <h2 className="home_care_right_h2">
              We Provide Solutions To Grow Your Business
            </h2>
          </div>

          <div className="our_grows_down">
            <div className="our_grows_down_left">
              <p className="our_grows_down_left_p">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. thinking to further the overall proposition.
              </p>

              <div className="our_grows_down_left_child1">
                <div className="our_grows_down_left_child1_box1">
                  <div className="our_grows_down_left_child1_box">
                    <i className="bx bxs-check-circle change"></i>
                    <div className="our_grows_down_left_child1_box2">
                      <p className="our_grows_down_left_child1_p">
                        <span className="our_grows_down_left_child1_span">
                          2,800+
                        </span>
                        Active clients
                      </p>

                      <p className="our_grows_down_left_child1_p1">
                        provide a robust synopsis for high level overviews.
                      </p>
                    </div>
                  </div>

                  <div className="our_grows_down_left_child1_box">
                    <i className="bx bxs-check-circle change"></i>
                    <div className="our_grows_down_left_child1_box2">
                      <p className="our_grows_down_left_child1_p">
                        <span className="our_grows_down_left_child1_span">
                          2,800+
                        </span>
                        Active clients
                      </p>

                      <p className="our_grows_down_left_child1_p1">
                        provide a robust synopsis for high level overviews.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="our_grows_down_left_child1_box1">
                  <div className="our_grows_down_left_child1_box">
                    <i className="bx bxs-check-circle change"></i>
                    <div className="our_grows_down_left_child1_box2">
                      <p className="our_grows_down_left_child1_p">
                        <span className="our_grows_down_left_child1_span">
                          2,800+
                        </span>
                        Active clients
                      </p>

                      <p className="our_grows_down_left_child1_p1">
                        provide a robust synopsis for high level overviews.
                      </p>
                    </div>
                  </div>

                  <div className="our_grows_down_left_child1_box">
                    <i className="bx bxs-check-circle change"></i>
                    <div className="our_grows_down_left_child1_box2">
                      <p className="our_grows_down_left_child1_p">
                        <span className="our_grows_down_left_child1_span">
                          2,800+
                        </span>
                        Active clients
                      </p>

                      <p className="our_grows_down_left_child1_p1">
                        provide a robust synopsis for high level overviews.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="our_grows_down_left_buttons">
                Appointment
              </button>
            </div>

            <div className="our_grows_down_right">
              <div className="our_grows_down_right_up">
                <Image
                  src={ourgrowsimg1}
                  alt="images"
                  className="our_grows_down_right_imgs"
                />

                <div className="our_grows_down_right_up_child1">
                  <h4 className="our_grows_down_right_up_child1_h4">Clients</h4>
                  <h3 className="our_grows_down_right_up_child1_h3">
                    Quick Response
                  </h3>
                  <p className="our_grows_down_right_up_child1_p">
                    Objectively products whereas parallel platforms procedures
                  </p>
                </div>
              </div>

              <div className="our_grows_down_right_down">
                <Image
                  src={ourgrowsimg2}
                  alt="images"
                  className="our_grows_down_right_imgs"
                />

                <div className="our_grows_down_right_up_child1">
                  <h4 className="our_grows_down_right_up_child1_h4">
                    Projects
                  </h4>
                  <h3 className="our_grows_down_right_up_child1_h3">
                    Finished Jobs
                  </h3>
                  <p className="our_grows_down_right_up_child1_p">
                    Objectively products whereas parallel platforms procedures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home_ours">
          <div className="home_ours_box1">
            <p className="home_ours_p">
              <i className="bx bxs-rectangle ga"></i> Testimonial
            </p>

            <h2 className="home_ours_h2">What Our Client Say’s</h2>
            <p className="home_ours_p">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.Iterative
            </p>
          </div>

          <div className="home_ours_box2">
            <div className="home_ours_box1_headings">
              <Image
                src={homeavatar1}
                alt="avatar images"
                className="home_ours_avtar_images"
              />

              <div className="home_ours_box1_headings_writes">
                <h4 className="home_ours_box1_headings_writes_h4">
                  Nattasha Kelvin
                </h4>

                <p className="home_ours_box1_headings_writes_p">Designer</p>
                <Image
                  src={star1}
                  alt="star images"
                  className="home_ours_box1_headings_writes_images"
                />
              </div>
            </div>

            <p className="home_ours_box1_p">
              “ dd an excerpt from your personal biography, or simply let the
              world know who you are and what you have to offer. Connect with
              your site visitor’s on a personal level and make sure that your
              site.
            </p>
          </div>

          <div className="home_ours_box2">
            <div className="home_ours_box1_headings">
              <Image
                src={homeavatar2}
                alt="avatar images"
                className="home_ours_avtar_images"
              />

              <div className="home_ours_box1_headings_writes">
                <h4 className="home_ours_box1_headings_writes_h4">
                  Cincinnati
                </h4>

                <p className="home_ours_box1_headings_writes_p">Designer</p>
                <Image
                  src={star1}
                  alt="star images"
                  className="home_ours_box1_headings_writes_images"
                />
              </div>
            </div>

            <p className="home_ours_box1_p">
              “ Leverage agile frameworks to provide a robust synopsis for high
              level overviews ”
            </p>
          </div>
        </div>
      </DefaultLayout>
    </LayoutSeo>
  );
}
