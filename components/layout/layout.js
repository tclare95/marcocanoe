import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, isFrontPage }) {
    
    
    
    return (
      <>
        <Header isAlt={isFrontPage ?  true : false} />
        {isFrontPage? <section id="banner">
					<h2>Marco Canoe Polo Club</h2>
					<p>Nottingham's Canoe Polo Club</p>
					<ul class="actions special">
						<li><a href="https://membermojo.co.uk/marco/" className="button primary">Sign up for Sessions</a></li>
						<li><a href="/#about" className="button">Learn more about Us</a></li>
					</ul>
				</section> : ""}
        <section id="main" className="container">{children}</section>
        <Footer />
      </>
    )
  }