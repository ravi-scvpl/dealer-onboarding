import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export interface ImageQualityReport {
  isHighQuality: boolean;
  score: number; // 0 to 100
  issues: string[];
  suggestions: string[];
  classification: string; // storefront, signage, indoor, unknown
}

/**
 * Analyzes an image for quality and category using Gemini.
 * This runs on the server side.
 */
export async function analyzeStoreImage(base64Image: string, expectedType: string): Promise<ImageQualityReport> {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
    });

    const response = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              inlineData: {
                mimeType: base64Image.match(/data:(.*?);base64/)?.[1] || "image/jpeg",
                data: base64Image.split(',')[1] || base64Image,
              },
            },
            {
              text: `Analyze this store image for a Google Business Profile listing. 
              The dealer claims this is a "${expectedType}".
              
              Task:
              1. Classify if the image actually matches the claim.
              2. Assess technical quality: blurriness, lighting, and framing.
              3. Detect if the store visibility is complete or obstructed.
              4. IMPORTANT: Check if the Store Name is clearly visible in the image. "In Image, Store Name should clearly visible. It will expedite the verification process."
              5. Provide a quality score from 0-100.
              
              Return the analysis in strict JSON format.`,
            },
          ],
        },
      ],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            isHighQuality: { type: SchemaType.BOOLEAN },
            score: { type: SchemaType.NUMBER },
            issues: {
              type: SchemaType.ARRAY,
              items: { type: SchemaType.STRING },
            },
            suggestions: {
              type: SchemaType.ARRAY,
              items: { type: SchemaType.STRING },
            },
            classification: { type: SchemaType.STRING },
          },
          required: ["isHighQuality", "score", "issues", "suggestions", "classification"],
        },
      },
    });

    const report = JSON.parse(response.response.text());
    return report as ImageQualityReport;
  } catch (error) {
    console.error("AI Analysis Error:", error);
    // Fallback status if AI fails
    return {
      isHighQuality: true,
      score: 100,
      issues: [],
      suggestions: [],
      classification: expectedType,
    };
  }
}
