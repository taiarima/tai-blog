import Link from "next/link";
import { FaYoutube, FaGithub, FaLaptopCode } from "react-icons/fa";

const linkStyle = "text-sky-50/90 hover:text-sky-50 px-4";

export default function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-black via-slate-950 to-gray-900 sticky p-4 top-0 z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <div className="grid place-content-center">
          <Link
            href="/"
            className="text-sky-50/90 hover:text-sky-50 no-underline font-title text-6xl font-bold"
          >
            Tai Blog
          </Link>
        </div>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-sky-50 text-4xl lg:text-6xl">
          <Link className={linkStyle} href="https://tai-arima.netlify.app/">
            <FaLaptopCode />
          </Link>
          <Link className={linkStyle} href="https://github.com/taiarima">
            <FaGithub />
          </Link>
          <Link
            className={linkStyle}
            href="https://www.youtube.com/channel/UCv2IiV6mwCMMe6nbWwYtghg"
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </nav>
  );
}
