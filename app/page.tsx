import ConsoleContainer from "./components/ConsoleContainer";
import Link from "next/link";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Home() {
  return (
    <>
      <main>
        <ConsoleContainer title="home" />
        <a
          href="/resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-500 hover:text-blue-700 hidden"
        >
          here
        </a>
      </main>
      <footer className=" text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <div className="flex mt-2">
              <a
                href="https://www.linkedin.com/in/fabian-marin-36bab01a1/"
                target="_blank"
                className="mr-4"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/fabian202"
                target="_blank"
                className="mr-4"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:famarin1k86@gmail.com"
                target="_blank"
                className="mr-4"
              >
                <MdOutlineAlternateEmail />
              </a>
              <a href="https://wa.me/573016442107" target="_blank">
                <FaWhatsapp />
              </a>
              {/* FaWhatsapp */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
