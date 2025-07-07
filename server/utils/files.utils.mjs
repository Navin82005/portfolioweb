import path from "path";

export const getLangFromExtension = (filename) => {
    const ext = path.extname(filename).toLowerCase();

    switch (ext) {
        case ".js":
        case ".jsx":
            return "javascript";
        case ".ts":
        case ".tsx":
            return "typescript";
        case ".py":
            return "python";
        case ".java":
            return "java";
        case ".rb":
            return "ruby";
        case ".php":
            return "php";
        case ".html":
            return "html";
        case ".css":
            return "css";
        case ".json":
            return "json";
        case ".md":
            return "markdown";
        case ".sh":
            return "bash";
        case ".c":
            return "c";
        case ".cpp":
            return "cpp";
        case ".go":
            return "go";
        case ".rs":
            return "rust";
        default:
            return "plaintext";
    }
};
