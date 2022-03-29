import BodyWrapper from "../components/layout/BodyWrapper";
import Layout from "../components/layout/layout";
import Head from "next/head";

export default function Contact() {
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
            <h2>Contact</h2>
            <p>Get in touch! Email contact@marcocanoepolo.club or fill in the form below</p>
          </header>
          <div className="box">
						<form method="post" action="https://formspree.io/f/xqkndlab">
							<div className="row gtr-50 gtr-uniform">
								<div className="col-6 col-12-mobilep">
									<input type="text" name="name" id="name" defaultValue="" placeholder="Name" />
								</div>
								<div className="col-6 col-12-mobilep">
									<input type="email" name="email" id="email" defaultValue="" placeholder="Email" />
								</div>
								<div className="col-12">
									<input type="text" name="subject" id="subject" defaultValue="" placeholder="Subject" />
								</div>
								<div className="col-12">
									<textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
								</div>
								<div className="col-12">
									<ul className="actions special">
										<li><input type="submit" defaultValue="Send Message" /></li>
									</ul>
								</div>
							</div>
						</form>
					</div>

        </Layout>
      </BodyWrapper>
    </>
  );
}
