import { CTAButton1 } from "./CTAButton";

import bgConnectImage from "../../../assets/images/global-network-icon.png";

const WorkWithMeCTA = () => {
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                    Ready to take your project to the next level?
                </h2>
                <div className="flex flex-col items-center mt-8 justify-between h-full lg:flex-row gap-10 lg:h-[60vh]">
                    <div className="relative w-full lg:w-1/2 flex justify-center items-center lg:h-full lg:min-h-[60vh] h-[30vh]">
                        <img
                            src={bgConnectImage}
                            alt="Network background"
                            className="z-0 absolute inset-0 w-full h-full object-contain opacity-50"
                        />
                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                            <CTAButton1 />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-3">
                        <p className="mt-4 text-lg text-gray-600 dark:text-white">
                            I don't just write code<span className="gradient-text"> — I</span> bring ideas to life. With a strong foundation in full-stack development, a design-first mindset, and a passion for building things that matter, I focus on creating user experiences that are both functional and delightful.
                        </p>
                        <p className="mt-2 text-lg text-gray-600 dark:text-white">
                            Whether it's a product, a prototype, or a problem to solve, I bring clarity, curiosity, and a commitment to ship.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkWithMeCTA;