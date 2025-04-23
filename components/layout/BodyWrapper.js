import Link from "next/link";
import { useState } from "react";

export default function BodyWrapper({ children, classType }) {
  const [navPanelVis, setnavPanelVis] = useState(false);

  const handleClick = () => {
    setnavPanelVis(!navPanelVis);
  };
  return (
    <div className={`${classType} ${navPanelVis ? "navPanel-visible" : ""}`}>
      <div id="page-wrapper">{children}</div>
      <div id="navButton">
        <a href="#navPanel" className="toggle" onClick={handleClick}></a>
      </div>
      <div id="navPanel">
        <nav>
          <Link href="/">
            <a className="link">Home</a>
          </Link>
          {/* <Link href="/committee">
            <a className="link" >Committee</a>
          </Link> */}
          <Link href="/contact">
            <a className="link" >Contact</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
