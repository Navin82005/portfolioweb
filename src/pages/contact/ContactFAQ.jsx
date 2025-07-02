import React from 'react'

const ContactFAQ = () => {
    return (
        <section className="px-10 py-15 md:flex-row md:px-20 md:py-20">
            <h2 className="text-2xl font-bold mb-4">Before You Reach Out</h2>
            <ul className="space-y-4 text-muted-foreground">
                <li>
                    <strong>⏳ Response time:</strong> I usually reply within 24–48 hours.
                </li>
                <li>
                    <strong>🎯 Projects I take:</strong> Freelance dashboards, dev tools, portfolio builds, AI-powered apps, and side project consulting.
                </li>
                <li>
                    <strong>📅 Availability:</strong> Currently accepting part-time freelance/contract work.
                </li>
            </ul>
        </section>
    )
}

export default ContactFAQ