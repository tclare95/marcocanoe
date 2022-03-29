import Image from "next/image";

export default function TwoBox({title1, bodyText1, image1, title2, bodyText2, image2}) {
  return (
    <div className="row">
      <div className="col-6 col-12-narrower">
        <section className="box special">
          <span className="image featured">
          <Image
              src={image2}
              alt="General Sec"
              layout="responsive"
            />
          </span>
          <h3>{title1}</h3>
          <p>
            {bodyText1}
          </p>
        </section>
      </div>
      <div className="col-6 col-12-narrower">
        <section className="box special">
          <span className="image featured">
          <Image
              src={image2}
              alt="General Sec"
              layout="responsive"
            />
          </span>
          <h3>{title2}</h3>
          <p>
            {bodyText2}
          </p>
        </section>
      </div>
    </div>
  );
}
