
import { GoogleGenAI } from "@google/genai";

// expert digital marketing assistant helper
export async function askAI(prompt: string) {
  try {
    // Corrected initialization: must use direct process.env.API_KEY and named parameter
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are an expert digital marketing assistant for "Niyaz Technologies" (owned by Shaik Akthar Basha). 
        Your goal is to help potential clients understand SEO, PPC, and Social Media strategies. 
        Be professional, helpful, and encourage them to book a consultation.
        Niyaz Technologies is based in Tirupati and specializes in 3D digital growth strategies.
        Keep responses concise and bulleted where possible.`,
        temperature: 0.7,
      }
    });
    // response.text is a property, not a method
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("AI Error:", error);
    return "The AI assistant is currently unavailable. Please try again later.";
  }
}
