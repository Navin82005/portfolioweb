import { Tree, Folder, File } from "@/components/ui/file-tree";
import VSCodeEditor from "../../components/VSCodeEditor";
import { useEffect, useState } from "react";
import { getFileData, getFileStructure } from "../../controllers/project.controller.mjs"; // ensure this is valid
import { ArrowLeft, ChevronLeft, Loader2 } from "lucide-react";
import { SkeletonBox } from "../../components/ui/SkeletonLoader";
import VSCodeEditorLoader from "../../components/VSCodeEditorLoader";
// import { Skeleton } from "@/components/ui/skeleton";

const formatCodePreview = (code, maxLines = 24) => {
    if (!code) return "";
    const escapedCode = code.replace(/\\/g, "\\\\");
    const lines = escapedCode.split("\n");
    return lines.length > maxLines ? [...lines.slice(0, maxLines), "..."].join("\n") : escapedCode;
};

const getAllFolderIds = (nodes, ids = []) => {
    nodes.forEach((node) => {
        if (node.children && node.children.length > 0) {
            ids.push(node.id);
            getAllFolderIds(node.children, ids);
        }
    });
    return ids;
};

const getFirstFileId = (nodes) => {
    for (let node of nodes) {
        if (node.children && node.children.length > 0) {
            const id = getFirstFileId(node.children);
            if (id) return id;
        } else {
            return node.id;
        }
    }
    return null;
};

const FileStructureList = ({ projectName }) => {
    const [fileStructure, setFileStructure] = useState([]);
    const [mainDocument, setMainDocument] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedFileId, setSelectedFileId] = useState(null);
    const [isCodeLoading, setIsCodeLoading] = useState(true);
    const [editorData, setEditorData] = useState(null);
    const [showTree, setShowTree] = useState(false);

    const handleFileLoad = async (filepath, id) => {
        console.log(filepath);

        const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".webp", ".svg"];
        const isImage = imageExtensions.some((ext) => filepath.toLowerCase().endsWith(ext));
        const cleanedPath = filepath.startsWith("root/") ? filepath.replace("root/", "") : filepath;

        if (isImage) {
            const imageUrl = `https://raw.githubusercontent.com/Navin82005/${projectName}/main/${cleanedPath}`;
            window.open(imageUrl, "_blank");
            return;
        }

        setIsCodeLoading(true);
        const response = await getFileData(projectName, filepath);
        setIsCodeLoading(false);

        if (!response.error) {
            setEditorData(response.fileData);
            setSelectedFileId(id);
        } else {
            console.error("Error fetching file data:", response.errorMessage);
        }
    };


    const renderTree = (nodes, currentPath = "") => {
        return nodes.map((node) => {
            const newPath = currentPath ? `${currentPath}/${node.name}` : node.name;

            if (node.children && node.children.length > 0) {
                return (
                    <Folder key={node.id} value={node.id} element={node.name}>
                        {renderTree(node.children, newPath)}
                    </Folder>
                );
            }

            return (
                <File
                    key={node.id}
                    value={node.id}
                    isSelect={selectedFileId === node.id}
                    onClick={() => handleFileLoad(newPath, node.id)}
                >
                    <p>{node.name}</p>
                </File>
            );
        });
    };


    useEffect(() => {
        if (fileStructure.length === 0) return;

        const findReadme = (nodes) => {
            for (let node of nodes) {
                if (node.name === "README.md") return node;
                if (node.children) {
                    const found = findReadme(node.children);
                    if (found) return found;
                }
            }
            return null;
        };

        const readmeNode = findReadme(fileStructure);
        if (readmeNode) {
            setSelectedFileId(readmeNode.id);
            handleFileLoad("README.md", readmeNode.id);
        }
    }, [fileStructure]);


    useEffect(() => {
        const loadFileStructure = async () => {
            setIsLoading(true);
            try {
                const response = await getFileStructure(projectName);
                if (!response.error) {
                    setFileStructure(response.data.fileStructure || []);
                    setMainDocument(response.data.mainDocument || {});
                } else {
                    console.error("Fetch error:", response.error);
                }
            } catch (err) {
                console.error("File structure load error:", err);
            }
            setIsLoading(false);
        };
        handleFileLoad("README.md")
        loadFileStructure();
    }, [projectName]);

    return (
        <div className="w-full py-8 px-4 md:py-16 md:px-12 flex gap-6">
            {!showTree && (
                <button
                    onClick={() => setShowTree(true)}
                    className="lg:hidden transition-all duration-300 cursor-none top-20 left-2 z-50 bg-gray-800 text-white px-2 py-1 rounded-r-md shadow-md"
                >
                    →
                </button>
            )}

            <div
                className={`${showTree ? "block" : "hidden"}  transition-all duration-300 lg:block w-full lg:w-1/3 transition-all duration-300 ease-in-out`}
            >
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold">📁 File Structure</h2>
                    <button
                        onClick={() => setShowTree(false)}
                        className="lg:hidden cursor-none px-2 py-1 text-xs"
                    >
                        <ChevronLeft />
                    </button>
                </div>

                <div className="relative transition-all duration-300 flex h-[450px] flex-col overflow-auto rounded-lg border bg-background p-2">
                    {isLoading ? (
                        <div className="flex flex-col gap-2 px-2 py-4">
                            {[...Array(6)].map((_, i) => (
                                <SkeletonBox key={i} className="h-6 w-3/4" />
                            ))}
                        </div>
                    ) : fileStructure.length > 0 ? (
                        <Tree
                            className="overflow-hidden rounded-md bg-background p-2"
                            initialExpandedItems={[]}
                            initialSelectedId={selectedFileId}
                            elements={fileStructure}
                        >
                            {renderTree(fileStructure)}
                        </Tree>
                    ) : (
                        <p className="text-gray-400 text-sm px-3 py-2">No files found.</p>
                    )}
                </div>
            </div>


            {/* Code Viewer Section */}
            <div className={`${showTree ? "w-2/3" : "w-2/3"} transition-all duration-300`}>
                {isCodeLoading ? (
                    <VSCodeEditorLoader />
                ) : editorData ? (
                    <VSCodeEditor
                        link={editorData.fileLink}
                        code={formatCodePreview(editorData.code)}
                        language={editorData.lang}
                        filename={editorData.filename}
                    />
                ) : (
                    <p className="text-gray-400 text-sm">No document preview available.</p>
                )}

            </div>
        </div>
    );
};

export default FileStructureList;
