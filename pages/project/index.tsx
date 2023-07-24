import DefaultLayout from "@/components/DefaultLayout";
import LayoutSeo from "@/components/LayoutSeo";
import * as React from "react";

import post1 from "../../public/images/project_post1.png";
import post2 from "../../public/images/project_post2.png";
import post3 from "../../public/images/project_post3.png";
import post4 from "../../public/images/project_post4.png";
import Image from "next/image";

export interface IProjectProps {}

export default function Project(props: IProjectProps) {
  return (
    <LayoutSeo title="Projects - Solution">
      <DefaultLayout>
        <div className="header_project">
          <div className="content_header">
            <div className="content_header_text">
              <div className="content_header_title">
                <p className="content_header_title_p">
                  <i className="bx bxs-rectangle ga"></i> The Case Studies
                </p>
              </div>
              <p className="content_header_content">Our Latest Projects</p>
            </div>
          </div>
        </div>

        <div className="project_session">
          <div className="content_header_title">
            <p className="blog_session_title_p">
              <i className="bx bxs-rectangle ga"></i> Latest Projects
            </p>
          </div>
          <p className="blog_session_h1">Discover our latest client projects</p>
          <p className="project_session_lorem">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews.Iterative approaches to corporate strategy foster
            collaborative thinking to further the overal.
          </p>

          <div className="project_session_post">
            <div className="project_session_post_item">
              <Image
                alt=""
                src={post1}
                className="project_session_post_item_img"
              ></Image>
              <div className="project_session_post_item_content">
                <div className="project_session_post_item_content_left">
                  <p className="project_session_post_item_title">
                    Financial Investment
                  </p>
                  <div className="project_session_post_item_content_left_calender">
                    <p className="project_session_post_item_content_left_calender_icon">
                      <i className="bx bx-calendar"></i>
                    </p>
                    <p className="project_session_post_item_content_left_calender_context">
                      Sep 2022
                    </p>
                  </div>
                </div>
                <div className="project_session_post_item_content_right">
                  <div className="project_session_post_item_content_right_boxicon">
                    <i className="bx bx-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_session_post_item">
              <Image
                alt=""
                src={post2}
                className="project_session_post_item_img"
              ></Image>
              <div className="project_session_post_item_content">
                <div className="project_session_post_item_content_left">
                  <p className="project_session_post_item_title">
                    Financial Investmentaaa
                  </p>
                  <div className="project_session_post_item_content_left_calender">
                    <p className="project_session_post_item_content_left_calender_icon">
                      <i className="bx bx-calendar"></i>
                    </p>
                    <p className="project_session_post_item_content_left_calender_context">
                      Sep 2022
                    </p>
                  </div>
                </div>
                <div className="project_session_post_item_content_right">
                  <div className="project_session_post_item_content_right_boxicon">
                    <i className="bx bx-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_session_post_item">
              <Image
                alt=""
                src={post3}
                className="project_session_post_item_img"
              ></Image>
              <div className="project_session_post_item_content">
                <div className="project_session_post_item_content_left">
                  <p className="project_session_post_item_title">
                    Financial Investment
                  </p>
                  <div className="project_session_post_item_content_left_calender">
                    <p className="project_session_post_item_content_left_calender_icon">
                      <i className="bx bx-calendar"></i>
                    </p>
                    <p className="project_session_post_item_content_left_calender_context">
                      Sep 2022
                    </p>
                  </div>
                </div>
                <div className="project_session_post_item_content_right">
                  <div className="project_session_post_item_content_right_boxicon">
                    <i className="bx bx-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_session_post_item">
              <Image
                alt=""
                src={post4}
                className="project_session_post_item_img"
              ></Image>
              <div className="project_session_post_item_content">
                <div className="project_session_post_item_content_left">
                  <p className="project_session_post_item_title">
                    Financial Investment
                  </p>
                  <div className="project_session_post_item_content_left_calender">
                    <p className="project_session_post_item_content_left_calender_icon">
                      <i className="bx bx-calendar"></i>
                    </p>
                    <p className="project_session_post_item_content_left_calender_context">
                      Sep 2022
                    </p>
                  </div>
                </div>
                <div className="project_session_post_item_content_right">
                  <div className="project_session_post_item_content_right_boxicon">
                    <i className="bx bx-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </LayoutSeo>
  );
}
