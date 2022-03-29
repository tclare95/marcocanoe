import Link from "next/link";

export default function FourBox() {
  return (
    <section className="box special features">
      <div className="features-row">
        <section>
          <span className="icon solid major fa-calendar accent2"></span>
          <h3>Our Sessions</h3>
          <p>
            We have sessions twice a week, on Sunday and Wednesday. These are held at the National Watersports Centre (See Below). For more details on sessions please <Link href="/contact"><a className="link">get in touch</a></Link>.
          </p>
        </section>
        <section>
          <span className="icon solid major fa-water accent3"></span>
          <h3>About Canoe Polo</h3>
          <p>
          Canoe Polo is a 5 a side, fast and dynamic team sport where players compete to score goals in raised nets. Polo combines paddling and ball handling skills with an exciting contact team game, where tactics and positional play are as important as the speed and fitness of the individual athletes.
          </p>
        </section>
      </div>
      <div className="features-row">
        <section>
          <span className="icon solid major fa-map accent4"></span>
          <h3>Our Location</h3>
          <p>
            We are lucky to play at the British Canoe Polo home venue at the National Watersports Centre, Nottingham. There are four pitches available to us on a sheltered lake with all pitches having floating goals and full walkways. 
          </p>
        </section>
        <section>
          <span className="icon solid major fa-question accent5"></span>
          <h3>Questions?</h3>
          <p>
            We are always welcoming to new members. Whether you have never stepped foot in a kayak before or have played polo for years, please <Link href="/contact"><a className="link">get in touch</a></Link> and come along for a taster session!
          </p>
        </section>
      </div>
    </section>
  );
}
