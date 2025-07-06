"use client";

import { Tree, Folder, File } from "@/components/ui/file-tree";
import { Fragment } from "react";
import VSCodeEditor from "../../components/VSCodeEditor";

const formatCodePreview = (code, maxLines = 25) => {
    // Escape backslashes for safe JS rendering
    const escapedCode = code.replace(/\\/g, '\\\\');

    // Split into lines
    const lines = escapedCode.split('\n');

    // Check if code exceeds the max line limit
    if (lines.length > maxLines) {
        const sliced = lines.slice(0, maxLines);
        sliced.push('...'); // Append ellipsis
        return sliced.join('\n');
    }

    // If it's short enough, just return it
    return escapedCode;
}


const renderTree = (nodes) => {
    return nodes.map((node) => {
        if (node.children && node.children.length > 0) {
            return (
                <Folder key={node.id} value={node.id} element={node.name}>
                    {renderTree(node.children)}
                </Folder>
            );
        } else {
            return (
                <File key={node.id} value={node.id}>
                    <p>{node.name}</p>
                </File>
            );
        }
    });
};

const FileStructureList = ({ elements, mainDocument }) => {
    console.log("mainDocument", mainDocument);

    if (!elements || !elements.length) return null;

    return (
        <div className="py-8 px-4 md:py-16 md:px-12 flex">
            <section className="w-1/3">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">File Structure</h2>
                    <div className="relative flex h-[300px] mr-5 flex-col overflow-hidden rounded-lg border bg-background">
                        <Tree
                            className="overflow-hidden rounded-md bg-background p-2"
                            initialExpandedItems={getAllFolderIds(elements)}
                            initialSelectedId={getFirstFileId(elements)}
                            elements={elements}
                        >
                            {renderTree(elements)}
                        </Tree>
                    </div>
                </div>
            </section>
            <VSCodeEditor
                code={formatCodePreview(mainDocument.code)}
                language={mainDocument.lang}
                filename={mainDocument.filename}
                className="w-2/3"
            />

        </div>
    );
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


export default FileStructureList;
