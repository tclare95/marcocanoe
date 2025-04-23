import Link from "next/link";

export default function Header({ isAlt }) {
   
  return (
    <header id="header" className={isAlt ? "alt" : ""}>
      <h1>
        <Link href="/">
          <a>Marco Canoe Polo Club</a>
        </Link>
      </h1>
      <nav id="nav">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          {/* <li>
            <Link href="/committee">
              <a>Committee</a>
            </Link>
          </li> */}

          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}

/* <li>
            <a href="#" className="icon solid fa-angle-down">
              Layouts
            </a>
            <ul>
              <li>
                <a href="generic.html">Generic</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="elements.html">Elements</a>
              </li>
              <li>
                <a href="#">Submenu</a>
                <ul>
                  <li>
                    <a href="#">Option One</a>
                  </li>
                  <li>
                    <a href="#">Option Two</a>
                  </li>
                  <li>
                    <a href="#">Option Three</a>
                  </li>
                  <li>
                    <a href="#">Option Four</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li> */
