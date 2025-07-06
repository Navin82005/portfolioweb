import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const GenerateDocumentWithAi = async (readme) => {
    const prompt = `
Act as a portfolio document formatter. I will give you a GitHub README.md text. Based on its content, generate a structured JSON object with the following fields:
- name (remove emoji if any)
- tagline
- shortDescription
- heroSrc (link of the thumbnail image if any) (don't forget to add '?raw=true' in the end of the image link)
- description (array)
- features
- techStack (frontend/backend or language/framework)
- installation (steps array)
- screenshots (if any) (don't forget to add '?raw=true' in the end of the image link)
create it in this format: [{title: '', src: ''}]
- license
- contact (if available)

Return only a valid JSON object.

README Content:
${readme}
    `;

    try {
        const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        const jsonStart = text.indexOf('{');
        const jsonEnd = text.lastIndexOf('}') + 1;

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
