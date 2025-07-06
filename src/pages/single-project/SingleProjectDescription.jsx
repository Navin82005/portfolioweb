const ProjectDescription = ({ shortDescription, description }) => {
    return (
        <section className="py-8 px-4 md:py-16 md:px-12 overflow-hidden text-white">
            <h1 className="text-center text-4xl font-bold gradient-text mb-2">Description</h1>
            <h5 className="text-center text-lg text-muted-foreground font-semibold mb-8">
                Discover what makes this project unique
            </h5>

            <p className="mb-8 text-center text-xl font-medium text-zinc-300 first-letter-gradient">
                {shortDescription}
            </p>

            <div className="grid gap-6 md:grid-cols-2">
                {description.map((des, idx) => (
                    <div
                        key={idx}
                        className="bg-zinc-900/60 border border-zinc-700 rounded-xl p-5 shadow-lg hover:shadow-purple-500/20 transition-all"
                    >
                        <p className="text-zinc-200 text-base leading-relaxed first-letter-gradient">
                            {des}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectDescription;
