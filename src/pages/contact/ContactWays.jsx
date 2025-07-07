import ContactAnimatedBeam from "./ContactAnimatedBeam";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";

const socials = [
    {
        name: "GitHub",
        icon: <FaGithub className="text-2xl" />,
        url: "https://github.com/Navin82005",
        color: "hover:text-gray-300",
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin className="text-2xl" />,
        url: "https://www.linkedin.com/in/naveenn82005/",
        color: "hover:text-blue-400",
    },
    // {
    //     name: "Twitter",
    //     icon: <FaTwitter className="text-2xl" />,
    //     url: "https://twitter.com/navin82005",
    //     color: "hover:text-sky-400",
    // },
    {
        name: "Instagram",
        icon: <FaInstagram className="text-2xl" />,
        url: "https://www.instagram.com/_.nxvin._08/",
        color: "hover:text-pink-400",
    },
    {
        name: "Email",
        icon: <FaEnvelope className="text-2xl" />,
        url: "mailto:navin82005@gmail.com",
        color: "hover:text-red-400",
    },
];

const ContactWays = () => {
    return (
        <section className="relative z-10 px-6 py-12 md:px-20 md:py-20 bg-black overflow-hidden">
            <ContactAnimatedBeam className="absolute inset-0 -z-10 opacity-20" />
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    More Ways to Connect with <span className="gradient-text">ME</span>
                </h1>
                <p className="mt-3 text-gray-400 text-sm md:text-base">
                    Reach out anytime, anywhere — let's connect and collaborate.
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
                {socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`cursor-none flex items-center gap-3 px-5 py-4 border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-lg text-white rounded-lg transition duration-300 ${social.color}`}
                    >
                        {social.icon}
                        <span className="text-sm font-medium">{social.name}</span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ContactWays;
