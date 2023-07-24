import Image from "next/image";
import homeimages from "../public/images/home_headings_imgs.png";
import homeservices from "../public/images/home_services_images.png";
import homecare from "../public/images/home_care_left.png";
import homecareright1 from "../public/images/home_care_right_icon1.png";
import homecareright2 from "../public/images/home_care_right_icon2.png";
import Link from "next/link";
import homebrand1 from "../public/images/home_brand_img1.png";
import homebrand2 from "../public/images/home_brand_img2.png";
import homebrand3 from "../public/images/home_brand_img3.png";
import homebrand4 from "../public/images/home_brand_img4.png";
import homebrand5 from "../public/images/home_brand_img5.png";
import homebrandicons1 from "../public/images/home_brand_icon1.png";
import homebrandicons2 from "../public/images/home_brand_icon2.png";
import homebrandicons3 from "../public/images/home_brand_icon3.png";
import homebrandicons4 from "../public/images/home_brand_icon4.png";
import homebrandicons5 from "../public/images/home_brand_icon5.png";
import homeprovide1 from "../public/images/home_provide_icon1.png";
import homeprovide2 from "../public/images/home_provide_icon2.png";
import homeprovidebackfround from "../public/images/home_provide_background.png";
import homeinspiration1 from "../public/images/home_inspiration1.png";
import homeinspiration2 from "../public/images/home_inspiration2.png";
import homeinspiration3 from "../public/images/home_inspiration3.png";
import homeinspiration4 from "../public/images/home_inspiration4.png";
import star1 from "../public/images/star1.png";
import homeavatar1 from "../public/images/home_avatar1.png";
import homeavatar2 from "../public/images/home_avatar2.png";
import homeappointment from "../public/images/home_appointment_images.png";
import { Button, Form, Input } from "antd";
import { DatePicker, Space } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import LayoutSeo from "@/components/LayoutSeo";
import homepostheadings from "../public/images/home_post_headings.png";
import homepostnewjobs1 from "../public/images/home_post_new_jobs_images.png";
import homepostnewjobs2 from "../public/images/home_post_new_jobs_images2.png";
import DefaultLayout from "@/components/DefaultLayout";

dayjs.extend(customParseFormat);

export default function Home() {
  const { TextArea } = Input;
  // const { RangePicker } = DatePicker;
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const range = (start: number, end: number) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  // eslint-disable-next-line arrow-body-style
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };

  const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("Change:", e.target.value);
  };

  return (
    <LayoutSeo title="Solution">
      <DefaultLayout>
        <div className="home_headings">
          <h1 className="home_headings_h1">
            The Best Value for Business and Corporation
          </h1>
          <Image
            src={homeimages}
            alt="This is the laptop screen"
            className="home_headings_images"
          />
        </div>

        <div className="home_services">
          <div className="home_services_left">
            <div className="home_services_left_child1">
              <div className="home_services_left_child1_box1">
                <h2 className="home_services_left_child1_box_h2">game</h2>
                <p className="home_services_left_child1_box_p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s
                </p>
              </div>

              <div className="home_services_left_child1_box2">
                <h2 className="home_services_left_child1_box_h2">animation</h2>
                <p className="home_services_left_child1_box_p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>

            <div className="home_services_left_child2">
              <div className="home_services_left_child1_box3">
                <h2 className="home_services_left_child1_box_h2">
                  web development
                </h2>
                <p className="home_services_left_child1_box_p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s
                </p>
              </div>

              <div className="home_services_left_child1_box4">
                <h2 className="home_services_left_child1_box_h2">animation</h2>
                <p className="home_services_left_child1_box_p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>

          <div className="home_services_right">
            <Image
              src={homeservices}
              alt="images services"
              className="home_services_images"
            />
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

        <div className="home_brand">
          <div className="home_brand_headings">
            <Image
              src={homebrand1}
              alt="brand images"
              className="home_brand_headings_images"
            />

            <Image
              src={homebrand2}
              alt="brand images"
              className="home_brand_headings_images"
            />

            <Image
              src={homebrand3}
              alt="brand images"
              className="home_brand_headings_images"
            />

            <Image
              src={homebrand4}
              alt="brand images"
              className="home_brand_headings_images"
            />

            <Image
              src={homebrand5}
              alt="brand images"
              className="home_brand_headings_images"
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

        <div className="home_provide">
          <div className="home_provide_left">
            <p className="home_provide_left_p">
              <i className="bx bxs-rectangle ga"></i> Why Choose Me
            </p>

            <h2 className="home_provide_left_h2">
              We Provide Solutions To Grow Your Business
            </h2>

            <p className="home_provide_left_p">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. thinking to further the overall proposition.
            </p>

            <div className="home_provide_box">
              <div className="home_provide_box_child1">
                <Image
                  src={homeprovide1}
                  alt="images icons"
                  className="home_provide_box_child1_icons"
                />

                <div className="home_provide_box1">
                  <p className="home_provide_box1_p">Clients</p>
                  <h2 className="home_provide_box1_h2">Quick Response</h2>
                </div>
              </div>

              <div className="home_provide_box_child1">
                <Image
                  src={homeprovide2}
                  alt="images icons"
                  className="home_provide_box_child1_icons"
                />

                <div className="home_provide_box1">
                  <p className="home_provide_box1_p">Clients</p>
                  <h2 className="home_provide_box1_h2">Quick Response</h2>
                </div>
              </div>
            </div>

            <div className="home_provide_check">
              <div className="home_provide_check_left">
                <p className="home_provided_p1">
                  <i className="bx bxs-check-circle change"></i>
                  <span className="home_provide_span">2,800+ </span> Active
                  clients
                </p>

                <p className="home_provided_p1">
                  <i className="bx bxs-check-circle change"></i>
                  <span className="home_provide_span">2,800+ </span> Active
                  clients
                </p>
              </div>

              <div className="home_provide_check_right">
                <p className="home_provided_p1">
                  <i className="bx bxs-check-circle change"></i>
                  <span className="home_provide_span">2,800+ </span> Active
                  clients
                </p>

                <p className="home_provided_p2 ">Get In Touch</p>
              </div>
            </div>
          </div>

          <div className="home_provide_right">
            <Image
              src={homeprovidebackfround}
              alt="home_provide_right_images"
              className="home_provide_right_background_images"
            />
          </div>
        </div>

        <div className="home_inspiration">
          <div className="home_inspiration_headings">
            <div className="home_inspiration_headings_left">
              <p className="home_inspiration_headings_p">
                <i className="bx bxs-rectangle"></i> Our Project
              </p>

              <h2 className="home_inspiration_h2">
                You can check our projects as inspirations.
              </h2>
            </div>

            <div className="home_inspiration_headings_right">
              <button className="home_inspiration_headings_right_buttons">
                More Work
              </button>
            </div>
          </div>

          <div className="home_inspiration_morework">
            <Image
              src={homeinspiration1}
              alt="projects images"
              className="home_inspiration_morework_images"
            />

            <Image
              src={homeinspiration2}
              alt="projects images"
              className="home_inspiration_morework_images"
            />

            <Image
              src={homeinspiration3}
              alt="projects images"
              className="home_inspiration_morework_images"
            />

            <Image
              src={homeinspiration4}
              alt="projects images"
              className="home_inspiration_morework_images"
            />
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
                “ Leverage agile frameworks to provide a robust synopsis for
                high level overviews ”
              </p>
            </div>
          </div>
        </div>

        <div className="home_appointment">
          <div className="home_appointment_left">
            <p className="home_appointment_p">
              <i className="bx bxs-rectangle ga"></i> How We Work
            </p>

            <h2 className="home_appointment_h2">
              To Get Your Business To The Next Level
            </h2>

            <p className="home_appointment_p1">
              Leverage agile frameworks to provide synopsis for high level
              overviews.Iterative approaches to corporate strategy foster
              collaborative thinking to further the overal.
            </p>

            <div className="home_appointment_projects">
              <Image
                src={homeappointment}
                alt="images projects"
                className="home_appointment_projects_images"
              />

              <p className="home_appointment_p2">
                We have 50+ years of experience. We offer whitecollar services
                to you
              </p>
            </div>

            <div className="home_appointment_check">
              <p className="home_appointment_check_p">
                <i className="bx bxs-check-circle change"></i>
              </p>

              <div className="home_appointment_check_plan">
                <h4 className="home_appointment_check_plan_h4">Planning</h4>
                <p className="home_appointment_check_plan_p">
                  Leverage agile frameworks to provide synopsis for high level
                  overviews.
                </p>
              </div>
            </div>

            <div className="home_appointment_check">
              <p className="home_appointment_check_p">
                <i className="bx bxs-check-circle change"></i>
              </p>

              <div className="home_appointment_check_plan">
                <h4 className="home_appointment_check_plan_h4">Planning</h4>
                <p className="home_appointment_check_plan_p">
                  Leverage agile frameworks to provide synopsis for high level
                  overviews.
                </p>
              </div>
            </div>

            <div className="home_appointment_check">
              <p className="home_appointment_check_p">
                <i className="bx bxs-check-circle change"></i>
              </p>

              <div className="home_appointment_check_plan">
                <h4 className="home_appointment_check_plan_h4">Planning</h4>
                <p className="home_appointment_check_plan_p">
                  Leverage agile frameworks to provide synopsis for high level
                  overviews.
                </p>
              </div>
            </div>

            <div className="home_appointment_check">
              <p className="home_appointment_check_p">
                <i className="bx bxs-check-circle change"></i>
              </p>

              <div className="home_appointment_check_plan">
                <h4 className="home_appointment_check_plan_h4">Planning</h4>
                <p className="home_appointment_check_plan_p">
                  Leverage agile frameworks to provide synopsis for high level
                  overviews.
                </p>
              </div>
            </div>
          </div>

          <div className="home_appointment_right">
            <p className="home_appointment_p">
              <i className="bx bxs-rectangle ga"></i> Book Now
            </p>

            <h2 className="home_appointment_h2">
              Get Free Business Appointment
            </h2>

            <div>
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="home_appointment_forms"
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input placeholder="Your name..." />
                </Form.Item>

                <Form.Item
                  name="emailaddress"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input placeholder="Your email..." />
                </Form.Item>

                <Form.Item
                  name="phonenumber"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input placeholder="Your phone number..." />
                </Form.Item>

                <Form.Item
                  name="date"
                  rules={[
                    { required: true, message: "Please input your date!" },
                  ]}
                >
                  <DatePicker
                    format="YYYY-MM-DD HH:mm:ss"
                    disabledDate={disabledDate}
                    disabledTime={disabledDateTime}
                    showTime={{ defaultValue: dayjs("00:00:00", "HH:mm:ss") }}
                    className="date_picker_input"
                  />
                </Form.Item>

                <Form.Item
                  name="description"
                  rules={[
                    {
                      required: true,
                      message: "Please input your description!",
                    },
                  ]}
                >
                  <TextArea
                    showCount
                    maxLength={100}
                    onChange={onChange}
                    placeholder="Your description..."
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="home_appointment_buttons"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>

        <div className="home_post">
          <Image
            src={homepostheadings}
            alt="Post images"
            className="home_post_headings_images"
          />

          <div className="home_post_box">
            <div className="home_post_recent_new">
              <div className="home_post_recent_new_left">
                <p className="home_post_recent_new_p">
                  <i className="bx bxs-rectangle ga"></i> Our Recent News
                </p>

                <h2 className="home_post_recent_new_h2">Latest Posts</h2>
              </div>

              <div className="home_post_recent_new_right">
                <button className="home_post_recent_new_buttons">
                  More News
                </button>
              </div>
            </div>

            <div className="home_post_recent_new_jobs">
              <div className="home_post_recent_new_jobs_left">
                <Image
                  src={homepostnewjobs1}
                  alt="jobs images"
                  className="home_post_new_jobs_images"
                />
                <h2 className="home_post_new_jobs_h2">New jobs!</h2>
                <p className="home_post_new_jobs_p">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews.Iterative approaches to corporate
                  strategy foster collaborative thinking.
                </p>
                <p className="home_post_new_jobs_p1">Read More</p>
              </div>

              <div className="home_post_recent_new_jobs_right">
                <Image
                  src={homepostnewjobs2}
                  alt="jobs images"
                  className="home_post_new_jobs_images"
                />
                <h2 className="home_post_new_jobs_h2">New jobs!</h2>
                <p className="home_post_new_jobs_p">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews.Iterative approaches to corporate
                  strategy foster collaborative thinking.
                </p>
                <p className="home_post_new_jobs_p1">Read More</p>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </LayoutSeo>
  );
}
