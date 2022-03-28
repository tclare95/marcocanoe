export default function TwoBox() {
  return (
    <div className="row">
      <div className="col-6 col-12-narrower">
        <section className="box special">
          <span className="image featured">
            <img src="images/pic02.jpg" alt="" />
          </span>
          <h3>Sed lorem adipiscing</h3>
          <p>
            Integer volutpat ante et accumsan commophasellus sed aliquam feugiat
            lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna
            aliquam veroeros.
          </p>
          <ul className="actions special">
            <li>
              <a href="#" className="button alt">
                Learn More
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="col-6 col-12-narrower">
        <section className="box special">
          <span className="image featured">
            <img src="images/pic03.jpg" alt="" />
          </span>
          <h3>Accumsan integer</h3>
          <p>
            Integer volutpat ante et accumsan commophasellus sed aliquam feugiat
            lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna
            aliquam veroeros.
          </p>
          <ul className="actions special">
            <li>
              <a href="#" className="button alt">
                Learn More
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
