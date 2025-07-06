const FeatureList = ({ features }) => (
    <section className="py-8 px-4 md:py-16 md:px-12">
        <h2 className="text-left text-3xl font-extrabold mb-8"><span className="gradient-text">Key</span> Features</h2>
        <div className="relative ml-6 border-l-2 border-dashed border-purple-500 pl-1.5 space-y-8">
            {features.map((feature, idx) => (
                <div key={idx} className="relative group hover:pl-3 transition-all duration-300">
                    <span className="absolute -left-4 top-1 w-6 h-6 rounded-full gradient-bg text-white font-bold text-xs flex items-center justify-center shadow-md">
                        {idx + 1}
                    </span>
                    <div className="bg-zinc-800/60 rounded-xl p-4 text-white border border-zinc-700 shadow-sm group-hover:shadow-lg transition-all">
                        <p className="font-medium text-base">{feature}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default FeatureList;
