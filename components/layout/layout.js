import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";

export default function Layout({ children, isFrontPage }) {
  return (
    <>
      <Header isAlt={isFrontPage ? true : false} />
      {isFrontPage ? (
        <section id="banner">
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
