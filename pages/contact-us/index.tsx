import * as React from "react";
import LayoutSeo from "@/components/LayoutSeo";
import imgsession1 from "../../public/images/contact_session1.png";
import Image from "next/image";
import { Button, Form, Input } from "antd";
import DefaultLayout from "@/components/DefaultLayout";

export interface IContactProps {}

export default function Contact(props: IContactProps) {
  const { TextArea } = Input;
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <LayoutSeo title="Contact Us - Solution">
      <DefaultLayout>
        <div className="header_contact">
          <div className="content_header">
            <div className="content_header_text">
              <div className="content_header_title">
                <p className="content_header_title_p">
                  <i className="bx bxs-rectangle ga"></i> Contact Us
                </p>
              </div>
              <p className="content_header_content">Feel Free Reach Us</p>
            </div>
          </div>
        </div>

        <div className="contact_session">
          <div className="contact_session1">
            <div className="contact_session1_left">
              <Image
                className="contact_session1_left_img"
                alt=""
                src={imgsession1}
              ></Image>
            </div>
            <div className="contact_session1_right">
              <div className="content_header_text_right">
                <p className="contact_session1_title">
                  <i className="bx bxs-rectangle ga"></i> Let’s Talk
                </p>
              </div>
              <p className="contact_session1_title_big">Get in touch with us</p>
              <p className="contact_session1_title_des">
                Completely synergize resource taxing relationships via premier
                niche ynamically innovate state of the art customer service.
              </p>
              <div className="container_icon_contact">
                <div className="icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <div className="content_contact_session1_right">
                  <div className="content_contact_session1_right_title">
                    Have any question?
                  </div>
                  <div className="content_contact_session1_right_des">
                    Free +01 569 896 654
                  </div>
                </div>
              </div>
              <div className="container_icon_contact">
                <div className="icon">
                  <i className="bx bx-envelope"></i>
                </div>
                <div className="content_contact_session1_right">
                  <div className="content_contact_session1_right_title">
                    Write email
                  </div>
                  <div className="content_contact_session1_right_des">
                    Info@whitecollar.com
                  </div>
                </div>
              </div>
              <div className="container_icon_contact">
                <div className="icon">
                  <i className="bx bxs-map"></i>
                </div>
                <div className="content_contact_session1_right">
                  <div className="content_contact_session1_right_title">
                    Visit anytime
                  </div>
                  <div className="content_contact_session1_right_des">
                    King Street, Prior Lake, New York
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form_contact">
          <div className="form_contact_title_form">
            <div className="form_contact_text">
              <p className="form_contact_title">
                <i className="bx bxs-rectangle ga"></i> Contact Us
              </p>
            </div>
            <p className="form_contact_title_big">Request A Call Back !</p>
          </div>
          <div className="form_contact_title_form_input">
            <Form onFinish={onFinish} name="basic">
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input className="input_form" placeholder="Your Name" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input className="input_form" placeholder="Email Address" />
              </Form.Item>

              <Form.Item
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input className="input_form" placeholder="Your phoneNumber" />
              </Form.Item>

              <Form.Item
                name="subject"
                rules={[
                  { required: true, message: "Please input your subject!" },
                ]}
              >
                <Input className="input_form" placeholder="Subject" />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[
                  { required: true, message: "Please input your message!" },
                ]}
              >
                <TextArea
                  className="input_form"
                  placeholder="Message"
                  rows={4}
                />
              </Form.Item>

              <div className="form_button" >
                <Button type="primary" htmlType="submit" className="blog_session_button_next">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </DefaultLayout>
    </LayoutSeo>
  );
}
