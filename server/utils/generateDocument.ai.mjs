import axios from "axios";

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

export const GenerateDocumentWithAi = async (readme) => {
    const prompt = `
You are an expert GitHub portfolio parser. Your task is to extract important portfolio information from a README.md file and return it as a structured **valid JSON**.

The README will describe a project with sections like title, description, features, technologies used, screenshots, license, etc.

Your output must follow this structure:

{
  "name": "string",                    // Project name (without emojis)
  "tagline": "string",                // 1-sentence headline or short catchy tagline
  "shortDescription": "string",       // A 1–2 sentence overview of the app
  "heroSrc": "string",                // Full link to thumbnail image (append '?raw=true' if image is from GitHub)
  "description": ["string", ...],     // Array of descriptive paragraphs from README
  "features": ["string", ...],        // Bullet points or feature list
  "techStack": {
    "frontend": ["string", ...],      // Technologies for frontend
    "backend": ["string", ...],       // Technologies for backend (if mentioned)
    "database": ["string", ...],      // Databases used (optional)
    "storage": ["string", ...]        // If any storage service used (Firebase, Cloudinary etc.)
  },
  "installation": ["string", ...],    // Steps to install or run the project (if available)
  "screenshots": [                    // If screenshots are included
    {
      "title": "string",
      "src": "string"                 // Append '?raw=true' to GitHub image links
    }
  ],
  "license": "string",                // License type (MIT, GPL, etc.)
  "contact": {
    "email": "string (if available)",
    "linkedin": "string (if available)",
    "other": "string (if mentioned)"
  }
}

### Important Notes:
- Remove emojis from project titles and headlines.
- If any images are from GitHub, convert them to raw format by adding '?raw=true' at the end of the image URL.
- Do not return markdown, only a **valid JSON** object. No explanation or extra text.
- Infer missing fields as best as possible.
- Return an empty string or array for any missing or unknown field.

Now, here's the README.md content:

${readme}
`;


    try {
        const res = await axios.post(
            GROQ_API_URL,
            {
                model: "llama3-8b-8192", // or "mixtral-8x7b-32768"
                messages: [
                    { role: "system", content: "You are a JSON extractor for GitHub portfolios." },
                    { role: "user", content: prompt },
                ],
                temperature: 0.5,
            },
            {
                headers: {
                    Authorization: `Bearer ${GROQ_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const text = res.data.choices?.[0]?.message?.content || "";
        const jsonStart = text.indexOf("{");
        const jsonEnd = text.lastIndexOf("}") + 1;

        if (jsonStart === -1 || jsonEnd === -1) {
            throw new Error("Failed to extract valid JSON from AI response.");
        }

        const jsonText = text.substring(jsonStart, jsonEnd);
        const generatedJSON = JSON.parse(jsonText);

        return generatedJSON;
    } catch (error) {
        console.error("❌ AI Document Generation Failed:", error?.message || error);
        return {
            error: true,
            message: "Document generation failed. Please verify the README content or try again later.",
        };
    }
};
