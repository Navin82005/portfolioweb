import { CTAButton1 } from "./CTAButton";
import bgConnectImage from "../../../assets/images/global-network-icon.png";

const WorkWithMeCTA = () => {
    return (
        <section className="relative py-24 bg-black overflow-hidden text-white">
            {/* Blurred Background Graphic */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <img
                    src={bgConnectImage}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-contain opacity-10"
                />
                <div className="absolute inset-0 blur-2xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center lg:text-left mb-16">
                    Ready to take your <span className="gradient-text">project</span> to the next level?
                </h2>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-12">
                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                        <p className="text-lg md:text-xl text-white/90">
                            I don't just write code<span className="gradient-text"> — I</span> bring ideas to life.
                            With a full-stack mindset, design-first approach, and a passion for solving meaningful problems,
                            I turn concepts into interactive realities.
                        </p>
                        <p className="text-lg md:text-xl text-white/80">
                            Whether you're launching a product, building a prototype, or tackling a challenge,
                            I bring clarity, creativity, and commitment to ship.
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <div className="relative flex justify-center items-center w-full max-w-sm">
                            <div className="absolute -inset-2" />
                            <div className="relative z-10">
                                <CTAButton1 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkWithMeCTA;
