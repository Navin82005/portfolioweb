import { useState } from "react";

const ImageWithLoader = ({ src, alt, className, props }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="relative h-80 w-full">
            {loading && (
                <div className=" w-full absolute inset-0 flex items-center justify-center bg-neutral-900 rounded-xl">
                    <span className="loader w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                </div>
            )}
            <img
                {...props}
                src={src}
                alt={alt}
                className={`${className} ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
                onLoad={() => setLoading(false)}
            />
        </div>
    );
};

export default ImageWithLoader;
