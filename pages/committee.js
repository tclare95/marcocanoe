import BodyWrapper from "../components/layout/BodyWrapper";
import Layout from "../components/layout/layout";
import Head from "next/head";
import TwoBox from "../components/TwoBox";
import tamsyn from "../public/images/tamsyn.jpg"

// Temporary data for the committee info until I hook it up to CMS
const tamsynDesc = 'She runs around behind the scenes trying to keep things moving (most of the time) You also might find her down the road at the white water course where she spends a lot of time under water'
const nickDesc = 'He goes very very fast in a very very pointy boat'

export default function Committee() {
  return (
    <>
      <Head>
        <title>Marco Canoe Polo Club - Committee</title>
        <meta
          property="og:title"
          content="Marco Canoe Polo Club - Committee"
          key="title"
        />
        <meta
          property="og:description"
          content="Nottingham's Canoe Polo Club"
        />
        <meta name="description" content="Nottingham's Canoe Polo Club" />
        {/* <meta name="og:image" content="https://nottinghamwatersports.co.uk/robinhood.jpg" /> */}
      </Head>
      <BodyWrapper>
        <Layout>
          <header>
            <h2>Committee</h2>
            <p>The folks that make the club tick.</p>
          </header>
          <TwoBox title1={'Nick Boreham'} title2={'Tamsyn McConchie'} bodyText1={nickDesc} bodyText2={tamsynDesc} image2={tamsyn}/>
          <TwoBox title1={'Nick Boreham'} title2={'Tamsyn McConchie'} bodyText1={nickDesc} bodyText2={tamsynDesc} image2={tamsyn}/>

        </Layout>
      </BodyWrapper>
    </>
  );
}
