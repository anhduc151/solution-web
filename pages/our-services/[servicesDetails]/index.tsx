import DefaultLayout from "@/components/DefaultLayout";
import LayoutSeo from "@/components/LayoutSeo";
import Image from "next/image";
import React from "react";
import servicesdetailsright1 from "../../../public/images/services_details_right.png";
import servicesdetailsright2 from "../../../public/images/services_details_right_child1.png";

export interface ServicesDetailsProps {}

export default function ServicesDetails(props: ServicesDetailsProps) {
  return (
    <LayoutSeo title="Solution">
      <DefaultLayout>
        <div className="our_services_headings">
          <div className="our_services_headings_left">
            <p className="our_services_headings_left_p">
              <i className="bx bxs-rectangle ga"></i> About The Services
            </p>

            <h2 className="our_services_headings_left_h2">
              Business Management
            </h2>
          </div>

          <div className="our_services_headings_right"></div>
        </div>

        <div className="services_details">
          <div className="services_details_left">
            <div className="services_details_left_box1">
              <h3 className="services_details_left_box1_h3">Services</h3>
              <p className="services_details_left_box1_p">
                Financial Consultancy
              </p>
              <p className="services_details_left_box1_p">
                Business Management
              </p>
              <p className="services_details_left_box1_p">
                Consultancy Program
              </p>
              <p className="services_details_left_box1_p">
                Marketing Consultancy
              </p>
              <p className="services_details_left_box1_p">
                Financial Insurance & Jobs
              </p>
              <p className="services_details_left_box1_p">Bank Management</p>
            </div>

            <div className="services_details_left_box2">
              <h3 className="services_details_left_box1_h3">Download</h3>
              <p className="services_details_left_box1_p1">
                One-to-one customer service with robust deliverables.
              </p>
              <button className="services_details_left_box1_button">
                Document.pdf
              </button>
              <button className="services_details_left_box1_button">
                Document.zip
              </button>
            </div>

            <div className="services_details_left_box3">
              <p className="services_details_left_box3_p">
                <i className="bx bxs-rectangle "></i> Have any question?
              </p>
              <h2 className="services_details_left_box3_h2">
                Do you need <br />
                <span className="services_details_left_box3_span">
                  any help?
                </span>
              </h2>
              <p className="services_details_left_box3_p1">
                Leverage agile frameworks to provide a robust synopsis for high
                level.
              </p>

              <button className="services_details_left_box3_button1">
                Contact Us
              </button>
            </div>
          </div>

          <div className="services_details_right">
            <Image
              src={servicesdetailsright1}
              alt="images"
              className="services_details_right_images"
            />

            <h2 className="services_details_right_h2">
              Why Us For International Business Management Consulting!
            </h2>
            <p className="services_details_right_p">
              Completely synergized resourced taxings relationships premiers
              markets ultivate one-to-one customer service with robust ideas
              dynamically innovated resources leveling customer service for
              state of the art customer service innovate product for reliable
              supply engage web services cutting-edge deliverables.
            </p>

            <p className="services_details_right_p1">
              Proactively envisioned multimedia based expertise media growth
              superior collaboration.
            </p>

            <p className="services_details_right_p2">
              One-to-one customer service with robust ideas dynamically
              innovated resources for reliable supply engage web services
              cutting-edge deliverables.
            </p>

            <div className="services_details_right_child1">
              <Image
                src={servicesdetailsright2}
                alt="images"
                className="services_details_right_child1_imgs"
              />

              <div className="services_details_right_child1_box">
                <h2 className="services_details_right_child1_box_h2">
                  Our benefits
                </h2>

                <p className="services_details_right_child1_box_p">
                  Incubate standards compliant channels benefits.
                </p>

                <p className="services_details_right_child1_box_p1">
                  <i className="bx bxs-check-circle"></i> Incubate standards
                  compliant channels benefits.
                </p>

                <p className="services_details_right_child1_box_p1">
                  <i className="bx bxs-check-circle"></i> Incubate standards
                  compliant channels benefits.
                </p>

                <p className="services_details_right_child1_box_p1">
                  <i className="bx bxs-check-circle"></i> Incubate standards
                  compliant channels benefits.
                </p>
              </div>
            </div>

            <h2 className="services_details_right_h2">
              Why Us For International Business Management Consulting!
            </h2>

            <p className="services_details_right_p">
              Leveling customer service for state of the art customer service
              innovate product for reliable supply engage web services
              cutting-edge deliverables.
            </p>
          </div>
        </div>
      </DefaultLayout>
    </LayoutSeo>
  );
}
