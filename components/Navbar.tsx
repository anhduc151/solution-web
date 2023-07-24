import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import logo1 from "../public/images/logo.png";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isRenderActive, setIsRenderActive] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const router = useRouter();

  useEffect(() => {
    const pathname = router.pathname;
    if (pathname === "/") {
      setActiveMenu("/");
    } else {
      setActiveMenu(pathname.substr(0));
    }
  }, [router.pathname, isRenderActive]);

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const checkboxElement = document.getElementById(
      "checkbox"
    ) as HTMLInputElement;
    checkboxElement.checked = false;
  }, []);

  const handleMenuClick = (menuName: string) => {
    const pathname = router.pathname;
    if (pathname === menuName) {
      setIsRenderActive(!isRenderActive); //để active lại cái navbar đang đứng hiện tại khi user click lại đúng thẻ đang đứng
      const windowWidth = window.innerWidth;
      // Kiểm tra điều kiện để đóng menu
      if (windowWidth > 1300) {
        setIsMenuOpen(false);
        const checkboxElement = document.getElementById(
          "checkbox"
        ) as HTMLInputElement;
        if (checkboxElement) {
          checkboxElement.checked = isMenuOpen;
        }
      } else {
        setIsMenuOpen(!isMenuOpen);
        const checkboxElement = document.getElementById(
          "checkbox"
        ) as HTMLInputElement;
        if (checkboxElement) {
          checkboxElement.checked = !isMenuOpen;
        }
      }
    }
    router.push(menuName);
  };

  useEffect(() => {
    const handleResize = () => {
      // Lấy kích thước màn hình hiện tại
      const windowWidth = window.innerWidth;
      // Kiểm tra điều kiện để đóng menu
      if (windowWidth > 1300) {
        setIsMenuOpen(false);
        const checkboxElement = document.getElementById(
          "checkbox"
        ) as HTMLInputElement;
        if (checkboxElement) {
          checkboxElement.checked = isMenuOpen;
        }
      }
    };
    // Đăng ký sự kiện resize để lắng nghe thay đổi kích thước màn hình
    window.addEventListener("resize", handleResize);
    // Hủy đăng ký sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="navbar aos-init aos-animate">
      <div className="navbar-header">
        <Link href="/">
          <Image src={logo1} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      <div className="nav_customs">
        <div className="navbar_rights">
          <ul
            className={`navbar-nav ${
              isMenuOpen ? "open" : "close"
            } aos-init aos-animate`}
          >
            <li className={activeMenu === "/" ? "active" : ""}>
              <Link
                href="/"
                onClick={() => handleMenuClick("/")}
                className="nav_li"
              >
                Home
              </Link>
            </li>
            <li className={activeMenu === "/about-us" ? "active" : ""}>
              <Link
                href="/about-us"
                onClick={() => handleMenuClick("/about-us")}
                className="nav_li"
              >
                About Us
              </Link>
            </li>
            <li className={activeMenu === "/pages" ? "actives" : ""}>
              <div className="dropdown">
                <Link
                  href=""
                  className="dropdown-link"
                  onClick={(e) => {
                    e.preventDefault(), toggleDropdown();
                  }}
                >
                  Pages{" "}
                  <i
                    className={`bx bx-chevron-up ${
                      !isDropdownOpen ? "openarr" : " "
                    }`}
                  ></i>
                  {/* Pages{isDropdownOpen ? (<i className='bx bx-chevron-up'></i>) : (<i className="bx bx-chevron-down"></i>)} */}
                </Link>
                <ul
                  className={`dropdown-content ${
                    isDropdownOpen ? "active" : ""
                  }`}
                >
                  <li className="dropdown_content_li">
                    <Link href="/team" onClick={() => handleMenuClick("/team")}>
                      Team
                    </Link>
                  </li>

                  <li className="dropdown_content_li">
                    <Link href="/project" onClick={() => handleMenuClick("/project")}>
                      Project
                    </Link>
                  </li>

                  <li className="dropdown_content_li">
                    <Link href="/license" onClick={() => handleMenuClick("/license")}>
                      License
                    </Link>
                  </li>

                  <li className="dropdown_content_li">
                    <Link
                      href="/price-pack"
                      onClick={() => handleMenuClick("/price-pack")}
                    >
                      Price Pack
                    </Link>
                  </li>

                  <li className="dropdown_content_li1">
                    <Link href="/faq" onClick={() => handleMenuClick("/faq")}>
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={activeMenu === "/our-services" ? "active" : ""}>
              <Link
                href="/our-services"
                onClick={() => handleMenuClick("/our-services")}
                className="nav_li"
              >
                Services
              </Link>
            </li>
            <li className={activeMenu === "/blog" ? "active" : ""}>
              <Link
                href="/blog"
                onClick={() => handleMenuClick("/blog")}
                className="nav_li"
              >
                Blog
              </Link>
            </li>
            <li className={activeMenu === "/contact-us" ? "active" : ""}>
              <Link
                href="/contact-us"
                onClick={() => handleMenuClick("/contact-us")}
                className="nav_li"
              >
                Contact Us
              </Link>
            </li>
            <li className={activeMenu === "/get-consulting" ? "active" : ""}>
              <Link
                href="/get-consulting"
                onClick={() => handleMenuClick("/get-consulting")}
                className="nav_li_1"
              >
                Get Consulting
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar_button">
          <ul className="navbar_button_ul">
            <li>
              <Link href="/get-consulting" className="navbar_button_ul_li1">
                Get Consulting
              </Link>
            </li>
          </ul>
          <div className="navbar_toggle_button">
            <input type="checkbox" id="checkbox"></input>
            <label
              onClick={handleMenuToggle}
              htmlFor="checkbox"
              className="navbar-toggler"
            >
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
