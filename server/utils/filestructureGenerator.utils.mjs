import axios from "axios";
import { configDotenv } from "dotenv";

configDotenv();

const token = process.env.GITHUB_TOKEN;
const repoOwner = "Navin82005";
const branch = "main";

export async function generateFileStructure(repoName) {
    const baseUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/git/trees/${branch}?recursive=1`;
    const response = await axios.get(baseUrl, {
        headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github.v3+json"
        }
    });

    const tree = response.data.tree;

    // Helper function to build tree recursively
    const buildTree = (paths) => {
        const root = { id: "1", name: "root", isSelectable: true, children: [] };
        const idCounter = { current: 2 };

        for (const file of paths) {
            const parts = file.path.split("/");
            let current = root;

            for (let i = 0; i < parts.length; i++) {
                const name = parts[i];
                const isLeaf = i === parts.length - 1;

                if (!current.children) current.children = [];

                let existing = current.children.find(c => c.name === name);

                if (!existing) {
                    existing = {
                        id: String(idCounter.current++),
                        name,
                        isSelectable: true
                    };
                    if (!isLeaf) {
                        existing.children = [];
                    }

                    current.children.push(existing);
                }

                current = existing;
            }
        }

        return [root];
    };

    const fileStructure = buildTree(tree.filter((item) => item.type !== "commit"));

    // console.dir({ fileStructure }, { depth: null });
    return fileStructure;
}