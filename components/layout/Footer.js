import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        
          {" "}
          <li>
          <Link href="#">
            <a className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
            </Link>
          </li>
        
        
          <li>
          <Link href="#">
            <a className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
            </Link>
          </li>
        
        
          <li>
          <Link href="#">
            <a className="icon solid fa-map">
              <span className="label">Location</span>
            </a>
            </Link>
          </li>
        
      </ul>
      <ul className="copyright">
        <li>&copy; Tom Clare All rights reserved.</li>
      </ul>
    </footer>
  );
}
