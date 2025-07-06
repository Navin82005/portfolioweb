import { Code2 } from "lucide-react";
import LinkCopyButton from "../../components/ui/copy-link";

const ResourceLinks = ({ frontend, backend }) => {
    if (!frontend && !backend) return null;

    return (
        <section className="py-8 px-4 md:py-16 md:px-12 ">
            <h2 className="text-3xl font-extrabold text-center mb-6 gradient-text">Repositories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
                {frontend && (
                    <div className="flex flex-col gap-3 p-4 rounded-xl border border-zinc-700 bg-zinc-900/50 hover:shadow-md transition group">
                        <div className="flex items-center gap-2">
                            <Code2 className="text-purple-400" size={20} />
                            <span className="font-semibold text-zinc-100 text-sm sm:text-base">Frontend Repository</span>
                        </div>
                        <LinkCopyButton className="overflow-ellipsis" link_text={frontend} />
                    </div>
                )}

                {backend && (
                    <div className="flex flex-col gap-3 p-4 rounded-xl border border-zinc-700 bg-zinc-900/50 hover:shadow-md transition group">
                        <div className="flex items-center gap-2">
                            <Code2 className="text-orange-400" size={20} />
                            <span className="font-semibold text-zinc-100 text-sm sm:text-base">Backend Repository</span>
                        </div>
                        <LinkCopyButton link_text={backend} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default ResourceLinks;
