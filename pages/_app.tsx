import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/footer.css";
import "../styles/boxicons.css";
import "../styles/navbar.css";
import "../styles/nav-contact.css";
import "../styles/home.css";
import "../styles/404.css";
import "../styles/faq.css";
import "../styles/contact.css";
import "../styles/team.css";
import "../styles/about-us.css";
import "../styles/our-services.css";
import "../styles/blog.css";
import "../styles/blog-details.css";
import "../styles/services-details.css";
import "../styles/price-pack.css";
import "../styles/project.css";
import "../styles/project-details.css";
import "../styles/password.css";
import "../styles/changelog.css";
import "../styles/license.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
