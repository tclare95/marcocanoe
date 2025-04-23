import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";
import bg from "../../images/DSC_7374.jpg";
import bgOverlay from "../../images/overlay.png";
import { useEffect, useState } from "react";

export default function Layout({ children, isFrontPage }) {
  const [bannerHeight, setBannerHeight] = useState(0);
  const [stickHeader, setstickHeader] = useState(isFrontPage? false : true);

  
  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > bannerHeight ){
      setstickHeader(true);
    }
    else{
      setstickHeader(false);
    }
  }

  useEffect(() => {
    
    // Get the Height of the Header Banner
    let height;
    document.getElementById("banner") ? height = document.getElementById("banner").clientHeight : height = -1;
    setBannerHeight(height);
    window.addEventListener("scroll", handleScroll);
  });

 

  return (
    <>
      <Header isAlt={stickHeader ? false : true}  isFrontPage={isFrontPage}/>
      {isFrontPage ? (
        <section
          id="banner"
          style={{ backgroundImage: `url(${bg.src}), url(${bgOverlay.src})` }}
        >
          <h2>Marco Canoe Polo Club</h2>
          <p>Nottingham&apos;s Canoe Polo Club</p>
          <ul className="actions special">
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
