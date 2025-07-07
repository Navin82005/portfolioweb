import axios from "axios";
import { generateFileStructure } from "../utils/filestructureGenerator.utils.mjs";
import { GenerateDocumentWithAi } from "../utils/generateDocument.ai.mjs";
import { getLangFromExtension } from "../utils/files.utils.mjs";
import path from "path";

const formatCodePreview = (code, maxLines = 25) => {
    const escapedCode = code.replace(/\\/g, '\\\\');
    const lines = escapedCode.split('\n');
    if (lines.length > maxLines) {
        const sliced = lines.slice(0, maxLines);
        sliced.push('...');
        return sliced.join('\n');
    }
    return escapedCode;
};

export const getAllProjects = (req, res) => {
    res.json({ error: false, message: "All projects" });
};

export const getProjectById = async (req, res) => {
    try {
        const token = process.env.GITHUB_TOKEN;
        const repoOwner = "Navin82005";
        const { projectName } = req.params;
        console.log(projectName);


        const url = `https://api.github.com/repos/${repoOwner}/${projectName}/contents/README.md`;

        const response = await axios.get(url, {
            headers: {
                Authorization: `token ${token}`,
                Accept: "application/vnd.github.v3+json"
            }
        });

        const readmeContent = Buffer.from(response.data.content, 'base64').toString();
        const documentData = await GenerateDocumentWithAi(readmeContent);

        res.json({ error: false, project: projectName, documentData: documentData });
    } catch (err) {
        console.error("getProjectById Error:", err.message);
        res.status(500).json({ error: true, errorMessage: err.message });
    }
};

export const getProjectFileStructure = async (req, res) => {
    try {
        const { projectName } = req.params;
        console.log("FILESTRUCTURE:", projectName);
        const fileStructure = await generateFileStructure(projectName);
        res.json({ error: false, projectName, fileStructure: fileStructure });
    } catch (err) {
        console.error("getProjectFileStructure Error:", err.message);
        res.status(500).json({ error: true, errorMessage: err.message });
    }
};

export const getProjectFile = async (req, res) => {
    try {
        const token = process.env.GITHUB_TOKEN;
        const repoOwner = "Navin82005";
        const { projectName } = req.params;
        const { filepath } = req.body;

        const cleanedPath = filepath.startsWith("root/") ? filepath.replace("root/", "") : filepath;
        const targetPath = cleanedPath || "README.md";
        console.log(filepath, targetPath)

        const url = `https://api.github.com/repos/${repoOwner}/${projectName}/contents/${targetPath}`;

        console.log(url)

        const response = await axios.get(url, {
            headers: {
                Authorization: `token ${token}`,
                Accept: "application/vnd.github.v3+json",
            },
        });

        const rawContent = Buffer.from(response.data.content, "base64").toString("utf-8");
        const filename = path.basename(targetPath);
        const lang = getLangFromExtension(filename);

        const fileLink = `https://github.com/${repoOwner}/${projectName}/blob/main/${targetPath}`;

        res.json({
            error: false,
            fileData: {
                code: rawContent,
                lang,
                filename,
                fileLink,
            },
        });
    } catch (err) {
        console.error("getProjectFile Error:", err.message);
        res.status(500).json({ error: true, errorMessage: err.message });
    }
};