import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        
          {" "}
          <li>
          <Link href="https://www.facebook.com/groups/1176598942778869">
            <a className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
            </Link>
          </li>
        
        
          <li>
          <Link href="https://www.instagram.com/marcocanoeclub/">
            <a className="icon brands fa-instagram">
              <span className="label">Instagram</span>
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
