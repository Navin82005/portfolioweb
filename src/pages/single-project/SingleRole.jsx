import { User, Users, ShieldCheck } from "lucide-react";

const roleIcons = {
    student: <User className="text-sky-500" />,
    staff: <Users className="text-pink-500" />,
    admin: <ShieldCheck className="text-green-500" />,
};

const RoleSection = ({ roles }) => {
    if (!roles) return null;

    return (
        <section className="py-8 px-4 md:py-16 md:px-12 ">
            <h2 className="text-center text-3xl font-extrabold mb-8"><span className="gradient-text">Role-Based</span> Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(roles).map(([role, duties], idx) => (
                    <div
                        key={idx}
                        className="group border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 transition-all duration-200 rounded-xl p-6 shadow-lg hover:shadow-xl"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xl">{roleIcons[role] || <User className="text-neutral-400" />}</span>
                            <h3 className="text-xl font-semibold capitalize text-white">{role}</h3>
                        </div>
                        <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
                            {duties.map((duty, i) => (
                                <li key={i}>{duty}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RoleSection;
