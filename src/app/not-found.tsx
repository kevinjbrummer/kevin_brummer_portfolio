import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <header className="header">
        <nav className="header__links">
          <Link tabIndex={0} href="/">
            Kevin Brummer <br /> Software Engineer
          </Link>
        </nav>
      </header>
      <main className="error">
        <div>
          <h1>
            404 <br /> Page Not Found
          </h1>
          <Link className="home-link" href={"/"}>
            Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
