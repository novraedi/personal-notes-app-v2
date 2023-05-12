import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <h1>
        <Link to="/">Aplikasi Catatan</Link>
      </h1>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/archives">Arsip</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
