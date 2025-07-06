const ContactSection = ({ email, linkedin }) => (
    <section className="mt-10 border-t pt-6">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <ul className="space-y-2">
            {email && <li><strong>Email:</strong> <a href={`mailto:${email}`} className="text-blue-500 underline">{email}</a></li>}
            {linkedin && <li><strong>LinkedIn:</strong> <a href={linkedin} className="text-blue-500 underline">{linkedin}</a></li>}
        </ul>
    </section>
);

export default ContactSection;