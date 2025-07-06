const GameplayInstructions = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-8 px-4 md:py-16 md:px-12 ">
            <h2 className="text-2xl font-semibold mb-4">Gameplay Instructions</h2>
            <ul className="list-disc pl-6 space-y-2">
                {Object.entries(data).map(([key, instruction]) => (
                    <li key={key}>
                        <span className="capitalize font-medium">{key}:</span> {instruction}
                    </li>
                ))}
            </ul>
        </section>
    );
};


export default GameplayInstructions;