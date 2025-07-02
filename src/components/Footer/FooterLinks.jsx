import { Link } from "react-router-dom";

const FooterLinks = () => {
    return (
        <div className="h-full flex flex-row lg:flex-row lg:space-x-8 space-x-4 py-8 flex-wrap align-top justify-start">
            {/* Quick Links */}
            <ul className="flex flex-col items-start justify-start mt-4 lg:mt-0">
                <h1 className="text-2xl font-extrabold mb-3">Quick Links</h1>
                <li className="mb-2">
                    <Link to="/about" className="cursor-none text-white hover:text-[#7808d0] hover:underline font-semibold">
                        About Me
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/projects" className="cursor-none text-white hover:text-[#7808d0] hover:underline font-semibold">
                        My Projects
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/contact" className="cursor-none text-white hover:text-[#7808d0] hover:underline font-semibold">
                        Contact Me
                    </Link>
                </li>
            </ul>

            {/* Something Interesting */}
            <ul className="flex flex-col items-start justify-start mt-4 lg:mt-0">
                <h1 className="text-2xl font-extrabold mb-3">Something Interesting</h1>
                <li className="mb-2">
                    <Link to="/thoughts" className="cursor-none text-white hover:text-[#7808d0] hover:underline font-semibold">
                        What's on My Mind
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/timeline" className="cursor-none text-white hover:text-[#7808d0] hover:underline font-semibold">
                        My Journey
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/tools" className="cursor-none text-white hover:text-[#7808d0] hover:underline font-semibold">
                        Tech Stack
                    </Link>
                </li>
            </ul>

            {/* Shoutouts */}
            <ul className="flex flex-col items-start justify-start mt-4 lg:mt-0">
                <h1 className="text-2xl font-extrabold mb-3">Shoutouts</h1>
                <li className="mb-2">
                    <a
                        href="https://www.linkedin.com/in/naveenn82005/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-none text-white hover:text-[#7808d0] hover:underline font-semibold"
                    >
                        LinkedIn
                    </a>
                </li>
                <li className="mb-2">
                    <a
                        href="https://medium.com/@navin82005"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-none text-white hover:text-[#7808d0] hover:underline font-semibold"
                    >
                        Medium
                    </a>
                </li>
                <li className="mb-2">
                    <a
                        href="https://github.com/Navin82005"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-none text-white hover:text-[#7808d0] hover:underline font-semibold"
                    >
                        GitHub
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FooterLinks;
