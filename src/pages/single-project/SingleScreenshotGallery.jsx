import ImageWithLoader from "../../components/ImageWithLoader";

const ScreenshotGallery = ({ images }) => {
    
    if (!images || Object.keys(images).length === 0) return null;

    return (
        <section className="py-8 px-4 md:py-16 md:px-12 ">
            <h2 className="text-3xl font-extrabold text-center mb-6">Demo <span className="gradient-text">Screenshots</span></h2>
            <div className="flex justify-center items-center flex-wrap gap-6">
                {images.map((image, idx) => {
                    return <div key={idx} className="flex flex-col items-center text-center">
                        <div className="overflow-hidden rounded-xl shadow-md border border-zinc-800 bg-zinc-900/40 hover:scale-[1.03] transition-transform duration-300">
                            <ImageWithLoader
                                src={image.src}
                                alt={image.title}
                                className="object-cover w-80"
                            />
                        </div>
                        <p className="mt-3 text-sm font-medium text-zinc-300">
                            {image.title?.replace(/([A-Z])/g, ' $1').replace(/^\w/, c => c.toUpperCase())}
                        </p>
                    </div>
                })}
            </div>
        </section>
    );
};

export default ScreenshotGallery;
