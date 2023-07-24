import DefaultLayout from "@/components/DefaultLayout";
import LayoutSeo from "@/components/LayoutSeo";
import React from "react";

export interface PricePackProps {}

export default function PricePack(props: PricePackProps) {
  return (
    <LayoutSeo title="Solution">
      <DefaultLayout>
        <div className="header_blog">
          <div className="content_header">
            <div className="content_header_text">
              <div className="content_header_title">
                <i className="bx bxs-rectangle ga"></i>
                <p className="content_header_title_p">Pricing Package</p>
              </div>
              <p className="content_header_content">
                Affordable Plans For Customers
              </p>
            </div>
          </div>
        </div>

        <div className="price">
          <div className="price_up">
            <p className="price_up_p">
              <i className="bx bxs-rectangle ga"></i> Simple Pricing Option
            </p>

            <h2 className="price_up_h2">
              Choose the Right Plan for Your and Your Team
            </h2>
          </div>

          <div className="price_down">
            <div className="price_down_box">
              <div className="price_down_box1">
                <h2 className="price_down_box1_h2">Basic</h2>
                <h1 className="price_down_box1_h1">
                  $7.99 <span className="price_down_box1_span">/month</span>
                </h1>
                <button className="price_down_box1_buttons">
                  Billed as $96 per year
                </button>
                <p className="price_down_box1_p">Unlimited members</p>
                <p className="price_down_box1_p">Unlimited feedback</p>
                <p className="price_down_box1_p">Weekly team Feedback Friday</p>
                <p className="price_down_box1_p">
                  Custom Kudos +9 illustration
                </p>
                <p className="price_down_box1_p">
                  Team feedback history (30 items)
                </p>
                <p className="price_down_box1_p">Personal feedback </p>
                <button className="price_down_box1_button1">Get Started</button>
              </div>

              <div className="price_down_box2">
                <div className="price_down_box2_up">
                  <p className="price_down_box2_up_p">Most Popular</p>
                </div>

                <div className="price_down_box2_down">
                  <h2 className="price_down_box2_h2">Advanced</h2>
                  <h1 className="price_down_box2_h1">
                  $9.99 <span className="price_down_box2_span">/month</span>
                  </h1>
                  <button className="price_down_box2_buttons">
                    Billed as $96 per year
                  </button>
                  <p className="price_down_box2_p">Unlimited members</p>
                  <p className="price_down_box2_p">Unlimited feedback</p>
                  <p className="price_down_box2_p">
                    Weekly team Feedback Friday
                  </p>
                  <p className="price_down_box2_p">
                    Custom Kudos +9 illustration
                  </p>
                  <p className="price_down_box2_p">
                    Team feedback history (30 items)
                  </p>
                  <p className="price_down_box2_p">Personal feedback </p>
                  <button className="price_down_box2_button1">
                    Get Started
                  </button>
                </div>
              </div>

              <div className="price_down_box1">
                <h2 className="price_down_box1_h2">Pro</h2>
                <h1 className="price_down_box1_h1">
                  $7.99 <span className="price_down_box1_span">/month</span>
                </h1>
                <button className="price_down_box1_buttons">
                  Billed as $96 per year
                </button>
                <p className="price_down_box1_p">Unlimited members</p>
                <p className="price_down_box1_p">Unlimited feedback</p>
                <p className="price_down_box1_p">Weekly team Feedback Friday</p>
                <p className="price_down_box1_p">
                  Custom Kudos +9 illustration
                </p>
                <p className="price_down_box1_p">
                  Team feedback history (30 items)
                </p>
                <p className="price_down_box1_p">Personal feedback </p>
                <button className="price_down_box1_button1">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </LayoutSeo>
  );
}
