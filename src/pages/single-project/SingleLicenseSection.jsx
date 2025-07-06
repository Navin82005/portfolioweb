const LicenseSection = ({ license }) => (
    <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">License</h2>
        <p>This project is licensed under the <strong>{license}</strong> License.</p>
    </section>
);

export default LicenseSection;