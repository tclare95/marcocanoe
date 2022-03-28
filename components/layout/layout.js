import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";
import bg from "../../public/images/DSC_7374.jpg";
import bgOverlay from "../../public/css/images/overlay.png";


export default function Layout({ children, isFrontPage }) {
  return (
    <>
      <Header isAlt={isFrontPage ? true : false} />
      {isFrontPage ? (
        <section id="banner" style={{backgroundImage: `url(${bg.src}), url(${bgOverlay.src})`}}>
          <h2>Marco Canoe Polo Club</h2>
          <p>Nottingham&apos;s Canoe Polo Club</p>
          <ul className="actions special">
            <li>
              <Link href="https://membermojo.co.uk/marco/">
                <a className="button primary">Sign up for Sessions</a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a className="button">Learn more about Us</a>
              </Link>
            </li>
          </ul>
        </section>
      ) : (
        ""
      )}
      <section id="main" className="container">
        {children}
      </section>
      <Footer />
    </>
  );
}
