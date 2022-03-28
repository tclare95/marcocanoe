import BodyWrapper from "../components/layout/BodyWrapper";
import Layout from "../components/layout/layout";
import Image from "next/image";

import featuredImage from "../public/images/DSC_7215.jpg";
import FourBox from "../components/FourBox";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
            <title>Marco Canoe Polo Club</title>
            <meta property="og:title" content="Marco Canoe Polo Club" key="title" />
            <meta property="og:description" content="Nottingham's Canoe Polo Club" />
            <meta name="description" content="Nottingham's Canoe Polo Club"/>
            {/* <meta name="og:image" content="https://nottinghamwatersports.co.uk/robinhood.jpg" /> */}
        </Head>
    <BodyWrapper classType={"landing"}>
      <Layout isFrontPage={true}>
        <section id="about" className="box special">
          <header className="major">
            <h2>Nottingham&apos;s Canoe Polo Club</h2>
            <p>
              We play polo on a lake in Nottingham. More words, to make this up to a few more lines. Many more words needed. Many many many many more. All hail the goose overlords
            </p>
          </header>
          <span className="image featured">
            <Image
              src={featuredImage}
              alt="Canoe Polo at NWSC"
              layout="responsive"
            />
          </span>
        </section>
        <FourBox />
      </Layout>
    </BodyWrapper>
    </>
  );
}
