import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactOutro = () => {
    return (
        <section className="relative z-10 px-6 py-16 md:py-24 bg-black text-white overflow-hidden text-center">
            {/* Optional animated background if needed */}
            {/* <div className="absolute inset-0 -z-10 opacity-20 bg-gradient-to-tr from-purple-600 via-pink-500 to-red-500 blur-3xl" /> */}

            <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-xl md:text-2xl italic leading-relaxed text-gray-300">
                    Even if it's just to share a cool open-source repo or a random dev meme,
                    <span className="gradient-text font-semibold"> — my inbox</span> is always open 👋
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-base">
                    <a
                        href="mailto:navin82005@gmail.com"
                        className="flex items-center gap-2 px-4 py-3 cursor-none hover:underline backdrop-blur-lg transition duration-300 hover:text-red-400"
                    >
                        <FaEnvelope className="text-red-400" />
                        navin82005@gmail.com
                    </a>
                    <a
                        href="tel:+919894415673"
                        className="flex items-center gap-2 px-4 py-3 cursor-none hover:underline backdrop-blur-lg transition duration-300 hover:text-green-400"
                    >
                        <FaPhoneAlt className="text-green-400" />
                        +91 98944 15673
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactOutro;
