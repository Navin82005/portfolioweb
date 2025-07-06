const AnalyticsImage = ({ src }) => (
    <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
        <img src={src} alt="Repo Analytics" className="w-full rounded shadow" />
    </section>
);

export default AnalyticsImage;