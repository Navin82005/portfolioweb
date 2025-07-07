
import Minecraft from "@/assets/icon/Minecraft.png";


import { Pointer } from "@/components/Pointer.tsx"

import Naveen from "../Naveen"
import FooterLinks from "./FooterLinks"
import { Icons } from "../../pages/contact/ContactAnimatedBeam";

const Footer = () => {
    return (
        <footer className="bg-[#111] text-white py-4">
            <div className="px-12 md:px-24 py-8 flex min-h-[300px] flex-col lg:flex-row items-start justify-start">
                <div className="lg:w-1/2 py-8">
                    <Naveen className="font-bold cursor-none gap-1" fontSize={"3xl"} NHeight={32} NWidth={32} />
                    <h3 className="font-semibold">With all do respect a Divine Visionary</h3>
                </div>
                <div className="lg:w-1/2">
                    <FooterLinks />
                </div>

            </div>
            <Pointer>
                <span><img src={Minecraft} className="cover h-8 w-8 relative top-[-50%] left-[-50%] translate-y-[-50%]" /></span>
            </Pointer>
        </footer>
    )
}

export default Footer