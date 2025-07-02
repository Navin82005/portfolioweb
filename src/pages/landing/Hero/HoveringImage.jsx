import Images from "../../../assets/images/Images";
const HoveringImageNaveen = () => {
    return (
        <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-72 h-72 rounded-full blur-3xl opacity-60 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 animate-pulse"></div>
            </div>
            <img
                src={Images.Naveen}
                alt="Naveen N."
                className="relative w-128 h-128 object-contain animate-float drop-shadow-2xl"
                style={{
                    animation: "float 3s ease-in-out infinite"
                }}
            />
            <style>
                {`
                @keyframes float {
                    0% { transform: translateY(0px);}
                    50% { transform: translateY(-10px);}
                    100% { transform: translateY(0px);}
                }
                `}
            </style>
        </div>
    );
};

export default HoveringImageNaveen;