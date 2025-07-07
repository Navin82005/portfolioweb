const logger = (req, res, next) => {
    const time = new Date().toISOString(); // e.g., 2025-06-20T05:32:10.123Z
    const method = req.method;
    const url = req.originalUrl;

    console.log(`[${time}] ${method} ${url}`);
    next();
};

export default logger;
