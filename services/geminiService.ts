import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTravelRecommendation = async (userPrompt: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // Using a system instruction to keep the persona "Matreshka"
    const systemInstruction = `
      Ты — Матрёшка, умный помощник современного турагентства "Matreshki CO". 
      Твой стиль общения: теплый, гостеприимный, слегка игривый, но профессиональный. 
      Избегай клише и устаревших фраз. Ты современная русская душа.
      Твоя задача: кратко (до 50 слов) посоветовать направление или дать совет по путешествию на основе запроса пользователя.
      Используй эмодзи умеренно.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Извините, сейчас я не могу придумать ответ. Попробуйте позже!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ой, что-то пошло не так с магией путешествий. Попробуйте еще раз!";
  }
};