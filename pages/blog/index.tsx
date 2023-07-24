import DefaultLayout from "@/components/DefaultLayout";
import LayoutSeo from "@/components/LayoutSeo";
import * as React from "react";
import Image from "next/image";
import new1 from "../../public/images/blog_new1.png";

export interface IBlogPageProps {}

export default function BlogPage(props: IBlogPageProps) {
  return (
    <LayoutSeo title="Blog - Solution">
      <DefaultLayout>
        <div className="header_blog">
          <div className="content_header">
            <div className="content_header_text">
              <div className="content_header_title">
                <p className="content_header_title_p">
                  <i className="bx bxs-rectangle ga"></i> Recent News
                </p>
              </div>
              <p className="content_header_content">We Keep You Updated</p>
            </div>
          </div>
        </div>

        <div className="blog_session">
          <div className="content_header_title">
            <p className="blog_session_title_p">
              <i className="bx bxs-rectangle ga"></i> Our Recent News
            </p>
          </div>
          <p className="blog_session_h1">Featured News And Insights</p>
          <div className="blog_session_container">
            <div className="blog_session_box">
              <Image alt="" src={new1} className="blog_session_box_img"></Image>
              <p className="blog_session_box_title">
                A Business Consulting That Can Produce
              </p>
              <p className="blog_session_box_lorem">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews.Iterative approaches to corporate strategy
                foster collaborative thinking.
              </p>
              <div className="blog_session_box_button">Read more</div>
            </div>
            <div className="blog_session_box">
              <Image alt="" src={new1} className="blog_session_box_img"></Image>
              <p className="blog_session_box_title">
                Popular Email Marketing Techniques 2022
              </p>
              <p className="blog_session_box_lorem">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews.Iterative approaches to corporate strategy
                foster collaborative thinking.
              </p>
              <div className="blog_session_box_button">Read more</div>
            </div>
            <div className="blog_session_box">
              <Image alt="" src={new1} className="blog_session_box_img"></Image>
              <p className="blog_session_box_title">
                What are backlinks and Why They are Important
              </p>
              <p className="blog_session_box_lorem">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews.Iterative approaches to corporate strategy
                foster collaborative thinking.
              </p>
              <div className="blog_session_box_button">Read more</div>
            </div>
            <div className="blog_session_box">
              <Image alt="" src={new1} className="blog_session_box_img"></Image>
              <p className="blog_session_box_title">
                Importance of Keyword Research in a Blog
              </p>
              <p className="blog_session_box_lorem">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews.Iterative approaches to corporate strategy
                foster collaborative thinking.
              </p>
              <div className="blog_session_box_button">Read more</div>
            </div>
          </div>

          <div className="blog_session_button_next">
            <p className="blog_session_button_next_text">Next</p>
            <p className="blog_session_button_next_icon">
              <i className="bx bx-chevron-right"></i>
            </p>
          </div>
        </div>
      </DefaultLayout>
    </LayoutSeo>
  );
}
